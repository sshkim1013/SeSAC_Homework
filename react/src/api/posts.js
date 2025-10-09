import axiosInstance from ".";

export async function getPosts() {
  const config = {
    method: "GET",
    url: `/posts`,
    params: {},
  };

  return await axiosInstance(config);
}
