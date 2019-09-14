const auth = async () => {
  //user is not authenticated by default
  let authenticated = false;

  //sends an HTTP request with the httpOnly JWT cookie to the server
  await fetch('/api/auth')
    .then(res => res.json())
    .then(res => res.auth && (authenticated = true))

  //return boolean of whether user is authenticated
  return authenticated;
};

export default auth;
