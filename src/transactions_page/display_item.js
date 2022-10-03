export default function DisplayItem({element, day}){
    return(
        <div className="row">
            <div className="col-4 item-label">{element.label}</div>
            <div className="col-4 item-money">Ksh. {element.amount}</div>
            <div className="col-4 item-date">{day} {element.date}</div>
        </div>
    )
}