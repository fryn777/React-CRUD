import React, { useState, useEffect } from "react";
import locationApi from "../api/locationApi";

export default function LocationView() {


  const [location,setLocation] =useState([])

  useEffect(()=>{
      locationApi.list().then(data => {
          setLocation(data)
      })
  })
return (
  <div>
      <h2>List of Locations</h2>
     
      <table>
      <th>Location ID</th>
      <th>Street Address</th>
      <th>Postal Code</th>
      <th>City</th>
      <th>State Province</th>
      <th>Country ID</th>
          <tbody>
          {
            location && location.map(location => (
                <tr key={location.location_id}>
                 <td>{location.location_id}</td>
                 <td>{location.street_address}</td>
                 <td>{location.postal_code}</td>
                 <td>{location.city}</td>
                 <td>{location.state_province}</td>
                 <td>{location.country_id}</td>
                </tr>
            ))
        }
          </tbody>
      </table>
  </div>
)
}
