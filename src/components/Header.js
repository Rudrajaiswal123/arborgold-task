import React from 'react';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <nav className="navbar bg-body-tertiary mb-4">
            <div className="container">
                <a className="navbar-brand">Arborgold</a>
                <div className='d-flex text-start'>
                    <button
                        className="btn btn-outline-secondary me-2"
                        type="button"
                        onClick={() => (navigate("/"))}
                    >
                        Assessments1
                    </button>
                    <button
                        className="btn btn-outline-secondary "
                        type="button"
                        onClick={() => (navigate("/assessments2"))}
                    >
                        Assessments2
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;