import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
  <td>{contact.id}</td> 
    <td>{contact.fullname}</td> 
    <td>{contact.phonenumber}</td>
    <td>{contact.email}</td>
     <td>{contact.salary}</td>
     <td>{contact.designation}</td>
     <td>{contact.department}</td>
     <td>{contact.manager}</td>
     <td>
     <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
