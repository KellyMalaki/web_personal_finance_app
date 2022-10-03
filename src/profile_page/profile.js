import AboutUser from "./about_user";
import SummaryData from "./summary_data";
import "./profile.css"

export default function Profile({userData}){

    return(
        <div className="container profile-root">
            <div className="row">
                <div className="col-6"><AboutUser img={userData.img} name={userData.name} career={userData.career}/></div>
                <div className="col-6"><SummaryData balance={userData.balance} income={userData.total_income} spendings={userData.total_spending}/></div>
            </div>
        </div>
    );
}