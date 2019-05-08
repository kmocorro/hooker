import React from 'react';
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import DashboardBar from '../components/DashboardBody'

export default () => {

    return (
        <div style={{
            maxWidth: "100%",
            display: "flex",
            paddingTop: "69px",
            WebkitBoxAlign: "center",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <div style={{
                maxWidth: "1034px",
                display: "flex",
                alignItems: "flex-start",
                paddingTop: "41px",
                margin: "0px auto",
            }}>
                <NavBar/>
                <SideBar/>
                <DashboardBar/>
            </div>
        </div>
    )

}