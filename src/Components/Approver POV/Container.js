import React, { Component } from 'react'
import M from 'materialize-css'
import Detail from './Detail'
class Container extends Component {
    //Fetch From Server and Add to array
    //This is a demo with 3 Dummy Requests
    state = {
        requests:[
            {
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
            },
            {
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
                    duration: 2,
                    purposeOfVisit: "Install Internet",
                    startDate: "Date Thu Sep 24 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
                    time: "13:00",
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
                            IdNumber: "BATS776655",
                            agency: "Wayne Enterprises",
                            comments: "I Hate Joker",
                            firstName: "Bruce",
                            gender: "Male",
                            lastName: "Wayne",
                            mobile: "223366998855",
                            nationality: "Spain",
                            typeId: "Passport"
                        }
                    ]
                },
                yourInfo: {
                    department: "HR",
                    manager: "Mr Louis",
                    mobile: "011119455455",
                    name: "Clark Kent",
                    neomId: "NEMO00999345",
                }
            },
            {
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
                    duration: 2,
                    purposeOfVisit: "Install Internet",
                    startDate: "Date Thu Sep 24 2020 00:00:00 GMT+0200 (Eastern European Standard Time)",
                    time: "13:00",
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
                            agency: "Stark Industries",
                            comments: "I am ironman",
                            firstName: "Tony",
                            gender: "Male",
                            lastName: "Stark",
                            mobile: "0011225558468",
                            nationality: "Italy",
                            typeId: "Passport"
                        }
                    ]
                },
                yourInfo: {
                    department: "HR",
                    manager: "Mr Chris Evans",
                    mobile: "011119455455",
                    name: "Peter Parker",
                    neomId: "NEMO00999345",
                }
            }
        ]
    }

    componentDidMount() {
        M.AutoInit()
    }
    updateArray=(newArray)=>{
        this.setState({requests:newArray})
    }
    render() {
        const visitors = this.state.requests;

        let visitorsList = visitors.length > 0
            && visitors.map((item, i)  => {
                if(item.status==="New")
                return (
                    <Detail update={this.updateArray} whole={visitors} data={item}/>
                )
            }, this);
        return (
            <div className="container">
                <br></br>
                Please Approve Todays Requests

                <ul class="collapsible">
                    <li>
                        <div class="collapsible-header">
                            <i class="material-icons">filter_drama</i>
                            Guest Name Here, Date and Time
                            <span class="new badge" data-badge-caption="Guests ">4</span>
                        </div>
                        <div class="collapsible-body">
                            <p>Rest of the details</p>
                        </div>
                        
                    </li>
                    {visitorsList}
                </ul>
            </div>
        )
    }
}

export default Container