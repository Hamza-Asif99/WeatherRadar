import logo from '../weather-logo.png'
import { useState } from 'react'

const Header = () => {

    const [city, setCity] = useState('')
    return (
        <div className="headerContainer">

            <div className="branding">

                <img src={logo} alt="Weather App Logo" />
                <h5>OpenWeather</h5>
            </div>
            <h4>Good Day Hamza</h4>

            <div className="inputContainer">
                
                <input type="text" placeholder='Search City' className='cityInput' />
            </div>

        </div>)
}

export default Header