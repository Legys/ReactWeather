var React = require('react')

var WeatherMessage = ({location, temp} ) => {

    return (
        <p>It's it {temp} here in {location}</p>
    )
}

module.exports = WeatherMessage;