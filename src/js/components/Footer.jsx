
import React from 'react';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className='footer-content'>
                <footer className="bg-light text-center text-lg-start mt-auto">
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2024 Copyright:
                        <a className="text-dark" href="https://mdbootstrap.com/"> MDBootstrap.com </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;