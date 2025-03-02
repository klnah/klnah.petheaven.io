import { useEffect, useRef, useState } from "react";
import Home from "./Home";
import "./css/signup.css";

const Signup = () => {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const localSignUp = localStorage.getItem("signUp");
    const localEmail = localStorage.getItem("email");
    const localPassword = localStorage.getItem("password");
    const localName = localStorage.getItem("name");
    const [show, setShow] = useState(false);
    const [showHome, setShowHome] = useState(false);

    useEffect(() => {
        if (localSignUp) {
            setShowHome(true);
        }
        if (localEmail) {
            setShow(true);
        }
    })

    const handleSignin = () => {
        if (email.current.value == localEmail && password.current.value == localPassword) {
            localStorage.setItem("signUp", email.current.value);
            window.location.reload();
        } else {
            alert("Invalid Email or Password");
        }
    }


    const handleClick = () => {

        if (name.current.value && email.current.value && password.current.value) {
            localStorage.setItem("name", name.current.value);
            localStorage.setItem("email", email.current.value);
            localStorage.setItem("password", password.current.value);
            localStorage.setItem("signUp", email.current.value);
            alert("Account created successfully");
            window.location.reload();

        }
    }



    return (
        <div>
            {showHome ? <Home /> :
                (show ?
                    <div className="card">
                        <div className="card-header">
                            <h1> Hello {localName}</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email Address </label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            ref={email}
                                            >
                                        </input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input 
                                            type="password"
                                            className="form-control"
                                            ref={password}
                                            >
                                        </input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary" onClick={handleSignin}>Sign In</button>
                            
                        </div>
                    </div>
                    :
                    //register
                    <div className="card">
                        <div className="card-header">
                            <h1> User Registration</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Full Name <span className="errmsg">*</span></label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            ref={name}
                                            >
                                        </input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email Address </label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            ref={email}
                                            >

                                        </input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input 
                                            type="password"
                                            className="form-control"
                                            ref={password}
                                            >

                                        </input>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary" onClick={handleClick}>Sign Up</button>
                            
                        </div>
                    </div>
                )
                
        }

        </div>

    );
}
export default Signup; 
