import { userService } from '../services';

export default function handleResponse(response) {
  return response.text().then(text => {
    const jsonString = JSON.stringify(text);
    const resObj = JSON.parse(jsonString);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        userService.logout();
        location.reload(true);
      }
      const message = resObj.message || response.statusText;
      return Promise.reject(message);
    }
    return resObj;
  });
}
