import useSWR from "swr";
import axios from "axios";

const fetcher = (url, token) =>
  axios
    .get(url, { headers: { "x-access-token": `${token}` } })
    .then((res) => res.data.data);

export const doLogin = (body) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/auth/`, body);
};

export const GetUser = (token) => {
  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_API_HOST}/user`, token],
    fetcher,
    { refreshInterval: 1000 }
  );
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
