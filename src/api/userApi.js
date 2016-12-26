// whatwg-fetch is polyfill for broswers that do not support fetcch natively
import 'whatwg-fetch';

// the rest of the funtions here are private since no export
export function getUsers() {
  return get('users');
}

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
