import React, {useState} from 'react';
import {Input} from "../index";
import './styles/styles.css'

const Autocomplete = ({data}) => {

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onItemClick = (item) => {
        setValue(item)
    }

    const [value, setValue] = useState('');


    let suggestionsList = () => {
        return filteredSuggestions.map((item,index) => {
            return (
                <div key={index} className={"list-item"} onClick={()=>onItemClick(item)}>
                    {item}
                </div>
            )
        })
    }

    let filteredSuggestions = data.reduce((acc, { username }) => {
        if (username.toLowerCase().startsWith(value.toLowerCase()) && !acc.includes(username) && value.length>0) {
            acc.push(username)
        }
        return acc;
    }, []);


    return (
        <div className={"container"}>
            <Input value={value} onChange={onChange}/>
            <div className={"list-wrapper"}>
                {suggestionsList()}
            </div>
        </div>

    );
};

export default Autocomplete;