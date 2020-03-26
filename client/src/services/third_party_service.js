import handleResponse from '../helpers/handle_response';
import config from 'config';

export const thirdPartyService = {
  verify
};

function verify() {
  const requestOptions = {
    method: 'GET',
    headers: { 'x-trulioo-api-key': '5d657c2582074bc596d82ea1c4ca7a32' }
  };

  return fetch(
    'https://gateway.trulioo.com/trial/connection/v1/testauthentication',
    requestOptions
  );
}
