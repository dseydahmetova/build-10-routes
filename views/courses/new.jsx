import React from "react";

function New() {
    return (
        <>
       <link rel="stylesheet" type="text/css" href="/css/main.css"/>
        <div className="container">
           <h1> Add New Course</h1>
           <form action="/courses" method="POST" className="login">
                    <label>Name:
                        <input type="text" name="name" />
                    </label>
                    <label>Duration:
                        <input type="text" name="duration" />
                    </label>
                    <button className="btn" type="submit">Add</button>
                </form>
        </div>
        </>
    )
}

export default New