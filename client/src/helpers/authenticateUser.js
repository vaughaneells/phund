const auth = async () => {
  let authenticated = false;
  await fetch('/auth')
    .then(res => res.json())
    .then(res => authenticated = res.authenticated)
  return authenticated;
};

export default auth;
