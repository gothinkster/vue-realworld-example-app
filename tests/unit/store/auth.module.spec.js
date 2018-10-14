import auth from "@/store/auth.module";
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

jest.mock("@/common/api.service", () => ({
  post: jest.fn(),
  get: jest.fn(),
  put: jest.fn(),
  setHeader: jest.fn()
}));

jest.mock("@/common/jwt.service", () => ({
  saveToken: jest.fn(),
  destroyToken: jest.fn(),
  getToken: jest.fn()
}));

describe("getters", () => {
  const { getters } = auth;
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
  const { mutations } = auth;
  it("SET_ERROR", () => {
    const setError = mutations[SET_ERROR];
    const state = { errors: null };
    setError(state, "Test Error");

    expect(state.errors).toBe("Test Error");
  });

  it("SET_AUTH", () => {
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

    expect(JwtService.saveToken).toHaveBeenCalledWith("Test Token");
  });

  it("PURGE_AUTH", () => {
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

    expect(JwtService.destroyToken).toHaveBeenCalled();
  });
});

describe("actions", () => {
  const { actions } = auth;
  let commit;

  const userPromise = Promise.resolve({ data: { user: "Test User" } });
  ApiService.get.mockReturnValue(userPromise);
  ApiService.post.mockReturnValue(userPromise);
  ApiService.put.mockReturnValue(userPromise);

  beforeEach(() => {
    commit = jest.fn();
  });

  it("LOGIN", done => {
    actions[LOGIN]({ commit }, {}).then(() => {
      expect(commit).toHaveBeenCalledWith(SET_AUTH, "Test User");
      done();
    });
  });

  it("LOGOUT", () => {
    actions[LOGOUT]({ commit });
    expect(commit).toHaveBeenCalledWith(PURGE_AUTH);
  });

  it("REGISTER", done => {
    actions[REGISTER]({ commit }, {}).then(() => {
      expect(commit).toHaveBeenCalledWith(SET_AUTH, "Test User");
      done();
    });
  });

  describe("CHECK_AUTH", () => {
    it("with token", done => {
      JwtService.getToken.mockReturnValueOnce(true);

      actions[CHECK_AUTH]({ commit }).then(() => {
        expect(commit).toHaveBeenCalledWith(SET_AUTH, "Test User");
        done();
      });
    });

    it("without token", () => {
      JwtService.getToken.mockReturnValueOnce(false);
      actions[CHECK_AUTH]({ commit });
      expect(commit).toHaveBeenCalledWith(PURGE_AUTH);
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
      expect(commit).toHaveBeenCalledWith(SET_AUTH, "Test User");
      done();
    });
  });
});
