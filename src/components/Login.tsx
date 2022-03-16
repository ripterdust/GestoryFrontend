import React from 'react';
import { Link } from 'react-router-dom';
export const Login = () => {
    return (
        <div className="login animate__animated animate__fadeIn">
            <div className="form">
                <div className="title">
                    <i className="fa-solid fa-user"></i>
                    Login
                </div>
                <form action="">
                    <div className="form-group">
                        <i className="fa-solid fa-at"></i>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            required
                            id=""
                        />
                    </div>
                    <div className="form-group">
                        <i className="fa-solid fa-key"></i>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            id=""
                        />
                    </div>
                    <button type="submit">Login</button>
                    <Link to={'/forgot'}>Forgot password?</Link>
                </form>
                <Link to={'/register'}>Create an account.</Link>
            </div>
        </div>
    );
};
