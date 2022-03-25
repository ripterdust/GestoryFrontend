import React from 'react';

export const Footer = () => {
    const date = new Date();

    return (
        <div className="footer">
            © {date.getFullYear()} DressU o sus afiliados
        </div>
    );
};
