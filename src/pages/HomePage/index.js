import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Input} from "../../components";
import {getData} from "../../redux/actions";
import {dataSelector} from "../../redux/selectors";
import './styles/styles.css'

const HomePage = ({getData, data}) => {
    useEffect(() => {
        getData();
    }, [])

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
}

const mapStateToProps = state => ({
    data: dataSelector(state),
});


const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getData
        },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage)