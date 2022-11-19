import React from 'react';

function Register(){
    return (
            <div>


<body>
<div class="login-box">
    <div class="lb-header">
        <a href="login.html" id="login-box-link">Login</a>
        <a href="registration.html"  class="active"  id="signup-box-link">Sign Up</a>
    </div>
    <div class="social-login">
        <a href="#">
            <i class="fa fa-facebook fa-lg"></i>
            Sign Up in with facebook
        </a>
        <a href="#">
            <i class="fa fa-google-plus fa-lg"></i>
            Sign Up in with Google
        </a>
    </div>
    <form class="email-login">
        <div class="u-form-group">
            <label for="email" id = "label_email" hidden>Not valid email</label>
            <input type="email" placeholder="Email" id = "email"/>
        </div>
        <div class="u-form-group">
            <label for="name" id = "label_name" hidden>Fill name</label>
            <input type="text" placeholder="Name" id = "name"/>
        </div>
        <div class="u-form-group">
            <label for="surname" id = "label_surname" hidden>Fill surname</label>
            <input type="text" placeholder="Surname" id = "surname"/>
        </div>
        <div class="u-form-group">
            <label for="birth" id = "label_birth" hidden>Fill birth</label>
            <input type="date" placeholder="birth" value="2003-07-08" id = "birth"/>
        </div>
        <div class="u-form-group">
            <select name="cars" id="cars">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unknown">Prefer not to tell</option>
              </select>
        </div>
        <div id = "error" hidden>Passwords do not match</div>
        <div class="u-form-group">
            <input type="password" placeholder="Password" id = "password"/>
        </div>
        <div class="u-form-group">
            <input type="password" placeholder="Confirm password" id = "password_confirm"/>
        </div>
        
        <div class="u-form-group">
            <button id = "submit" type="button" >Sign up</button>
        </div>
        <input type="submit" id = "sumbit_form" hidden/>
    </form>

</div>
    <script src="/resources/static/js/registration.js"></script>
</body>

</div>
    )
}

export default Register;