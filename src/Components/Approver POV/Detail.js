import React, { Component } from 'react'
import VisitorDetail from './VisitorDetail';
import M from 'materialize-css'
class Detail extends Component {
    state = {
        status: "New",
        rejectionReason: "",
        vehicles: {
            driver: {
                IdNumber: "Ac130UAV",
                agency: "Liverpool",
                comments: "I loved code",
                firstName: "Mohammed",
                gender: "Male",
                lastName: "Salah",
                mobile: "123456789",
                nationality: "Egypt",
                typeId: "Passport",
            },
            insurance: "",
            liscense: "",
            plateType: "Taxi",
            registration: "",
            type: "Sedan",
            vehiclePlate: "7890",
            vehiclePlateEnglish: "VTT"
        },
        visitDetails: {
            duration: 4,
            purposeOfVisit: "Sleep",
            startDate: "Date Thu Sep 24 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
            time: "10:00",
        },
        visitors: {
            incmoingVisitors: [
                {
                    IdNumber: "Ac130UAV",
                    agency: "Liverpool",
                    comments: "I loved code",
                    firstName: "Mohammed",
                    gender: "Male",
                    lastName: "Salah",
                    mobile: "123456789",
                    nationality: "Egypt",
                    typeId: "Passport"
                },
                {
                    IdNumber: "Whel9898",
                    agency: "Liverpool",
                    comments: "I Hate Ice",
                    firstName: "Dino",
                    gender: "Female",
                    lastName: "Dork",
                    mobile: "9988776655",
                    nationality: "Egypt",
                    typeId: "Passport"
                }
            ]
        },
        yourInfo: {
            department: "ICT",
            manager: "Sir Arsene Wenger",
            mobile: "011119455455",
            name: "Youssef Shalaby",
            neomId: "ISO9898",
        }
    }
    getCurrentIndex = () => {
        var whole = this.props.whole
        const object = this.props.data
        const index = this.props.whole.indexOf(object)
        console.log("the Index is", index)
        if (index > -1) {
            whole.splice(index, 1);
            this.props.update(whole)
        }
        return index;
    }
    approve = () => {
        //Approve Request 
        //Update DB
        this.setState({ status: "Approved" })
        //update parent
        this.getCurrentIndex();
        var toastHTML = '<span>You Have Apporved The Request</span>';
        M.toast({ html: toastHTML });
    }
    reject = () => {
        //Reject Request
        //Update DB
        var reason = prompt("Why was the Request Rejected?");
        if (reason == null || reason == "") {
            this.reject();
        } else {
            console.log(reason)
        }
        this.setState({ status: "Rejected", rejectionReason: reason })
        this.getCurrentIndex();
        var toastHTML = '<span>You Have Rejected The Request</span>';
        M.toast({ html: toastHTML });
        //update parent
    }
    render() {
        const savedVisitors = this.props.data.visitors.incmoingVisitors;

        let savedVisitorsList = savedVisitors.length > 0
            && savedVisitors.map((item, i) => {
                return (
                    <VisitorDetail data={item} />)
            }, this);
        return (
            <li>
                <div class="collapsible-header">
                    <i class="material-icons">info</i>
                    {this.props.data.yourInfo.name} ({this.props.data.yourInfo.neomId})  On {this.props.data.visitDetails.startDate.substring(5, 20)}
                    <span class="new badge" data-badge-caption="Guests ">{this.props.data.visitors.incmoingVisitors.length}</span>
                </div>
                <div class="collapsible-body left-align">
                    <div className="row">
                        <div className="col s6 left-align"><h5>Visit Details:</h5></div>
                    </div>
                    <div className="row">
                        <div className="col s3"><b>Mobile Number:</b> {this.props.data.yourInfo.mobile}</div>
                        <div className="col s3"><b>Manager Name:</b> {this.props.data.yourInfo.manager}</div>
                        <div className="col s3"><b>Department:</b> {this.props.data.yourInfo.department}</div>
                        <div className="col s3"><b>NEOM-ID:</b> {this.props.data.yourInfo.neomId}</div>
                    </div>
                    <div className="row">
                        <div className="col s3"><b>Visit Date:</b> {this.props.data.visitDetails.startDate.substring(5, 20)}</div>
                        <div className="col s3"><b>Visit Time:</b> {this.props.data.visitDetails.time}</div>
                        <div className="col s3"><b>Visit Duration</b>: {this.props.data.visitDetails.duration} Hrs</div>
                        <div className="col s3"><b>Visit Purpose: </b>{this.props.data.visitDetails.purposeOfVisit}</div>
                    </div>
                    <div className="row">
                        <div className="col s6 left-align"><h5>Incoming Guests:</h5></div>
                    </div>
                    <div className="row">

                        <ul class="collapsible">
                            {savedVisitorsList}
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col s6 left-align"><h5>Car and Driver Details:</h5></div>
                    </div>
                    <div className="row">
                        <div className="col s3"><b>Driver Name:</b> {this.props.data.vehicles.driver.firstName + " " + this.props.data.vehicles.driver.lastName}</div>
                        <div className="col s3"><b>Plate Type</b>: {this.props.data.vehicles.plateType}</div>
                        <div className="col s3"><b>Vehicle Type: </b>{this.props.data.vehicles.type}</div>
                        <div className="col s3"><b>Vehicle Plate: </b>{this.props.data.vehicles.vehiclePlate + " " + this.props.data.vehicles.vehiclePlateEnglish}</div>
                    </div>
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row center-align">
                        <div className="col s4">
                            <a className="btn blue darken-3 white-text">
                                View Driver Liscense
                            <i className="material-icons right">file_download</i>
                            </a>
                        </div>
                        <div className="col s4">
                            <a className="btn blue darken-3 white-text">
                                View Vehicle  Insurance
                            <i className="material-icons right">file_download</i>
                            </a>
                        </div>
                        <div className="col s4">
                            <a className="btn blue darken-3 white-text">
                                View Vehicle  Registration
                            <i className="material-icons right">file_download</i>
                            </a>
                        </div>
                    </div>
                    <div className="row"></div>
                    <div className="row ">
                        <div className="col s6 right-align">
                            <a className="btn red darken-3 white-text" onClick={this.reject}>
                                Reject
                            <i className="material-icons right">cancel</i>
                            </a>
                        </div>
                        <div className="col s6 left-align">
                            <a className="btn green darken-3 white-text" onClick={this.approve}>
                                Approve
                            <i className="material-icons right">check</i>
                            </a>
                        </div>
                    </div>

                </div>

            </li>
        )
    }
}

export default Detail