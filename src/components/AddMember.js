// src/components/AddMember.js
import React, { useState } from "react";
import MemberList from "./MemberList";
import "./member.css";

const AddMember = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [organization, setOrganization] = useState("");
  const [designation, setDesignation] = useState("");
  const [contact, setContact] = useState("");
  const [member, setMember] = useState([]);
  const [isEdit, setEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleOrganizationChange = (e) => {
    setOrganization(e.target.value);
  };

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a member ID
    const memberID = generateMemberID();

    // Create a new member object
    const newMember = {
      memberID,
      name,
      email,
      address,
      organization,
      designation,
      contact,
    };
    if (name && email && address && organization && designation && contact) {
      setMember([...member, newMember]);
      alert("Member added successfully!");

      // Clear the form fields
      setName("");
      setEmail("");
      setAddress("");
      setOrganization("");
      setDesignation("");
      setContact("");
    } else {
      alert("Please fill all input fields");
    }
  };

  // Generate a random member ID with a combination of a string and a random number
  const generateMemberID = () => {
    const stringPart = "member";
    const randomPart = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(6, "0");
    return randomPart + stringPart;
  };
  const clickOnEdit = (member) => {
    setEdit(true);
    setEditId(member.memberID);
    setName(member.name);
    setEmail(member.email);
    setAddress(member.address);
    setOrganization(member.organization);
    setDesignation(member.designation);
    setContact(member.contact);
  };

  const handleEdit = () => {
    const index = member.findIndex((item) => item.memberID === editId);
    const edited = {
      memberID: editId,
      name,
      email,
      address,
      organization,
      designation,
      contact,
    };
    member.splice(index, 1, edited);

    if (name && email && address && organization && designation && contact) {
      setMember([...member]);
      setEdit(false);

      setName("");
      setEmail("");
      setAddress("");
      setOrganization("");
      setDesignation("");
      setContact("");
    } else {
      alert("Please fill all input fields");
    }
  };

  return (
    <div>
      <h2>Add Member</h2>

      <div className="add-member-container">
        <div>
          {isEdit ? (
            <div>
              <label>MemberId:</label>
              <input type="text" value={editId} onChange={() => {}} disabled />
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div>
          <label>Organization:</label>
          <input
            type="text"
            value={organization}
            onChange={handleOrganizationChange}
            required
          />
        </div>
        <div>
          <label>Designation:</label>
          <input
            type="text"
            value={designation}
            onChange={handleDesignationChange}
            required
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            value={contact}
            onChange={handleContactChange}
            required
          />
        </div>
        <button className="button" onClick={isEdit ? handleEdit : handleSubmit}>
          {isEdit ? "Edit Member" : "Add Member"}
        </button>
      </div>

      <MemberList
        members={member}
        setMembers={setMember}
        clickOnEdit={clickOnEdit}
      />
    </div>
  );
};

export default AddMember;
