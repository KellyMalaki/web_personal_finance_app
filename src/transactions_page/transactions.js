import MonthGeneral from "./month_general";
import "./transactions.css";
import React from "react";
import OneMonthData from "./one_month_data";
export default function Transactions({days, months, getYearFromId}){
    const[monthDetails, setMonthDetails] = React.useState({})

    function openMonth(month){
        const monthData = (require(`../${month.path}`)).spendings_instances;
        setMonthDetails({ label: month.label, income: month.income, spendings: month.spendings, yearName: month.yearName, items: monthData})
    }

    function goBack(){
        setMonthDetails({})
    }

    return(
        <div className="container">
        <h4 className="summary-label">Monthly Transactions</h4>
        {(months.length == 0)?
        <p className="error-warning">Data not added yet.</p>
        :
        <>
        {(monthDetails.income == undefined)?
        <MonthGeneral getYearFromId={getYearFromId} months={months} openMonth={openMonth}/>
        :
        <OneMonthData monthDetails={monthDetails} goBack={goBack} days={days}/>
        }
        </>
        }
        </div>
    );
}