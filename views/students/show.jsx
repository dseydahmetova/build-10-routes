import React from "react";

function Show(props) {
    return (
    <>
        <link rel="stylesheet" type="text/css" href="/css/main.css"/>
        <div className="container">
            <h1>Student Details</h1>
            <ul>
            <li key = {props.student.id}>
          {props.student.name}{' '}{props.student.last_name}
            {(props.student.status === true)?<span className="active"></span>:<span className="notactive"></span>}
            </li>
<li>Cell: {props.student.cell}</li>
            <div className="btn-group">
   <a className="btn" href="#" >Add Course</a>
    <a className="btn" href={`/students/${props.student.id}/edit`}>Edit info</a>
            </div>
            </ul>
        </div>
        </>
    )
}

export default Show