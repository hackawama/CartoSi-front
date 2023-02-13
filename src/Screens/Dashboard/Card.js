import React from 'react'
import "./Card.css"
const Card = ({ icon, color, number, text }) => {
    return (
        <div className='card-dashboard' style={{ backgroundColor: color }}>
            <div className='card-dashboard-icon'>
                {icon}
            </div>
            <div className='card-dashboard-number'>
                <span>{number}</span>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default Card