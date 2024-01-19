const server = import.meta.env.VITE_SERVER;

const getSuspender= (promise) => {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  )

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  }

  return { read }
}

export const getAll = () => {
  const promise = fetch(`${server}/api/blog/`).then((response) => response.json()).then((data) => data)
  return getSuspender(promise)

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
