import DisplayItem from "./display_item"

export default function DisplayFinances({monthDetails, where, days}){
    function getItems(){
        switch(where){
            case "0":
                return monthDetails.map((element, index) => {
                    const day = days.find(element => element.day == days._id).label
                    return <li className="list-group-item" key={index}><DisplayItem element={element} day={day}/></li>
                })
            case "1":
                return (monthDetails.filter(element => element.type =="0")).map((element, index) => {
                    const day = days.find(element => element.day == days._id).label
                return <li className="list-group-item" key={index}><DisplayItem element={element} day={day}/></li>})
            case "2":
                return (monthDetails.filter(element => element.type =="1")).map((element, index) => {
                    const day = days.find(element => element.day == days._id).label
                    return <li className="list-group-item" key={index}><DisplayItem element={element}  day={day}/></li>
                })
        }
    }
    return(
        <ul className="list-group">
        {getItems()}
      </ul>
      )
}