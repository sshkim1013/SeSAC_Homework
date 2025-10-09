import axiosInstance from ".";

export async function getCarts() {
  const config = {
    method: "GET",
    url: `/carts`,
    params: {},
  };

  return await axiosInstance(config);
}
