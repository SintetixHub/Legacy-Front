const server = import.meta.env.VITE_SERVER;

export const getAll = async () => {
  try {
    const response = await fetch(`${server}/api/blog/`);
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

//get 5 tendencias y 5 ultimas agregadas

export const getById = async (blogId) => {
  try {
    const response = await fetch(`${server}/api/${blogId}`);
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createBlog = async ({ title, content }) => {
  try {
    const response = await fetch(`${server}/api/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
