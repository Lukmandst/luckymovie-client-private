import useSWR from "swr";
import axios from "axios";

// export const getSoldSeat = (cinema_id, movie_id) => {
//   return axios.get(
//     `http://localhost:5000/cinema/seat?cinema_id=${cinema_id}&movie_id=${movie_id}`
//   );
// };
export const GetSoldSeat = (cinema_id, movie_id) => {
  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_API_HOST}/cinema/seat?cinema_id=${cinema_id}&movie_id=${movie_id}`],
    fetcher2,
    { refreshInterval: 1000 }
  );
  return {
    soldSeatRaw: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const doSignUp = (body) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/auth/new`, body);
};

const fetcher = (url, token) =>
  axios
    .get(url, { headers: { "x-access-token": `${token}` } })
    .then((res) => res.data.data);

const fetcher2 = (url) => axios.get(url).then((res) => res.data.data);

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
export const GetUserHistory = (token) => {
  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_API_HOST}/transaction/history`, token],
    fetcher,
    { refreshInterval: 1000 }
  );
  return {
    history: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export async function getMoviesHome() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/movies`);
  return response;
}

export async function getUpdateMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/movies/upcoming`
  );
  return response;
}

export const postNewMovie = (body, token) => {
  const config = {
    headers: {
      "Content-type": "multipart/form-data",
      "x-access-token": token,
    },
  };
  return axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/movies`, body, config);
};

export const postNewCinema = (body, token) => {
  const config = {
    headers: {
      "x-access-token": token,
    },
  };
  return axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/cinema`, body, config);
};

export const GetCinemas = (location, date, id) => {
  const { data, error } = useSWR(
    [
      `${process.env.NEXT_PUBLIC_API_HOST}/cinema?location=${location}&cinema_date=${date}&movie_id=${id}`,
    ],
    fetcher2,
    { refreshInterval: 5000 }
  );
  return {
    cinema: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const GetUserTicket = (trans_id, token) => {
  const { data, error } = useSWR(
    [
      `${process.env.NEXT_PUBLIC_API_HOST}/transaction/ticket/${trans_id}`,
      token,
    ],
    fetcher,
    { refreshInterval: 1000 }
  );
  return {
    ticket: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export const createTransaction = (body, token) => {
  const config = {
    headers: {
      "x-access-token": token,
    },
  };
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_HOST}/transaction`,
    body,
    config
  );
};

export const GetSalesLocation = (filter, location_id, token) => {
  const { data, error } = useSWR(
    [
      `${process.env.NEXT_PUBLIC_API_HOST}/sales?basedOn=location&filter=${filter}&location_id=${location_id}`,
      token,
    ],
    fetcher,
    { refreshInterval: 1000 }
  );
  return {
    locationSales: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const GetSalesMovie = (filter, movie_id, token) => {
  const { data, error } = useSWR(
    [
      `${process.env.NEXT_PUBLIC_API_HOST}/sales?basedOn=movie&filter=${filter}&movie_id=${movie_id}`,
      token,
    ],
    fetcher,
    { refreshInterval: 1000 }
  );
  return {
    movieSales: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export const GetSalesMovieNew = (filter) => {
  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_API_HOST}/sales/all?filter=${filter}`],
    fetcher2,
    { refreshInterval: 1000 }
  );
  return {
    allMovieSales: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const editMovie = (movie_id, body, token) => {
  const config = {
    headers: {
      "x-access-token": token,
      "Content-type": "multipart/form-data",
    },
  };
  return axios.patch(
    `${process.env.NEXT_PUBLIC_API_HOST}/movies/${movie_id}`,
    body,
    config
  );
};
