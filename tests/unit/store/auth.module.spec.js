import sinon from "sinon";

import { mutations, actions, getters } from "@/store/auth.module";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "@/store/mutations.type";
import JwtService from "@/common/jwt.service";
import ApiService from "@/common/api.service";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  UPDATE_USER
} from "@/store/actions.type";

describe("getters", () => {
  const state = {
    user: "Test User",
    isAuthenticated: true
  };

  it("currentUser", () => {
    expect(getters.currentUser(state)).toBe("Test User");
  });

  it("isAuthenticated", () => {
    expect(getters.isAuthenticated(state)).toBe(true);
  });
});

describe("mutations", () => {
  it("SET_ERROR", () => {
    const setError = mutations[SET_ERROR];
    const state = { errors: null };
    setError(state, "Test Error");

    expect(state.errors).toBe("Test Error");
  });

  it("SET_AUTH", () => {
    const stub = sinon.stub(JwtService, "saveToken");
    const setAuth = mutations[SET_AUTH];
    const state = {
      isAuthenticated: false,
      user: null,
      errors: "Some Error"
    };
    setAuth(state, { token: "Test Token" });

    expect(state).toEqual({
      isAuthenticated: true,
      user: { token: "Test Token" },
      errors: {}
    });

    expect(stub.calledOnceWith("Test Token")).toBe(true);
  });

  it("PURGE_AUTH", () => {
    const destroyToken = sinon.stub(JwtService, "destroyToken");
    const purgeAuth = mutations[PURGE_AUTH];
    const state = {
      isAuthenticated: true,
      user: "Test User",
      errors: "Some Error"
    };
    purgeAuth(state);

    expect(state).toEqual({
      isAuthenticated: false,
      user: {},
      errors: {}
    });

    expect(destroyToken.calledOnce).toBe(true);
  });
});

describe("actions", () => {
  let commit;

  const userPromise = Promise.resolve({ data: { user: "Test User" } });
  const tokenStub = sinon.stub(JwtService, "getToken");

  sinon.stub(ApiService, "post").returns(userPromise);
  sinon.stub(ApiService, "get").returns(userPromise);
  sinon.stub(ApiService, "put").returns(userPromise);
  sinon.stub(ApiService, "setHeader");

  beforeEach(() => {
    commit = sinon.spy();
  });

  it("LOGIN", done => {
    actions[LOGIN]({ commit }, {}).then(() => {
      expect(commit.calledOnceWith(SET_AUTH, "Test User")).toBe(true);
      done();
    });
  });

  it("LOGOUT", () => {
    actions[LOGOUT]({ commit });
    expect(commit.calledOnceWith(PURGE_AUTH)).toBe(true);
  });

  it("REGISTER", done => {
    actions[REGISTER]({ commit }, {}).then(() => {
      expect(commit.calledOnceWith(SET_AUTH, "Test User")).toBe(true);
      done();
    });
  });

  describe("CHECK_AUTH", () => {
    it("with token", done => {
      tokenStub.returns(true);

      actions[CHECK_AUTH]({ commit }).then(() => {
        expect(commit.calledOnceWith(SET_AUTH, "Test User")).toBe(true);
        done();
      });
    });

    it("without token", () => {
      tokenStub.returns(false);
      actions[CHECK_AUTH]({ commit });
      expect(commit.calledOnceWith(PURGE_AUTH)).toBe(true);
    });
  });

  it("UPDATE_USER", done => {
    const testUser = {
      email: "test@example.com",
      username: "testuser",
      password: "testpass123",
      image: "test.png",
      bio: "Test Bio"
    };

    actions[UPDATE_USER]({ commit }, testUser).then(() => {
      expect(commit.calledOnceWith(SET_AUTH, "Test User")).toBe(true);
      done();
    });
  });
});
