import "./edit_user_modal.css"
import React from "react"

export default function EditUserModal({current_name, current_career, current_balance, current_income, current_spendings, update_user}){
    const[editUserData, setEditUserData] = React.useState({name: current_name, career: current_career, balance: current_balance, income: current_income, spendings: current_spendings})
    const[errorText, setErrorText] = React.useState("")
  
    function itChanged(event){
      const theName = event.target.name
      const theValue = event.target.value
      setEditUserData(oldData =>{
        return {...oldData, [theName]: theValue}
      })
    }
  
    function submitEditUser(){
      //Check if any of the objects are empty
      if((editUserData.name === "") || (editUserData.career === "") || (editUserData.balance === "") || (editUserData.income === "") || (editUserData.spendings === "")){
        //Show error
        setErrorText("Please make sure all values are filled correctly before proceeding.")
        return
      }
      //Check if all values that need numbers are ok
      if(!((!isNaN(editUserData.balance)) && (!isNaN(editUserData.income)) && (!isNaN(editUserData.spendings)))){
        //Show email error
        setErrorText("Please make sure you insert number values for Balance, Income and Spendings")
        return
      }
      //Update data
      update_user(editUserData.name, editUserData.career, editUserData.balance, editUserData.income, editUserData.spendings);
      setErrorText("")
      document.getElementById("closeEditUserModal").click()
      //Dismiss modal
    }
      return(
          <div className="modal fade" id="editUserModal" tabIndex="-1" aria-labelledby="Create_User_Modal_Label" aria-hidden="true">
              <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit User</h5>
                <button id="closeEditUserModal" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <input type="text" className="modals-input-fields" placeholder="Name" value={editUserData.name} onChange={itChanged} name='name'/>
              <input type="text" className="modals-input-fields" placeholder="Career" value={editUserData.career} onChange={itChanged} name='career'/>
              <input type="text" className="modals-input-fields" placeholder="Balance" value={editUserData.balance} onChange={itChanged} name='balance'/>
              <input type="text" className="modals-input-fields" placeholder="Total Income" value={editUserData.income} onChange={itChanged} name='income'/>
              <input type="text" className="modals-input-fields" placeholder="Total Spendings" value={editUserData.spendings} onChange={itChanged} name='spendings'/>
              {(errorText !== "")&&
              <div className="modal-error-text">{errorText}</div>
              }
              </div>
              <div className="modal-footer">
                <button type="button" className="btn modal-button btn-modal-negative" data-bs-dismiss="modal">Cancel</button>
                <button type="button" className="btn modal-button btn-modal-positive" onClick={submitEditUser}>Save Changes</button>
              </div>
            </div>
          </div>
          </div>
      )
  }