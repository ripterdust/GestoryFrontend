import React from 'react';
import { Link } from 'react-router-dom';
export const Login = () => {
    return (
        <div className="login animate__animated animate__fadeIn">
            <div className="form">
                <div className="title">
                    <i className="fa-solid fa-user"></i>
                    Wellcome to <span>Dress U</span>
                </div>
                <div className="subtitle">Sign in to continue</div>
                <form action="">
                    <div className="form-group mb">
                        <i className="fa-solid fa-envelope"></i>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            required
                            id=""
                        />
                    </div>
                    <div className="form-group">
                        <i className="fa-solid fa-lock"></i>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            id=""
                        />
                    </div>
                    <div className="forgot mb">
                        <Link to={'/forgot'}>Forgot password?</Link>
                    </div>
                    <button type="submit" className="mb">
                        Login
                    </button>
                    <Link to={'/register'} className="link">
                        Create an account.
                    </Link>
                </form>
            </div>
        </div>
    );
};
