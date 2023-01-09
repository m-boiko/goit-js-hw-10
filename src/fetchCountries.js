const BASE_URL = "https://restcountries.com/v3.1/name/";
const fieldsName = "?fields=name,capital,population,flags,languages";

function fetchCountries(name) {
  return fetch(`${BASE_URL}${name}${fieldsName}`).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

export { fetchCountries };
