import {API} from '../config';

export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
  .then(response => {
    return response.json();
  })
  .catch(err => {
    console.log("QAISAR: err");
    return (err);
  });
};

export const createProduct = (userId, token, product) => {
  return fetch(`${API}/product/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: product
  })
  .then(response => {
    return response.json();
  })
  .catch(err => {
    console.log("QAISAR: err");
    return (err);
  });
};

export const getCategories = () => {
  return fetch(`${API}/category`, {
    method: "GET"
  })
  .then (response => {
    return response.json();
  })
  .catch(err => console.log(err));
};
