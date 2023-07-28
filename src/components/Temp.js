import React, { useState } from 'react'
import './Temp.css';

const Temp = () => {

    let [temp, setTemp] = useState(0);
    let [color, setColor] = useState('');

    let handleChange = (e) => {
        setTemp(e.target.value);
    }

    let incTemp = () => {
        setTemp(Number(temp) + 1);
        if (temp >= 0 && temp < 20) {
            setColor('green')
        }
        else if (temp >= 20 && temp < 40) {
            setColor('blue')
        }
        else if (temp >= 40 && temp < 60) {
            {
                setColor('red')
            }
        }
    };

    let decTemp = () => {
        if (temp > 0) {
            setTemp(Number(temp) - 1);
        }
        if (temp <= 41 && temp > 20) {
            setColor('blue')
        }
        else if (temp <= 21 && temp > 1) {
            setColor('green')
        }
        else if (temp <= 1) {
            setColor('')
        }
    }

    let resetTemp = () => {
        setTemp(0);
        setColor('')
    }

    return (
        <div className='body'>
            <h1 style={{ marginTop: "0px", marginLeft: "30%" }} >Functional Temperature</h1>
            <div class="h-100 d-flex align-items-center justify-content-center">
                <div className="center" style={{ background: color }}>
                    <h1 style={{ marginLeft: "65px" }} value={temp} onChange={handleChange}>{temp}°C</h1>
                </div>
                <div style={{ marginTop: "0px", marginLeft: "35%" }}>
                    <button type="button" class="btn btn-secondary" onClick={incTemp} >+</button>
                    <button type="button" class="btn btn-secondary" onClick={decTemp} >-</button>
                    <button type="button" class="btn btn-secondary" onClick={resetTemp} >Reset</button>
                </div>

            </div>
        </div>
    )
}

export default Temp