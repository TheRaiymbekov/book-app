import React from 'react';
import classes from "./Input.module.css";

const Input = ({value, onChange, placeholder}) => {
    return (
        <div className={classes.user}>
            <div className={classes.wordBlock}>
                <h2 className={classes.word}>Название:</h2>
            </div>
            <input className={classes.inputBlock}
                   type="text"
                   value={value}
                   onChange={onChange}
                   placeholder={placeholder}
            />
        </div>
    );
};

export default Input;