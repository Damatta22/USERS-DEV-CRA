import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home"
import Users from "./Pages/Users"



function MyRoutes(){

return(
    <Router>
        <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/Users"element={<Users/>}/>
        </Routes>
    </Router>
)

}

export default MyRoutes;