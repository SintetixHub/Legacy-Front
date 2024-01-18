const server = import.meta.env.VITE_SERVER;

export const login = async (username, password) => {
  try {
    const response = await fetch(`${server}/api/auth/login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const signup = async (username, password) => {
  try {
    const response = await fetch(`${server}/api/auth/signup`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
