import axiosInstance from ".";

export async function getQuotes() {
  const config = {
    method: "GET",
    url: `/quotes`,
    params: {},
  };

  return await axiosInstance(config);
}
