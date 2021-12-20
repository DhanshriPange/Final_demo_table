import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
 
    <tr>
      <td> <input type="hidden"
        id="Id"
        name="Id"
        value="101" /></td>
        <td>
        <input
          type="text"
          name="fullname"
          required="required"
          placeholder="Enter a fullname..."
          value={editFormData.fullname}
          onChange={handleEditFormChange}></input> </td>
          
         
<td>
<input
          type="text"
          name="phonenumber"
          required="required"
          placeholder="Enter phonenumber..."
          value={editFormData.phonenumber}
          onChange={handleEditFormChange}
          ></input></td>
           
        <td>   <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          value={editFormData.email}
          onChange={handleEditFormChange}
          ></input></td>
        
        <td>  <input
          type="text"
          name="salary"
          required="required"
          placeholder="Enter a salary..."
          value={editFormData.salary}
          onChange={handleEditFormChange}
          ></input></td>
    
    
    <td>   <input
          type="text"
          name="designation"
          required="required"
          placeholder="Enter an designation..."
          value={editFormData.designation}
          onChange={handleEditFormChange}
          ></input></td>
        <td>   <input
          type="text"
          name="department"
          required="required"
          value={editFormData.department}
          onChange={handleEditFormChange}
          ></input></td>
        <td>   <input
          type="text"
          name="manager"
          required="required"
          placeholder="Enter an manager..."
          value={editFormData.manager}
          onChange={handleEditFormChange}
          ></input></td>
        
     
        <td> <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button></td>
     
         
        </tr>

  );
};

export default EditableRow;

