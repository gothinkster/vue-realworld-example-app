const ID_TOKEN_KEY = "id_token";

const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

const saveToken = token => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export default { getToken, saveToken, destroyToken };
