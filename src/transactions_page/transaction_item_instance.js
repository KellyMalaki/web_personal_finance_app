export default function TransactionItemInstance({label, yearName, income, spendings}){
    return(
        <div className="row">
            <div className="col-6">
                <div className="month-name">{label}</div>
                <div className="year-name">{yearName}</div>
            </div>
            <div className="col-6">
            <div className="summary-item">
                    <div className="transaction-item-label income">Income: </div>
                    <div className="transaction-money-value">Ksh. {income}</div>
                    </div>
                    <div className="summary-item">
                    <div className="transaction-item-label spendings">Spendings: </div>
                    <div className="transaction-money-value">Ksh. {spendings}</div>
                    </div>
            </div>
        </div>
    )
}