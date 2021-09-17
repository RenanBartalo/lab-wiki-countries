import { Link } from 'react-router-dom';
import React from 'react';

const CountriesLists = ({ list }) => {
  //console.log(list);
  return (
    <div className="col-5" style={{ maxHeight: '90vh' }}>
      <div className="list-group">
        {list.map((country) => (
          <Link
            key={country.cca3}
            to={`/countrydetails/${country.cca3}`}
            className="list-group-item list-group-item-action"
          >
            {country.flag}
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesLists;
