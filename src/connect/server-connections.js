import { serverAPI } from './axios-instance';

export function fetchQuestion() {
  return serverAPI
    .get()
    .then((response) => response)
    .catch((error) => console.log(error));
}
