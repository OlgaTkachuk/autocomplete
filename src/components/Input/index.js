import React from 'react';
import "./styles/styles.css"

const Input = ({value, onChange}) => {
    return (
        <div className={"input-wrapper"}>
            <form>
                <input type={'text'} value={value} onChange={onChange} placeholder={'Username'} className={"input"}/>
            </form>
        </div>
    );
};

export default Input;