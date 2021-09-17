import { React, useState, useEffect } from 'react';

const Test = (props) => {
  let listaNova = props.x;

  const [countryData, setcountryData] = useState([...listaNova]);
  const [filtered, setFiltered] = useState(
    countryData.find((country) => {
      return country.cca3 === props.match.params.id;
    })
  );

  console.log(filtered);

  function renderAboutCountry() {
    const result = countryData.find((country) => {
      return country.cca3 === props.match.params.id;
    });

    setFiltered(result);
  }
  useEffect(() => {
    renderAboutCountry();
  }, [props.match.params.id]);
  /*  renderAboutCountry()  */

  return (
    <div>
      <h1>{filtered.name.common} </h1>
    </div>
  );
};

export default Test;
