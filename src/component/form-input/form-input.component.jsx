import React from 'react';
import './form-input.style.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {

    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps} />
            {
                label ?
                    (<label className='form-input-label' id={`${otherProps.value.length ? 'shrink' : ''}`}>{label}</label>)
                    : null
            }
        </div>
    );
}

export default FormInput;