import React from "react";
import DisplayFinances from "./display_finances";
export default function OneMonthData({goBack, monthDetails, days}){
    const [selectedOption, setSelectedOption] = React.useState("0")

    function changeSelectedValue(e){
        setSelectedOption(e.target.value)
    }

    return(
        <>
        <button className="btn btn-goback" onClick={e => goBack(0)}>Go Back</button>
        <h1 className="one-month-month">{monthDetails.label}</h1>
        <h3 className="one-month-year">{monthDetails.yearName}</h3>
        <div className="row">
            <div className="col-6">
            <div className="summary-item">
                <p className="one-month-income-label">Total Income: </p>
                <p className="one-month-income-value">Ksh. {monthDetails.income}</p>
                </div>
            </div>
            <div className="col-6">
            <div className="summary-item one-month-summary">
            <p className="one-month-spendings-label">Total Spendings: </p>
            <p className="one-month-spendings-value">Ksh. {monthDetails.spendings}</p>
            </div>
            </div>
        </div>
        <select className="form-select finance-instance" value={selectedOption} onChange={changeSelectedValue} aria-label="Select_items_to_view">
      <option value={0}>Monthly Statement</option>
      <option value={1}>Income Only</option>
      <option value={2}>Spendings Only</option>
    </select>
    <DisplayFinances monthDetails = {monthDetails.items} where={selectedOption} days={days}/>
        </>
    )
}