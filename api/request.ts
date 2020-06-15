import * as fetch from 'isomorphic-fetch';
import { apiUrl } from '@utils/config';

const getApiUrl = (req?) => {
  if (req) {
    return apiUrl;
  }
  return `${window.location.origin}`;
};

const request: any = async (req?: any, uri?: string, method?: string, body?: any, cookie?: any) => {
  const url = `${getApiUrl(req)}/api/${uri}`;
  const res = await fetch(url, {
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

const $get = async (req?: any, uri?: string, cookie?: any) => request(req, uri, 'GET', null, cookie);
const $post = async (uri: string, body?: any) => request(uri, 'POST', body);
const $put = async (uri: string, body?: any) => request(uri, 'PUT', body);
const $delete = async (uri: string, body?: any) => request(uri, 'DELETE', body);

export {
  request,
  $get,
  $post,
  $put,
  $delete,
};
