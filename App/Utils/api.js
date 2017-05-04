export let api = {
  getUser(username) {
    username = username.toLowerCase().trim();
    let url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json());
  },

  getProducts(){

  }
};