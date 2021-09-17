import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Test = (props) => {
  let listaNova = props.x;
  console.log(props)

  const [countryData, setcountryData] = useState([...listaNova]);

  const [filtered, setFiltered] = useState(
    countryData.find((country) => {
      return country.cca3 === props.match.params.id;
    })
  );


  function renderAboutCountry() {
    const result = countryData.find((country) => {
      return country.cca3 === props.match.params.id;
    });

    setFiltered(result);
  }
  useEffect(() => {
    renderAboutCountry();
  }, [props.match.params.id]);

  return (
          <div className="col-7">
      <h1>{filtered.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="capital">Capital</td>
            <td>{filtered.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {`${filtered.area} km`}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {/* {filtered.borders.map((neighborCode) => {
                  return (
                    <li key={neighborCode}>
                      <Link to={`countrydetails/${neighborCode}`}>{renderAboutCountry().name.common}</Link>
                    </li>
                  );
                })} */}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
  );
};

export default Test;
