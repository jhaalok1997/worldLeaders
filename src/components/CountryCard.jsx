import React from 'react'
import { Link } from 'react-router-dom';


const CountryCard = (props) => {
  return (
    <>
    <a className="country-card" href={"/country?name=${props.name}"}>
        <img src={props.image} alt="image of politicians "/>

        <div className="card-text">
            
            <h3 className="card-title">{props.name}</h3>
            <p><b>DOB: </b>{props.dob}</p>
            <p><b>Country: </b> {props.country}</p>
            <p><b>Party: </b>{props.party}</p>
            <p><b>Position: </b> {props.position}</p>
            <p><b>Yrs in Office: </b>{props.years_in_office}</p>
        </div>
    </a>
    </>
  )
}

export default CountryCard;