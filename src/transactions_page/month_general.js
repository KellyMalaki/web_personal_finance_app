import TransactionItemInstance from "./transaction_item_instance"
export default function MonthGeneral({getYearFromId, months, openMonth}){
    return(
        <>
        {months.map((each) => {
        //First get the year
        each.yearName = getYearFromId(each.year)
    return <a href="#" className="list-group-item list-group-item-action" onClick={() => openMonth(each)} key={each._id}><TransactionItemInstance label={each.label} yearName={each.yearName} income={each.income} spendings={each.spendings}/></a>}
    )}
        </>
    )
}