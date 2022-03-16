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
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};
