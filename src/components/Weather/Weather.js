import React from 'react'
import { UseWeather } from '../../context/WeatherContext';

const Weather = () => {
    const { weather, cityList, weatherDay, foundCity, setFoundCity, day, setDay } = UseWeather();
    const hadleChange = (e) => {
        return setFoundCity(e.target.value)
    }
    const handleChangeDay = (e) => {
        return setDay(e.target.value)
    }
    return (
        <div className='container d-flex align-items-center justify-content-center p-5'>
            <div className="card" style={{ width: "36rem" }}>
                <div className="card-title mb-5 d-flex ">
                    <select className="form-select" aria-label="Default select example"
                        onChange={hadleChange}
                    >
                        <option defaultValue={foundCity}>{foundCity}</option>
                        {cityList.map((city, index) => (
                            <option value={city.name} key={index}>{city.name}</option>
                        ))}
                    </select>
                    <select className="form-select" aria-label="Default select example"
                        onChange={handleChangeDay}
                    >
                        <option defaultValue={day}>{day}</option>
                        <option value="1">1</option>
                        <option value="3">3</option>
                        <option value="7">7</option>
                        <option value="15">15</option>
                    </select>
                </div>
                {weatherDay.map((w, index) => (
                    <div className="card-body" key={index}>
                        <div className='row'>
                            <div className='col-md ' id="ico">
                                <img src={w.day.condition.icon} alt={w.day.condition.text} />
                            </div>
                            <div className="col-md">
                                <h5 className="card-title">{weather.location.name}</h5>
                                <p>{w.date}</p>
                                <p className="card-text">
                                    Max: {w.day.maxtemp_c} - Min: {w.day.mintemp_c}
                                </p>
                                <p>{w.day.condition.text}</p>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Weather