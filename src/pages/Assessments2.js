
import React, { useState } from "react";
import moment from "moment";

const Assessments2 = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [result, setResult] = useState(null);

    const calculateDifference = () => {
        if (!startDate || !endDate) {
            alert("Please select both dates");
            return;
        }

        const start = moment(startDate);
        const end = moment(endDate);

        if (start.isAfter(end)) {
            alert("Start date should be earlier than the end date");
            return;
        }

        // Total days
        const totalDays = end.diff(start, "days");

        // Years, months, and days
        const years = end.diff(start, "years");
        const remainingAfterYears = start.clone().add(years, "years");

        const months = end.diff(remainingAfterYears, "months");
        const remainingAfterMonths = remainingAfterYears.clone().add(months, "months");

        const days = end.diff(remainingAfterMonths, "days");

        // Total months and remaining days
        const totalMonths = end.diff(start, "months");
        const remainingDays = end.diff(start.clone().add(totalMonths, "months"), "days");

        // Weeks and days
        const weeks = Math.floor(totalDays / 7);
        const daysInWeeks = totalDays % 7;

        setResult({
            totalDays,
            years,
            months,
            days,
            totalMonths,
            remainingDays,
            weeks,
            daysInWeeks,
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 m-auto border py-4 bgLightBlue">
                    <h1 className="heading">Days Between Dates Calculator</h1>
                    <div className=" d-flex flex-column w-25 mb-3" >
                        <label className="mb-2">Start Date: </label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className=" d-flex flex-column w-25 mb-3" >
                        <label className="mb-2">End Date: </label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <button onClick={calculateDifference} className="bgGreen text-light border border-1 border-black px-3 py-1">
                        Calculate
                    </button>

                    {result && (
                        <div style={{ marginTop: "20px" }}>
                            <h3>Result:</h3>
                            <p className="fw-semibold">Total Days: <span className="fw-normal resulTxt">{result.totalDays} days</span></p>
                            <p className="fw-semibold">
                                Years, Months, Days: <span className="fw-normal resulTxt">{result.years} years {result.months} months {result.days} days</span>
                            </p>
                            <p className="fw-semibold">
                                Total Months, Days: <span className="fw-normal resulTxt">{result.totalMonths} months {result.remainingDays} days</span>
                            </p>
                            <p className="fw-semibold">
                                Weeks, Days: <span className="fw-normal resulTxt">{result.weeks} weeks {result.daysInWeeks} days</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Assessments2;

