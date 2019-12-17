import React from 'react';
import './index.css';

export default function OutlineButton(props) {
    return (
        <button onClick={props.action} 
                className=" text-blue-500 font-Mont button border-2 border-blue-500 mt-6  rounded-l-full rounded-r-full focus:outline-none">
           {props.message}
        </button>
    );
}