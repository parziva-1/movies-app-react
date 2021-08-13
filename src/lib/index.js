export const saveState = (store) =>
  window.localStorage.setItem("movie", JSON.stringify(store));
