  import './App.css';
  import rootData from './assets/data_from_backend/dashboard_data.json'
  import Profile from "./profile_page/profile"
  import Transactions from "./transactions_page/transactions"
  import EditUserModal from "./modals/edit_user_modal"
  import React from "react";

  function App() {
    const[activeScreen, setActiveScreen] = React.useState(true);
    const[userData, setUserData] = React.useState(rootData.user);
    const[days, setDays] = React.useState(rootData.days);
    const[months, setMonths] = React.useState(rootData.months);
    const[years, setYears] = React.useState(rootData.years);

    function getYearFromId(id){
      const year = (years.find((element) => element._id == id))
      /*console.log(`years ${JSON.stringify(years)}`)
      console.log(`year ${JSON.stringify(year)}`)*/
      if(year != undefined){
        return year.label
      }
      console.log("failed")
      return "null";
    }


    function goHome(){
      setActiveScreen(true)
    }

    function changeView(){
      setActiveScreen((old) => !old);
    }

    function updateUser(name, career, balance, income, spendings){
      setUserData((currentUser) =>{
        return {...currentUser, name, career, balance, total_income: income, total_spending: spendings}
      })
    }

    return(
      <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary mycolor">
  <div className="container-fluid">
  <a className="navbar-brand btn-home" href="#" onClick={goHome}>{userData.name}</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {(activeScreen)?
      <>
      <li className="nav-item">
      <a className="nav-link active selected-page" aria-current="page" href="#" onClick={(e) => e.preventDefault()}>Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={changeView}>Transactions</a>
      </li>
      </>:
      <>
      <li className="nav-item">
      <a className="nav-link" href="#" onClick={changeView}>Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active selected-page" aria-current="page" href="#" onClick={(e) => e.preventDefault()}>Transactions</a>
      </li>
      </>
      }
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Options
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item item-normal" href="#" data-bs-toggle="modal" data-bs-target="#editUserModal">Edit User</a></li>
        </ul>
      </li>
    </ul>
  </div>
  </div>
  </nav>
  <div className="container">
  {(activeScreen)?
  <Profile userData={userData}/>
  :
  <Transactions days={days} months={months} getYearFromId={getYearFromId}/>
  }
  </div>
  <EditUserModal current_name={userData.name} current_career={userData.career} current_balance={userData.balance} current_income={userData.total_income} current_spendings={userData.total_spending} update_user={updateUser}/>
  </>
  )
  }

  export default App;
