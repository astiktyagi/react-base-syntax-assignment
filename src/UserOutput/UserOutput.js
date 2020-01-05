import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
    <div className='UserOutput'>
    <p> Hi my name is  {props.username} </p>
    <p> I am 27 years old </p>
    </div>
)};

export default userOutput;