export default function AboutUser({balance, income, spendings}){

    return(
        <div className="row">
                <div className="col-12">
                    <h4 className="summary-label">Summary</h4>

                    <div className="summary-item">
                    <div className="summary-item-label">Balance: </div>
                    <div className="summary-money-value">Ksh. {balance}</div>
                    </div>

                    <div className="summary-item">
                    <div className="summary-item-label">Total Income: </div>
                    <div className="summary-money-value">Ksh. {income}</div>
                    </div>
                    <div className="summary-item">
                    <div className="summary-item-label">Total spendings: </div>
                    <div className="summary-money-value">Ksh. {spendings}</div>
                    </div>
                </div>
            </div>
    );
}