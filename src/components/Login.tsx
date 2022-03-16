import React from 'react';
export const Login = () => {
    return (
        <div className="login animate__animated animate__fadeIn">
            <div className="form">
                <div className="title">
                    Wellcome to <span>DressU</span>
                </div>
                <form action="">
                    <div className="form-group">
                        <i className="fa-solid fa-at"></i>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            id=""
                        />
                    </div>
                    <div className="form-group">
                        <i className="fa-solid fa-key"></i>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            id=""
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};
