import React, { useState, useEffect } from "react";
import countryApi from "../api/countryApi";

export default function CountrieView() {


  const [country,setCountrie] =useState([])

  useEffect(()=>{
      countryApi.list().then(data => {
          setCountrie(data)
      })
  })
return (
  <div>
      <h2>List of Countries</h2>
     
      <table>
      <th>Country ID</th>
      <th>Country Name</th>
      <th>Region ID</th>
          <tbody>
          {
            country && country.map(count => (
                <tr key={count.country_id}>
                 <td>{count.country_id}</td>
                 <td>{count.country_name}</td>
                 <td>{count.region_id}</td>
                </tr>
            ))
        }
          </tbody>
      </table>
  </div>
)
}
