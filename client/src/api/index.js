const api = url => {
  return {
    get: q =>
      fetch(url + q)
        .then(res => res.json())
        .catch(error => error.message),
  };
};

export const searchItem = api(process.env.REACT_APP_SEARCH);
export const getItemDetail = api(process.env.REACT_APP_DETAIL);
