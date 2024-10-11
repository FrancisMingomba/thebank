import React from 'react';



const Input = ({ name, label, value, onChange}) => {
    return (   
        <div className="form-group ">
            <label htmlFor={name}>{label}</label>
            <input className="input"
            value={value} 
            onChange={onChange}
            id={name}
            name={name}
            type="text"
           
            />
        </div>
    );
};


export default Input