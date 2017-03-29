import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const { city, list } = cityData;
    const temps = list.map(weather => weather.main.temp - 273);
    const pressures = list.map(weather => weather.main.pressure);
    const humidities = list.map(weather => weather.main.humidity);
    const { lon, lat} = city.coord;
    return (
      <tr key={city.name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="C" ></Chart></td>
        <td><Chart data={pressures} color="green" units="hPa" ></Chart></td>
        <td><Chart data={humidities} color="blue" units="%"  ></Chart></td>
      </tr>
    )
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps ({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
