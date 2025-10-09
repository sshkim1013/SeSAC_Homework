import axiosInstance from ".";

export async function getProducts() {
  const config = {
    method: "GET",
    url: `/products`,
    params: {},
  };

  return await axiosInstance(config);
}
