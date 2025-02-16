const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const setUser = (value) => {
  localStorage.setItem("user", JSON.stringify(value));
};

export { getUser, setUser };
