import React, { Component } from 'react'
import { PropTypes } from 'prop-types';

class YourInfo extends Component {
    state = {
        mobile: ""
    }
    handleChange = (event) => {
        this.props.change(this.state.mobile)
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        this.props.change(value)
    };

    print = () => {
        console.log(this.state.mobile)
        console.log("prop " + this.props.info.mobile)
    }
    render() {
        if (this.props.stepnumber === 1) return (
            <div className="row left-align">
                <div className="col s4">
                    <p>Name: {this.props.info.name}</p>
                    <p>Manager: {this.props.info.manager}</p>
                    <p>Department: {this.props.info.department}</p>
                </div>
                <div className="col s4">
                    <p style={{marginBottom:"20px"}}>NEOM ID: {this.props.info.neomId}</p>
                    <div class="input-field">
                        <i class="material-icons prefix">phone</i>
                        <input id="mob" type="text" class="validate" value={this.state.mobile} name="mobile" onChange={this.handleChange} />
                        <label for="mob">Mobile*</label>
                    </div>

                </div>
            </div>
        )
        else return null
    }
}

YourInfo.propTypes = {
    stepnumber: PropTypes.number.isRequired,
    info: PropTypes.object.isRequired
};

export default YourInfo