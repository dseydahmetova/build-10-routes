import React from "react";

function Index(props) {
    return (
        <>
       <link rel="stylesheet" type="text/css" href="/css/main.css"/>
        <div className="container">
           <h1> Welcome!</h1>
           <h4>LOGIN SUCCESSFUL</h4>
            <div className="btn-group">
            <a href="/home" className="btn">Continue</a>
            </div>
        </div>
        </>
    )
}

export default Index