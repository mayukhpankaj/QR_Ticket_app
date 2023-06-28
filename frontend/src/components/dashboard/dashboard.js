import React from "react"
import DashboardDrawer from "./perm-drawer"
import "./dashboard.css"
import { Outlet } from "react-router-dom"

export default function Dashboard(props){
    return (
        <div className="dashboard">
                <div className="info">
                    <p className="user-name"><b>Hello</b> User,</p>
                    <div className="other-info">
                        <h1>BitotsavID: </h1>
                        <h1>Team Name: </h1>
                        <h1>Team Id: </h1>
                    </div>
                </div>
            <Outlet/>
        </div>
    )
}