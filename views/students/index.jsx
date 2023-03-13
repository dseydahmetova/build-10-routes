import React from "react";

function Index(props) {
    return (
        <>
       <link rel="stylesheet" type="text/css" href="/css/main.css"/>
        <div className="container">
           <h1> All Students</h1>
            <ul>
            {props.students.map((student) => 
            <li>
            <a href = {`/students/${student.id}`}>{student.name}{' '}{student.last_name}</a>
            </li>
            )}
            </ul>
            <div className="btn-group">
            <a href="/students/new" className="btn">Add New Student</a>
            <a href="/home" className="btn">Home</a>
            </div>
        </div>
        </>
    )
}

export default Index