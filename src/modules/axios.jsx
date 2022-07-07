import useSWR from "swr";
import axios from "axios";

const fetcher = (url, token) =>
  axios
    .get(url, { headers: { "x-access-token": `${token}` } })
    .then((res) => res.data);

export const doSignUp = (body) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/auth/new`, body);
};

export const GetUser = ( token) => {
  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_HOST_API}/auth`, token],
    fetcher,
    { refreshInterval: 1000 }
  );
  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
