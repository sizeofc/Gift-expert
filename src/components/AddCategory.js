import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('Hola Mundo');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(categ => [ inputValue,...categ]);
            setInputValue('');
        }
    }
    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
        
    }