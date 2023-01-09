export function countryListTemplate({ flags, name }) {
  return `
  <li class="country-list__info">
    <img class="country-list__img" src="${flags.svg}" alt="${name.official}" width="35" />
    <h2 class="country-list__name">${name.official}</h2>
  </li>
  `;
}

export function countryСardTeemplate({
  flags,
  name,
  capital,
  population,
  languages,
}) {
  return `
      <div>
        <div>
          <img src="${flags.svg}" alt="${name.official}" width="35" />
          <h2>${name.official}</h2>
        </div>
        <p><span>Capital:</span> ${capital}</p>
        <p><span>Population:</span> ${population}</p>
        <p><span>Languages:</span> ${Object.values(languages)}</p>
      </div>
    `;
}
