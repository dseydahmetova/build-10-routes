import React from "react";

export default function Index(props) {
    return (

        <>
            <link rel="stylesheet" type="text/css" href="/css/main.css" />
            <div className="container">
                <h1>All Courses</h1>
                <ul>
                    {props.courses.map(course =>
                        <a href={`/courses/${course.id}`}>
                            <li>{course.name}</li>
                        </a>
                    )}
                </ul>
                <div className="btn-group">
                    <a href="/courses/new" className="btn">Add New Course</a>
                    <a href="/home" className="btn">Home</a>
                </div>
            </div>
        </>
    )
}