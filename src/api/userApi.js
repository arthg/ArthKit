// whatwg-fetch is polyfill for broswers that do not support fetcch natively
import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

//STRIP_ON_CLONE
// the rest of the funtions here are private since no export
export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

// Can't call func delete since reserved word.
function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
