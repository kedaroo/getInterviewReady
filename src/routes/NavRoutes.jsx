import { Routes, Route } from "react-router-dom";
import Login from "../pages/authentication/Login";
import Signup from "../pages/authentication/Signup";
import BehavioralQuestion from "../pages/behavioral/BehavioralQuestion";
import BehavioralQuestionCreate from "../pages/behavioral/BehavioralQuestionCreate";
import BehavioralQuestionList from "../pages/behavioral/BehavioralQuestionList";
import Dashboard from "../pages/dashboard/Dashboard";
import Project from "../pages/project/Project";
import ProjectList from "../pages/project/ProjectList";
import TechnicalQuestion from "../pages/technical/TechnicalQuestion";
import TechnicalQuestionsList from "../pages/technical/TechnicalQuestionsList";
import { ProtectedRoutes } from "./ProtectedRoutes";

const NavRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

        <Route path="/" element={<ProtectedRoutes/>}>
            <Route path="/" element={<Dashboard></Dashboard>}></Route>
            <Route path="/behavioralquestions/all" element={<BehavioralQuestionList></BehavioralQuestionList>}></Route>
            <Route path="/behavioral/:id" element={<BehavioralQuestion></BehavioralQuestion>}></Route>
            <Route path="/behavioralcreate/:id" element={<BehavioralQuestionCreate></BehavioralQuestionCreate>}></Route>
            <Route path="/projects" element={<ProjectList></ProjectList>}></Route>
            <Route path="/project/:id" element={<Project></Project>}></Route>
            <Route path="/technicalquestions" element={<TechnicalQuestionsList></TechnicalQuestionsList>}></Route>
            <Route path="/technicalquestion/:id" element={<TechnicalQuestion></TechnicalQuestion>}></Route>
        </Route>
    </Routes>
  )
}

export default NavRoutes