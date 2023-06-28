import React from "react"
import WebStepper from "./web-stepper"
import './schedule.css'
import MobileTabs from "./mobile-stepper"

export default function Schedule(){
    return (
        <div id="schedule" className="schedule contain" >
            <h1>Schedule of BITOTSAV</h1>
            <div className="web-stepper">
               <WebStepper/>
            </div>
            <div className="mobile-stepper">
               <MobileTabs/>
            </div>
        </div>
    )
}