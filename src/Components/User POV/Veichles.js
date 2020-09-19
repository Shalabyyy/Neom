import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import M from 'materialize-css'

class Veichles extends Component {
    state =
        {
            type: "",
            plateType: "",
            vehiclePlate: "",
            vehiclePlateEnglish: "",
            driver: {},
            liscense: "",
            registration: "",
            insurance: ""
        }

    setRideType = (event) => {
        console.log(event.target.value)
        this.setState({ type: event.target.value });
        this.props.changeType(event.target.value)
    }
    setPlateType = (event) => {
        console.log(event.target.value)
        this.setState({ plateType: event.target.value });
        this.props.changePlateType(event.target.value)
    }
    selectDriver = (event) => {
        console.log("cod")
        console.log(event.target.value)
        var personId = event.target.value
        var personProfile = this.props.visitors.find(person => personId == person.IdNumber)
        this.setState({ driver: personProfile })
        this.props.changeDriver(personProfile)
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        if (name === "vehiclePlate") {
            this.props.changePlateNumber(value)
        }
        if (name === "vehiclePlateEnglish") {
            this.props.changePlateLetter(value)
        }
    };
    render() {
        const visitors = this.props.visitors;

        let visitorsList = visitors.length > 0
            && visitors.map((item, i) => {
                return (
                    <option key={i} value={item.IdNumber} >{item.firstName + " " + item.lastName}</option>
                )
            }, this);
        if (this.props.stepnumber === 4) return (
            <div className="row left-align">
                <div className="row">
                    <div className="input-field col s3">
                        <i class="material-icons prefix">directions_car</i>
                        <select id="identefication" name="" onChange={this.setRideType} value={this.state.type}>
                            <option value="" disabled selected>Select Veichle Type</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Convertible">Convertible</option>
                            <option value="Wagon">Wagon</option>
                            <option value="Sports Car">Sports Car</option>
                        </select>
                        <label for="identfication">Veichle Type</label>
                    </div>
                    <div className="input-field col s3">
                        <i class="material-icons prefix">info</i>
                        <select id="plateType" name="" onChange={this.setPlateType} value={this.state.plateType}>
                            <option value="" disabled selected>Select Plate Type</option>
                            <option value="Private">Private</option>
                            <option value="Taxi">Taxi</option>
                            <option value="Commercial">Commercial</option>
                            <option value="Diplomatic">Diplomatic</option>
                        </select>
                        <label for="plateType">Plate Type</label>
                    </div>
                </div>
                <div className="row">
                    <div class="input-field col s3">
                        <i class="material-icons prefix">credit_card</i>
                        <input id="plateNumber" name="vehiclePlate" type="text" class="validate" value={this.state.vehiclePlate} onChange={this.handleChange} maxLength="4" />
                        <label for="plateNumber">Plate Numbers</label>
                    </div>
                    <div class="input-field col s3">
                        <i class="material-icons prefix">call_to_action</i>
                        <input id="plateLetter" name="vehiclePlateEnglish" type="text" class="validate" value={this.state.vehiclePlateEnglish} onChange={this.handleChange} maxLength="3" />
                        <label for="plateLetter">Plate Letters</label>
                    </div>
                </div>
                <div className="row">
                    <div className='input-field col s6'>
                        <i class="material-icons prefix">person_add</i>
                        <select id="adext" onChange={this.selectDriver} >
                            <option value="" disabled selected>Choose From Incoming Visitors</option>
                            {visitorsList}
                        </select>
                        <label for="addext">Add Saved Visitor</label>
                    </div>
                </div>
                <div>
                    <div className="input-field col s3">
                        <div class="file-field input-field">
                            <div class="btn blue darken-3 white-text">
                                <span>Attach Driver Liscense Copy</span>
                                <input type="file" />
                            </div>
                            <div class="file-path">
                                <input class="file-path validate" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="input-field col s3">
                        <div class="file-field input-field">
                            <div class="btn blue darken-3 white-text">
                                <span>Attach Car Insurance Copy</span>
                                <input type="file" />
                            </div>
                            <div class="file-path">
                                <input class="file-path validate" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="input-field col s3">
                        <div class="file-field input-field">
                            <div class="btn blue darken-3 white-text">
                                <span>Attach Car Registration Copy</span>
                                <input type="file" />
                            </div>
                            <div class="file-path">
                                <input class="file-path validate" type="text" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
        else return null
    }
}

Veichles.propTypes = {
    stepnumber: PropTypes.number.isRequired,
};
export default Veichles