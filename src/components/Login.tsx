import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { postForm } from '../helpers/account/postForm';

export const Login: React.FC = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleInput = (e: any) => {
        const { target } = e;
        const { value, name } = target;
        setForm((form) => ({
            ...form,
            [name]: value,
        }));
    };
    const handleForm = (e: any) => {
        e.preventDefault();
        postForm(form);
    };

    return (
        <div className="login animate__animated animate__fadeIn">
            <div className="form">
                <div className="title">
                    <i className="fa-solid fa-user"></i>
                    Wellcome to <span>Dress U</span>
                </div>
                <div className="subtitle">Sign in to continue</div>
                <form action="" onSubmit={handleForm}>
                    <div className="form-group mb">
                        <i className="fa-solid fa-envelope"></i>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            required
                            id="mail"
                            onChange={handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <i className="fa-solid fa-lock"></i>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            id="password"
                            onChange={handleInput}
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
