import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import M from 'materialize-css'

class Submit extends Component {
    state ={
        condtionsAgreed:false
    }
    check=(event)=>{
        const { name, checked } = event.target;
        this.setState({
            [name]:checked,
        });
        this.props.updateCheckBox(checked)
        console.log(checked)
    }
    render() {
        if (this.props.stepnumber === 5) return (
            <div className="row left-align">
                <div className="row ">
                <label className="col s3">
                    <input type="checkbox" onChange={this.check} name="condtionsAgreed" value={this.state.condtionsAgreed}/>
                    <span style={{color:"black"}}>I agree to the terms and condtions</span>
                </label>
            </div>
            <div className="row">
                <div className="col s10">
                <h6>Status: status will be pending proponent apporval</h6>
                <p><h6 className="red-text text-darken-3">Note: Car Access to Commuinty is Limited to 15 minutes for material pick up or drop off only</h6></p>
                </div>
            </div>
            </div>
        )
        else return null
    }
}
Submit.propTypes = {
    stepnumber: PropTypes.number.isRequired,
};
export default Submit