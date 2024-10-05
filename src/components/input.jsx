import React from 'react';
import "../css/input.css";


const Input = ({ name, label, error, ...rest}) => {
    return ( 
      
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input {...rest} name={name} autoFocus id={name}className="form-control"/>
                {error && <div className="alert alert-danger">{error}</div>} 
            </div>

                
     );    
};
 
export default Input;