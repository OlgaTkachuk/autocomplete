import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Autocomplete, Input} from "../../components";
import {getData} from "../../redux/actions";
import {dataSelector} from "../../redux/selectors";
import './styles/styles.css'

const HomePage = ({getData, data}) => {
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
           <Autocomplete data={data} />
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