import React from 'react';
import css from "./Layout.module.css"
import moment from "moment/moment";
import {BiSearch} from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar.jsx";
import {Navigate, Outlet, useLocation} from "react-router-dom";

const Layout = () => {
    const {pathName} = useLocation()

    return (
        <div className={css.container}>
            <Sidebar/>
            {pathName === "/" && <Navigate to="/dashboard"/>}
            <div className={css.dashboard}>
                <div className={css.topBaseGradients}>
                    <div className={"gradient-red"}></div>
                    <div className="gradient-orange"></div>
                    <div className="gradient-blue"></div>
                </div>

                <div className={css.header}>
                    <span>{moment().format("dddd, Do MMM YYYY")}</span>
                    <div className={css.searchBar}>
                        <BiSearch size={20}/>
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div className={css.profile}>
                        <img src="./profile.png" alt="personImage"/>
                        <div className={css.details}>
                            <span>Penis Setven</span>
                            <span>penidsverdgon@gmail.com</span>
                        </div>

                    </div>
                </div>
                <div className={css.content}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );

};

export default Layout;