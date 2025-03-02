import React from "react";
import '../components/css/form1.css';

// ACCESS KEY WEB3FORM 22c89f25-fd02-4c6f-bddb-ca50b67a4c7c

function Contact(){


    return(
        <>
        <div className="container-form">
            <div className="header">
                <h2 className="h2-text">Contact Us</h2> 
            </div>
                <div className="card-body">
                    <form action="https://api.web3forms.com/submit" method="POST" className="row">
                    <input type="hidden" name="access_key" value="22c89f25-fd02-4c6f-bddb-ca50b67a4c7c"/>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" name="name" required/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="email" required/>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Message</label>
                                <input className="reasoninput" type="text" name="reason" required/>
                            </div>
                        </div>
                        <button type="submit" className="submitform">Submit</button>
                    </form>
                </div>

        
        
        </div>
        
        </>
    )
}
export default Contact;