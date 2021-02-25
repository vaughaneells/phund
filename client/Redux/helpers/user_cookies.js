import Cookies from 'js-cookie';

export const userCookie = () => {
  try {
    const encodedUser = Cookies.get('user');
    const user = JSON.parse(
      Buffer.from(encodedUser.split('.')[1], 'base64').toString('utf-8')
    );
    if (encodedUser && user) {
      return user;
    } else if (encodedUser && !user) {
      throw 'Could not decoded user cookie';
    } else {
      throw 'No user Cookie';
    }
  } catch (err) {
    return err;
  }
};

export const uuidCookie = () => {
  try {
    const uuid = Cookies.get('id_1');
    if (uuid) {
      return uuid;
    } else {
      throw 'No UUID Cookie';
    }
  } catch (err) {
    return err;
  }
};
