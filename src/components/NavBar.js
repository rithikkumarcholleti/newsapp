import React from 'react';
import { Link } from 'react-router-dom';
import mainlogo from './mainlogo.png'; 

const NavBar = () => {
    const navStyle = {
        backgroundColor: '#00A36C', 
    };

    const linkStyle = {
        color: 'white',
        transition: 'color 0.3s', 
    };

    const linkHoverStyle = {
        color: 'grey',
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={navStyle}>
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/" style={linkStyle}>
                    <img
                        src={mainlogo}
                        alt="main logo"
                        style={{ width: '40px', height: '40px', marginRight: '10px' }}
                    />
                    NewsPanda
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        {['/', '/business', '/entertainment', '/general', '/health', '/science', '/sports', '/technology'].map((path) => (
                            <li className="nav-item" key={path}>
                                <Link
                                    className="nav-link"
                                    to={path}
                                    style={linkStyle}
                                    onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
                                    onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
                                >
                                    {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <form className="d-flex" style={{ gap: '10px', position: 'relative' }}>
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            style={{
                                paddingRight: '35px', 
                                borderRadius: '25px', 
                                borderWidth: '1px', 
                            }}
                        />
                        <i
                            className="fas fa-search"
                            style={{
                                position: 'absolute',
                                right: '15px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                fontSize: '18px',
                                color: '#888',
                            }}
                        ></i>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
