import { skinCodes } from '../../constants/typeCodes';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import React from 'react';
import * as actionTypes from "../../redux/actionTypes";
import { useHistory } from "react-router-dom";
const { v4: uuidv4 } = require("uuid");
// import { bindActionCreators } from 'redux';

// import { withRouter } from "react-router-dom";
function GettingStarted(props) {
    // console.log(props);
    let history = useHistory();
    const onChange = async (skinCd) => {
        console.log(props.document.id);
        if (props.document.id) {
            props.updateDocument(skinCd);
        }
        else {
            props.setDocument(skinCd);
        }

        // console.log(props.document.id);
        history.push('/contact');
    }
    return (
        <div className="container med gettingStarted">
            <div className="section">
                <h1 className=" center">
                    Select a resume template to get started</h1>
                <p className=" center">
                    You’ll be able to edit and change this template later!
                </p>
                <div className="styleTemplate ">
                    {
                        skinCodes.map((value, index) => {
                            return (<div key={index} className="template-card rounded-border">
                                <i className={(value == props.document.skinCd ? 'selected fa fa-check' : 'hide')} ></i>
                                <img className='' src={'/images/' + value + '.svg'} />
                                <button type="button" onClick={() => onChange(value)} className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);

                        })
                    }
                </div>

            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        document: state.documentReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setDocument: (skinCd) => {
            let id = uuidv4();
            dispatch({ type: actionTypes.SET_SKIN, document: { 
                "id" : id,
                "skinCd" : skinCd
            } });
        },
        updateDocument: (skinCd) => {
            dispatch({ type: actionTypes.UPDATE_SKIN, document: { skinCd : skinCd } })
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GettingStarted));