import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import M from 'materialize-css'
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import CountryList from "./Countries"
class Visitors extends Component {

    state = {
        savedVisitors: [{
            firstName: "Mohammed",
            lastName: "Salah",
            mobile: "123456789",
            typeId: "Passport",
            IdNumber: "Ac130UAV",
            nationality: "Egypt",
            agency: "Liverpool",
            gender: "Male",
            comments: "I loved code"
        },
        {
            firstName: "Dino",
            lastName: "Dork",
            mobile: "9988776655",
            typeId: "Passport",
            IdNumber: "Whel9898",
            nationality: "Egypt",
            agency: "Liverpool",
            gender: "Female",
            comments: "I Hate Ice"
        }],
        incmoingVisitors: [],
        //Current State
        firstName: "",
        lastName: "",
        mobile: "",
        typeId: "National ID",
        IdNumber: "",
        nationality: "Saudi Arabia",
        agency: "",
        gender: "Male",
        comments: "",
        completed: false,
        //Helper
        selectedVisitor: {}
    }

    setCountry = (countryCode) => {
        var countryName = CountryList.find(country => country.code === countryCode);
        console.log(countryName.name)
        this.setState({ nationality: countryName.name })

    }
    setDocumentationType = (event) => {
        console.log(event.target.value)
        this.setState({ typeId: event.target.value });        //this.setState({typeId:value})
    }
    setGender = (event) => {
        console.log(event.target.value)
        this.setState({ gender: event.target.value })
    }
    addToArray = () => {
        console.log("er")
        const { firstName,
            lastName,
            mobile,
            typeId,
            IdNumber,
            nationality,
            agency,
            gender,
            comments } = this.state

        if (firstName === "" || lastName === "" || mobile === "" || IdNumber === "" || agency === "") {
            var toastHTML = '<span>Please Enter The Requested Data</span>';
            M.toast({ html: toastHTML });
        }
        else {
            const object = {
                firstName: firstName,
                lastName: lastName,
                mobile: mobile,
                typeId: typeId,
                IdNumber: IdNumber,
                nationality: nationality,
                agency: agency,
                gender: gender,
                comments: comments
            }
            var incoming = this.state.incmoingVisitors
            incoming.push(object);
            this.reset();
            this.setState({incmoingVisitors:incoming});
            this.props.change(incoming)
            var toastHTML2 = '<span>Successfully Added Visitor</span>';
            M.toast({ html: toastHTML2 });
            var saved = this.state.savedVisitors
            saved.push(object)
            this.setState({savedVisitors:saved});
            console.log(saved)

            
        }
    }
    reset = () => {
        console.log("reset")
        this.setState({
            firstName: "",
            lastName: "",
            mobile: "",
            typeId: "National ID",
            IdNumber: "",
            nationality: "Saudi Arabia",
            agency: "",
            gender: "Male",
            comments: ""
        })
    }
    addExisitngVisitor = (event) => {
        console.log("cod")
        console.log(event.target.value)
        var personId = event.target.value
        var personProfile = this.state.savedVisitors.find(person => personId === person.IdNumber)
        console.log(personProfile)
        var incoming = this.state.incmoingVisitors
        if (incoming.includes(personProfile)) {
            console.log("Sorry")
        }
        else {
            incoming.push(personProfile)
            this.setState({ incmoingVisitors: incoming })
            this.props.change(incoming)

        }

    }
    removeVisitor = (idNumber) => {
        var incoming = this.state.incmoingVisitors
        var toBeRemoved = incoming.findIndex(person => idNumber == person.IdNumber)
        console.log(toBeRemoved)
        console.log("Before " + incoming)
        if (toBeRemoved > -1) {
            incoming.splice(toBeRemoved, 1);
        }
        console.log("After " + incoming)
        this.setState({ incmoingVisitors: incoming })
        this.props.change(incoming)

    }
    handleChange = (event) => {
        const { name, value } = event.target;
        
        this.setState({
            [name]: value,
        });
        console.log(event.target.value);

    };
    render() {
        const { savedVisitors } = this.state;

        let savedVisitorsList = savedVisitors.length > 0
            && savedVisitors.map((item, i) => {
                return (
                    <option key={i} value={item.IdNumber} >{item.firstName + " " + item.lastName}</option>
                )
            }, this);
        const incmoingVisitors = this.state.incmoingVisitors
        let incmoingVisitorsList = incmoingVisitors.length > 0
            && incmoingVisitors.map((item, i) => {
                return (
                    <a class="collection-item">
                        <span class="badge">
                            <a onClick={() => this.removeVisitor(item.IdNumber)}>
                                <i class="material-icons">cancel</i>
                            </a>

                        </span>
                        {item.firstName + " " + item.lastName}
                        <span class="new badge" data-badge-caption={item.IdNumber}>ID: </span>
                    </a>

                )
            }, this);
        if (this.props.stepnumber === 3) return (
            <div className="row left-align">
                <div className="row">
                    <div className="col s10">
                        <div class="collection">
                            <a class="collection-item"><span class="badge">{this.state.incmoingVisitors.length} <a></a></span>Incoming Visitors</a>
                            {incmoingVisitorsList}

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className='input-field col s5'>
                    <i class="material-icons prefix">list</i>
                        <select id="adext" onChange={this.addExisitngVisitor} >
                            <option value="" disabled selected>Choose From Exisitng Visitors</option>
                            {savedVisitorsList}
                        </select>
                        <label for="addext">Add Saved Visitor</label>
                    </div>
                    <div className='col s5 center-align'>
                        <h6>Add from Saved Visitors</h6>
                    </div>

                </div>
                <div className="row">
                    <div class="input-field col s3">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="firstName" name="firstName" type="text" class="validate" value={this.state.firstName} onChange={this.handleChange} />
                        <label for="firstName">First Name</label>
                    </div>
                    <div class="input-field col s3">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="lastName" name="lastName" type="text" class="validate" value={this.state.lastName} onChange={this.handleChange} />
                        <label for="lastName">Last Name</label>
                    </div>
                    <div class="input-field col s4">
                        <i class="material-icons prefix">phone_iphone</i>
                        <input id="mobile" name="mobile" type="text" class="validate" value={this.state.mobile} onChange={this.handleChange} />
                        <label for="mobile">Mobile Number</label>
                    </div>

                </div>
                <div className="row">
                    <div class="input-field col s3">
                    <i class="material-icons prefix">ballot</i>
                        <select id="identefication" name="" onChange={this.setDocumentationType} value={this.state.typeId}>
                            <option value="National ID">National ID</option>
                            <option value="Passport">Passport</option>
                            <option value="Driver's License">Driver's License</option>
                            <option value="Other">Other</option>
                        </select>
                        <label for="identfication">ID Type</label>
                    </div>
                    <div class="input-field col s3">
                        <i class="material-icons prefix">contacts</i>
                        <input id="idNumber" name="IdNumber" type="text" class="validate" value={this.state.IdNumber} onChange={this.handleChange} />
                        <label for="idNumber">ID Number</label>
                    </div>
                    <div className="input-field col s4">
                        <ReactFlagsSelect
                            defaultCountry="SA"
                            searchable={true}
                            searchPlaceholder="Visitor Nationality"
                            onSelect={this.setCountry}
                        />
                    </div>
                </div>
                <div className="row">
                    <div class="input-field col s3">
                        <i class="material-icons prefix">business</i>
                        <input id="agency" name="agency" type="text" class="validate" value={this.state.agency} onChange={this.handleChange} />
                        <label for="agency">Agency/Organization</label>
                    </div>
                    <div class="input-field col s3">
                    <i class="material-icons prefix">perm_identity</i>
                        <select id="gender" value={this.state.gender}  onChange={this.setGender} >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <label for="gender">Gender</label>
                    </div>
                    <div class="input-field col s4">
                        <i class="material-icons prefix">comment</i>
                        <input id="comments " name="comments" type="text" class="validate" value={this.state.comments} onChange={this.handleChange} />
                        <label for="comments">Comments</label>
                    </div>

                </div>
                <div className="row">
                    <div className="col s9">
                        <div class="file-field input-field">
                            <div class="btn blue darken-3 white-text">
                                <span>Attach ID Copy<i class="material-icons left">attach_file</i></span>
                                <input type="file" />
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row center-align ">
                   <div className="col s10 card-panel blue lighten-4" style={{padding:"20px"}}>
                   <div className="col s6 ">
                    <a class="btn blue darken-3 white-text" onClick={this.addToArray}>{"Save & Add"}
                     <i class="material-icons right">save</i>
                        </a>
                    </div>
                    <div className="col s4">
                    <a class="btn blue darken-3 white-text" onClick={this.reset}>Reset
                     <i class="material-icons right">cancel</i>
                        </a>
                    </div>
                   </div>

                </div>
            </div>
        )
        else return null
    }
}
Visitors.propTypes = {
    stepnumber: PropTypes.number.isRequired,
};

export default Visitors