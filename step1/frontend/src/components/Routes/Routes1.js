
import Task1 from "../tasks/Task1";
import Home from "../Home";
import Profile from "../Profile";
import Help from "../Help";
import About from "../About";
import Login from '../authentication/Login'
import Register from "../authentication/Register";
import Alumini from "../alumini/Alumini"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
export default function Routes1(){
    return (
        <>
        <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home />}
                        >
                            
                        </Route>

                        <Route
                            exact
                            path="/About"
                            element={<About />}
                        >
                            
                        </Route>
                        

                        <Route
                            exact
                            path="/Profile"
                            element={<Profile />}
                        >
                            
                        </Route>
                        
                        <Route
                            exact
                            path="/Help"
                            element={<Help />}
                        >

                        </Route>
                        <Route
                            exact
                            path="/Register"
                            element={<Register />}
                        >
                            
                        </Route>
                        <Route
                            exact
                            path="/Login"
                            element={<Login />}
                        >
                            
                        </Route>
                        <Route
                            exact
                            path="/Alumini"
                            element={<Alumini />}
                        >
                            
                        </Route>


                        
                    </Routes>
        </>
    )
}