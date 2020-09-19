import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import M from 'materialize-css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import TimePicker from 'react-time-picker';

class VisitDetails extends Component {

    state = {
        startDate: "",
        minDate: Date.now(),
        duration: 1,
        time: "10:00",
        purpose:""
    }

    componentDidUpdate() {
        M.AutoInit();

    }
    handleDate = (date) => {
        this.setState({ startDate: date })
        this.props.handleDate(date)
    }
    handleSlider = value => {
        this.setState({ duration: value })
        this.props.handleDuration(value)
    }
    handleTime = (time) => {
        this.setState({ time: time })
        this.props.handleTime(time)
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        this.props.change(value)
    };
    print = () => {
        console.log(this.state)
        console.log("prop " + this.props.info)
    }
    render() {

        if (this.props.stepnumber === 2) {
            return (
                <div className="row left-align ">
                    <div className="row">
                        <div className="input-field col s3">
                            <DatePicker
                                minDate={this.state.minDate}
                                selected={this.state.startDate}
                                onChange={this.handleDate}
                                placeholderText="Start Date"
                                dateFormat="dd/MM/yyyy"
                                mode="date"

                            />
                        </div>
                        <div className="input-field col s3">
                            <div className='slider-horizontal'>
                                <Slider
                                    min={1}
                                    max={24}
                                    value={this.state.duration}
                                    onChange={this.handleSlider}
                                />
                                <div className='value'>Visitor(s) will stay for {this.state.duration} Hour(s)</div>
                            </div>


                        </div>
                        <div className="input-field col s6">
                            <TimePicker
                                className=""
                                onChange={this.handleTime}
                                value={this.state.time}
                                amPmAriaLabel="Select Time"
                                hourPlaceholder="hh"
                            />
                        </div>


                    </div>
                    <div className="row">
                        <div class="input-field col s10">
                            <textarea id="textarea1" class="materialize-textarea" value={this.state.purpose} name="purpose" onChange={this.handleChange}></textarea>
                            <label for="textarea1">Purpose of Visit</label>
                        </div>
                    </div>
                </div>
            )
        }
        else return null
    }
}

VisitDetails.propTypes = {
    stepnumber: PropTypes.number.isRequired,
};
export default VisitDetails