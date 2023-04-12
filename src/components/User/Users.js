import React from 'react';
import { UseWeather } from '../../context/WeatherContext';

const Users = () => {
    const { weather } = UseWeather();
    console.log(weather);
    return (
        <div>
            <h1>User List</h1>
        </div>
    )
}

export default Users