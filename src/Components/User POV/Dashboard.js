import React, { Component } from 'react'
import '../../application.css'
import Submit from './Submit'
import Veichles from './Veichles'
import Visitors from './Visitors'
import YourInfo from './YourInfo'
import M from 'materialize-css'
import VisitDetails from './VisitDetails'

class Dashboard extends Component {
    //Finish Form and Push JSON to Database
    componentDidMount() {
        M.AutoInit();

    }
    state = {
        status: "New",
        rejectionReason: "",
        arg1: -1,
        step: 1,
        yourInfo: {
            name: "Youssef Shalaby",
            manager: "Sir Arsene Wenger",
            department: "ICT",
            neomId: "ISO9898",
            mobile: "",
            completed: false
        },
        visitDetails: {
            startDate: "",
            time: "10:00",
            duration: "",
            purposeOfVisit: "",
        },
        visitors: {
            savedVisitors: [],
            incmoingVisitors: [],
        },
        vehicles: {
            type: "",
            plateType: "",
            vehiclePlate: "",
            vehiclePlateEnglish: "",
            driver: {},
            liscense: "",
            registration: "",
            insurance: "",
        },
        condtionsAgreed: false,
        completed: false,
        cssStep1: "col s2 blue darken-3 white-text guideText",
        cssStep2: "col s2 blue lighten-4 white-text guideText",
        cssStep3: "col s2 blue lighten-4 white-text guideText",
        cssStep4: "col s2 blue lighten-4 white-text guideText",
        cssStep5: "col s2 blue lighten-4 white-text guideText",



    }
    changeColor = (step) => {
        var lightColor = "col s2 blue lighten-4 white-text guideText"
        var darkColor = "col s2 blue darken-3 white-text guideText"
        if (step === 1) {
            this.setState({
                cssStep1: darkColor,
                cssStep2: lightColor,
                cssStep3: lightColor,
                cssStep4: lightColor,
                cssStep5: lightColor,
            })

        }
        if (step === 2) {
            this.setState({
                cssStep1: lightColor,
                cssStep2: darkColor,
                cssStep3: lightColor,
                cssStep4: lightColor,
                cssStep5: lightColor,
            })
        }
        if (step === 3) {
            this.setState({
                cssStep1: lightColor,
                cssStep2: lightColor,
                cssStep3: darkColor,
                cssStep4: lightColor,
                cssStep5: lightColor,
            })
        }
        if (step === 4) {
            this.setState({
                cssStep1: lightColor,
                cssStep2: lightColor,
                cssStep3: lightColor,
                cssStep4: darkColor,
                cssStep5: lightColor,
            })
        }
        if (step === 5) {
            this.setState({
                cssStep1: lightColor,
                cssStep2: lightColor,
                cssStep3: lightColor,
                cssStep4: lightColor,
                cssStep5: darkColor,
            })
        }
    }
    updateCheckBox = (state) => {
        this.setState({ condtionsAgreed: state })
    }
    handleDate = (date) => {
        var prevState = this.state.visitDetails
        prevState.startDate = date
        this.setState({ visitDetails: prevState })
        console.log(date)
    }
    handleDuration = (duration) => {
        var prevState = this.state.visitDetails
        prevState.duration = duration
        this.setState({ visitDetails: prevState })
        console.log(duration)
    }
    handleTime = (time) => {
        var prevState = this.state.visitDetails
        prevState.time = time
        this.setState({ visitDetails: prevState })
        console.log(time)
    }
    changeMobileNumber = (change) => {
        var prevState = this.state.yourInfo
        prevState.mobile = change
        this.setState({ yourInfo: prevState })
    }
    updateDetails = (e) => {
        var prevState = this.state.visitDetails
        prevState.purposeOfVisit = e
        this.setState({ visitDetails: prevState })
        console.log(e)
    }
    next = () => {
        console.log(this.state.visitors)
        if (this.state.step === 1 && this.state.yourInfo.mobile.length < 8) {
            var toastHTML = '<span>Please Enter Phone Number</span>';
            M.toast({ html: toastHTML });
            return;
        }
        var visitDetails = this.state.visitDetails
        if (this.state.step === 2 && (visitDetails.startDate === "" || visitDetails.purposeOfVisit === "")) {
            var toastHTML = '<span>Please Compelete Filling The form </span>';
            M.toast({ html: toastHTML });
            return;
        }
        if (this.state.step === 3 && (this.state.visitors.incmoingVisitors.length === 0)) {
            var toastHTML = '<span>Kindly Add The Guest Visiting You </span>';
            M.toast({ html: toastHTML });
            return;
        }
        const { type,
            plateType,
            vehiclePlate,
            vehiclePlateEnglish,
            driver,
            liscense } = this.state.vehicles
        console.log(driver)
        if (this.state.step === 4 && (type === "" || plateType === "" || vehiclePlate === "" || vehiclePlateEnglish === "" || driver.firstName == undefined)) {
            var toastHTML = '<span>Kindly The Required Details </span>';
            M.toast({ html: toastHTML });
            return;
        }
        if (this.state.step === 5 && this.state.condtionsAgreed) {
            console.log(this.state)
            window.alert("Done!")
            return;
        }

        var stepNumber = this.state.step + 1
        this.changeColor(stepNumber)
        this.setState({ step: stepNumber })
        console.log(this.state.step)
    }
    previous = () => {
        var stepNumber = this.state.step - 1
        if (stepNumber <= 0) {
            this.setState({ step: 1 })
        }
        else {
            this.setState({ step: stepNumber })
            this.changeColor(stepNumber)
        }
    }
    changeIncoming = (value) => {
        var prev = this.state.visitors
        console.log(prev)
        prev.incmoingVisitors = value
        this.setState({ visitors: prev });
        console.log(value)
    }
    changeType = (change) => {
        var prevState = this.state.vehicles
        prevState.type = change
        this.setState({ vehicles: prevState })
        console.log(change)
    }
    changePlateType = (change) => {
        var prevState = this.state.vehicles
        prevState.plateType = change
        this.setState({ vehicles: prevState })
    }
    changePlateNumber = (change) => {
        var prevState = this.state.vehicles
        prevState.vehiclePlate = change
        this.setState({ vehicles: prevState })
    }
    changePlateLetter = (change) => {
        var prevState = this.state.vehicles
        prevState.vehiclePlateEnglish = change
        this.setState({ vehicles: prevState })
    }
    changeDriver = (change) => {
        var prevState = this.state.vehicles
        prevState.driver = change
        this.setState({ vehicles: prevState })
    }
    render() {
        return (
            <div className="container">
                <br></br>
                <div className="row">
                    <div id="step1" className={this.state.cssStep1}><p>Your info</p></div>
                    <div id="step2" className={this.state.cssStep2}><p>Visit Details</p></div>
                    <div id="step3" className={this.state.cssStep3}><p>Visitors</p></div>
                    <div id="step4" className={this.state.cssStep4}><p>Vehicles</p></div>
                    <div id="step5" className={this.state.cssStep5}><p>Submit</p></div>
                </div>
                <div className="row">
                    Component Will show up Here
                    <YourInfo stepnumber={this.state.step} info={this.state.yourInfo} change={this.changeMobileNumber} />
                    <VisitDetails stepnumber={this.state.step} info={this.state.visitDetails}
                        change={this.updateDetails}
                        handleDate={this.handleDate}
                        handleDuration={this.handleDuration}
                        handleTime={this.handleTime}
                    />
                    <Visitors stepnumber={this.state.step} change={this.changeIncoming} info={this.state.visitors} />
                    <Veichles stepnumber={this.state.step}
                        visitors={this.state.visitors.incmoingVisitors}
                        changeType={this.changeType}
                        changePlateType={this.changePlateType}
                        changePlateNumber={this.changePlateNumber}
                        changePlateLetter={this.changePlateLetter}
                        changeDriver={this.changeDriver}
                    />
                    <Submit stepnumber={this.state.step} updateCheckBox={this.updateCheckBox} />
                </div>
                <div className="row left-align">
                    <div className="col s2">
                        <a class="btn blue darken-3 white-text" onClick={this.previous}>Previous
                     <i class="material-icons left">arrow_back</i>
                        </a>
                    </div>
                    <div className="col s7" />
                    <div className="col s2">
                        <a class="btn blue darken-3 white-text" onClick={this.next}>Next
                     <i class="material-icons right">arrow_forward</i>
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Dashboard