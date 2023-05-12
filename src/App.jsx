import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import React from "react";
import Layout from "./components/Layout/Layout.jsx";
import Calendar from "./pages/Calendar/Calendar.jsx";
import Board from "./pages/Board/Board.jsx";

const App = () => {
    return (
        <div id="dashboard">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/calendar" element={<Calendar/>}/>
                        <Route path="/board" element={<Board/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default App;
