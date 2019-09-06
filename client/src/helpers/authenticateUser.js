const auth = async () => {
  //user is not authenticated by default
  let authenticated = false;

  //sends an HTTP request with the httpOnly JWT cookie to the server
  await fetch('/auth')
    .then(res => res.json())
    .then(res => authenticated = res.authenticated)
    .catch(err => authenticated = false); //if anything goes wrong, do not authenticate user

  //return boolean of whether user is authenticated
  return authenticated;
};

export default auth;
