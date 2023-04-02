import axios from 'axios';

export const AuthFetch = axios.create({
  baseURL: 'https://strapi.cleverland.by/api',
  method: 'get',
});
export const CommentFetch = axios.create({
  baseURL: 'https://strapi.cleverland.by/api',
  method: 'post',
});

export const DeleteOrderedBookRequest = axios.create({
  baseURL: 'https://strapi.cleverland.by/api',
  method: 'delete',
});

export const ReOrderBookRequest = axios.create({
  baseURL: 'https://strapi.cleverland.by/api',
  method: 'put',
});

const token = `Bearer ${JSON.parse(localStorage.getItem('auth'))?.data?.jwt}`;

AuthFetch.interceptors.request.use(
  (request) => {
    request.headers.Authorization = token;

    return request;
  },
  (error) => Promise.reject(error)
);

AuthFetch.interceptors.response.use((response) => response);

CommentFetch.interceptors.request.use(
  (request) => {
    request.headers.Authorization = token;

    return request;
  },
  (error) => Promise.reject(error)
);

CommentFetch.interceptors.response.use((response) => response);

DeleteOrderedBookRequest.interceptors.request.use(
  (request) => {
    request.headers.Authorization = token;

    return request;
  },
  (error) => Promise.reject(error)
);

DeleteOrderedBookRequest.interceptors.response.use((response) => response);

ReOrderBookRequest.interceptors.request.use(
  (request) => {
    request.headers.Authorization = token;

    return request;
  },
  (error) => Promise.reject(error)
);

ReOrderBookRequest.interceptors.response.use((response) => response);
