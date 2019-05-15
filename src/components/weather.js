import React from "react";

const Weather = props => (
	<div> 
			{ props.city &&
			<div className="infoWeath">
			
			<p>Местоположение: {props.city}, {props.country}</p>
			<p>Температура: {props.temp} °С</p>
			<p>Описание: <span>{props.description}</span></p>
			<p>Давление: {props.pressure}</p>
			<p>Влажность: {props.humidity} %</p>
			</div>
			}
			<p className="error">{ props.error }</p>
			</div>
		
	);

export default Weather;