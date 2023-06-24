// src/components/MemberList.js
import React, { useState } from "react";
import "./member.css";

const MemberList = ({ members, setMembers, clickOnEdit }) => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = () => {
    const sortedMembers = [...members].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.memberID.localeCompare(b.memberID);
      } else {
        return b.memberID.localeCompare(a.memberID);
      }
    });

    setMembers(sortedMembers);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredMembers = members.filter((member) => {
    // const { memberID, name, email } = member;
    const searchTerm = search;
    const memberID = member.memberID ? member.memberID.toLowerCase() : "";
    const name = member.name ? member.name.toLowerCase() : "";
    const email = member.email ? member.email.toLowerCase() : "";

    return (
      memberID.includes(searchTerm.toLowerCase()) ||
      name.includes(searchTerm.toLowerCase()) ||
      email.includes(searchTerm.toLowerCase())

      // return (
      //   memberID.toLowerCase().includes(searchTerm) ||
      //   name.toLowerCase().includes(searchTerm) ||
      //   email.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div>
      <h2>Member List</h2>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search..."
      />

      <table className="table">
        <thead>
          <tr>
            <th onClick={handleSort}>Member ID ↑↓</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Organization</th>
            <th>Designation</th>
            <th>Contact</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredMembers.map((member) => (
            <tr key={member.memberID}>
              <td>{member.memberID}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.address}</td>
              <td>{member.organization}</td>
              <td>{member.designation}</td>
              <td>{member.contact}</td>
              <td>
                <button onClick={() => clickOnEdit(member)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
