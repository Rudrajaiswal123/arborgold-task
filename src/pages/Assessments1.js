import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Assessments1() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        axios.get('https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts')
            .then(response => {
                setData(response?.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    // Calculate the data to display based on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Change page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Previous and Next button handlers
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 mt-4'>
                    {loading ? (
                        <div className="d-flex justify-content-center align-items-center spinnerHeight">
                            <div className="spinner-border text-secondary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="table-responsive">
                                <table className="table table-hover table-bordered">
                                    <thead className='table-secondary'>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Company</th>
                                            <th scope="col">Job Title</th>
                                        </tr>
                                    </thead>
                                    <tbody className='table-group-divider'>
                                        {currentData?.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.first_name}</td>
                                                <td>{item.last_name}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.email}</td>
                                                <td>{item.company}</td>
                                                <td>{item.job_title}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Pagination */}
                            <nav aria-label="Page navigation example" className="mt-4">
                                <ul className="pagination justify-content-end pagination-sm">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={handlePrevious}>Prev</button>
                                    </li>
                                    {[...Array(totalPages)].map((_, index) => (
                                        <li
                                            key={index}
                                            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                                        >
                                            <button
                                                className="page-link"
                                                onClick={() => handlePageChange(index + 1)}
                                            >
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={handleNext}>Next</button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}

export default Assessments1;
