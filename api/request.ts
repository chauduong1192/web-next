import * as fetch from 'isomorphic-fetch';
import { apiUrl } from 'utils/config';

const HOST = apiUrl ? `http://${apiUrl}` : 'http://localhost:8000';
const BASE_URL = `${HOST}/api/v2`;

const request: any = async (uri: string, method: string, body?: any, cookie?: any) => {

  const res = await fetch(`${BASE_URL}/${uri}`, {
    method,
    body,
    credentials: 'include',
    headers: {
      cookie,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    const error = await res.json();
    throw error;
  }
  const json = await res.json();
  return json;
};

const $get = async (uri: string, cookie?: any) => request(uri, 'GET', null, cookie);
const $post = async (uri: string, body?: any) => request(uri, 'POST', body);
const $put = async (uri: string, body?: any) => request(uri, 'PUT', body);
const $delete = async (uri: string, body?: any) => request(uri, 'DELETE', body);

export {
  BASE_URL,
  request,
  $get,
  $post,
  $put,
  $delete,
};
