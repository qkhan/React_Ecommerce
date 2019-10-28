import { API } from "../config";
import queryString from 'query-string';

export const getProducts = (sortBy) => {
  return fetch(`${API}/product?sortBy=${sortBy}&order=desc&limit=6`, {
    method: "GET"
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
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

export const getFilteredProducts = (skip, limit, filters = {}) => {
  const data = {
    limit,
    skip,
    filters
  }

  return fetch(`${API}/products/by/search`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    return response.json();
  })
  .catch(err => {
    console.log("QAISAR: err");
    return (err);
  });
};

export const list = params => {
  const query = queryString.stringify(params);
  return fetch(`${API}/product?(query)`, {
    method: "GET"
  })
  .then(response => {
    return response.json();
  })
  .catch(err => console.log(err));
};
