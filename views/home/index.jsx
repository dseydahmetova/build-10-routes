import React from "react";

function Index() {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/css/main.css" />
            <div className="container">
                <h1>Home Page</h1>
                <div className="home-btn">
                <a href='/students' className="btn"> Students</a>
                <a href='/teachers' className="btn"> Teachers</a>
                <a href='/courses' className="btn"> Courses</a>
                <a href='/schedules' className="btn"> Schedules</a>
                </div>
                <div className="btn-group">
                    <a href="/about" className="btn">Next</a>
                </div>
            </div>
        </>
    )
}

export default Index
