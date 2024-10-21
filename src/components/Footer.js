import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#00A36C' }} className="text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <h5>About NewsPanda</h5>
                        <p>Your daily dose of news!</p>
                    </div>
                    <div className="col-12 col-md-6 text-center text-md-end">
                        <h5>Follow Us</h5>
                        <a href="/" className="text-white mx-2">Facebook</a>
                        <a href="/" className="text-white mx-2">Twitter</a>
                        <a href="/" className="text-white mx-2">Instagram</a>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                    <p className="mb-0">© 2024 NewsPanda. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
