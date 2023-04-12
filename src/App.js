import './App.css';
import Weather from './components/Weather/Weather';
import { WeatherProvider } from './context/WeatherContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <WeatherProvider>
        <h1>Weather App</h1>

        <Weather />
      </WeatherProvider>
    </div>
  );
}

export default App;
