import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
// import About from "./components/About"
import Mission from "./components/Mission"
import WrongPath from "./components/WrongPath"
import History from "./components/History"
import Company from "./components/Company"
import Team from "./components/Team"
import Members from "./components/Members"
import MembersDetails from "./components/MembersDetails"
import "./App.css"
import React from "react"
const LazyAbout = React.lazy(() => import("./components/About"))

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<LazyAbout />} />
        <Route path="/mission" element={<Mission />} />
        {/* <Route path="/history" element={<History />}>
          <Route path="company" element={<Company/>} />
          <Route path="team" element={<Team/>} />
        </Route>
        <Route path="*" element={<WrongPath />} />
        <Route path="/members" element={<Members />} />
        <Route path="/members/:id" element={<MembersDetails />} /> */}
      </Routes>
    </>
  )
}

export default App