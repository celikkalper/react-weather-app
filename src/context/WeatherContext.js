import { createContext, useContext, useState, useEffect } from "react";
const WeatherContext = createContext();




export const WeatherProvider = (({ children }) => {
    const [weather, setWeather] = useState({});
    const [cityList, setCityList] = useState([]);
    const [weatherDay, setWeatherDay] = useState([]);
    const [foundCity, setFoundCity] = useState('Antalya');
    const [day, setDay] = useState("1")
    const key = process.env.REACT_APP_KEY


    const URL = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${foundCity}&days=${day}`

    const CityURL = "https://turkiyeapi.cyclic.app/api/v1/provinces"

    function getCity() {
        fetch(URL)
            .then(res => res.json())
            .then(result => setWeather(result))
    }
    const getCityList = () => {
        fetch(CityURL)
            .then(res => res.json())
            .then(result => setCityList(result.data))
    }
    function getWeatherDay() {
        fetch(URL)
            .then(res => res.json())
            .then(result => setWeatherDay(result.forecast.forecastday))
    }

    useEffect(() => {
        getCity()
        getCityList()
        getWeatherDay()
    }, [foundCity, day])

    const values = {
        weather,
        setWeather,
        cityList,
        weatherDay,
        foundCity,
        setFoundCity, day, setDay
    }

    return <WeatherContext.Provider value={values}>
        {children}
    </WeatherContext.Provider>
})


export const UseWeather = () => useContext(WeatherContext);