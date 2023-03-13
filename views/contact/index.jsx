import React from "react";

function Index() {
    return (
        <div className="container">
            <link rel="stylesheet" type="text/css" href="/css/main.css" />

            <h1>Contact Page</h1>
            <form className="login">
                <label for="fname">First Name:
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                </label>
                <label for="lname">Last Name:
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                </label>
                <label for="country">Country:
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>
                </label>
                <label for="subject">Subject:
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                </label>
                <button className="btn" type="submit">Submit</button>
            </form>
            <div className="btn-group">
                <a href="/about" className="btn">Back</a>
                <a href="/thanks" className="btn">Next</a>
            </div>
        </div>
    )
}

export default Index
