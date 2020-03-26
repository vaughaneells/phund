import config from 'config';
import handleResponse from '../helpers/handle_response';

export const borrowerService = {
  eligible,
  underwrite
  //create,
  //confirm,
  //update
};

//Calls login API
function eligible(zipcode) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XmlHttpRequest'
    },
    body: JSON.stringify({
      zipcode: zipcode
    })
  };

  return fetch(`${config.apiUrl}/api/borrower/location`, requestOptions)
    .then(handleResponse)
    .then(loanParams => {
      try {
        return loanParams;
      } catch (err) {
        alert(err);
      }
    });
}

function underwrite(token) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XmlHttpRequest'
    },
    body: JSON.stringify({
      token: token
    })
  };
}
