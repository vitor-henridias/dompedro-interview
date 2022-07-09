import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios';
import { Button } from 'antd';

function App() {

  const [usersName, setUsersName] = useState('')
  const [usersEmail, setUsersEmail] = useState('')
  const [createAt, setCreateAt] = useState('')
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setUsersList(response.data)
    })
  }, [])

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert",
      { usersName: usersName, usersEmail: usersEmail, createAt: createAt }
    ).then(() => {
      alert('successful insert');
    })
  };

  return (
    <div className="App">
      <h1>Hello Dom Pedro!</h1>
      <div className="form">
        <label htmlFor="">Name</label>
        <input type="text" name="userName" onChange={(e) => {
          setUsersName(e.target.value)
        }} />
        <label htmlFor="">Email</label>
        <input type="email" name="userEmail" onChange={(e) => {
          setUsersEmail(e.target.value)
        }} />
        <label htmlFor="">Create At</label>
        <input type="date" name="userCreateAt" onChange={(e) => {
          setCreateAt(e.target.value)
        }} />
        <Button type="primary" onClick={submitReview} >Submit</Button>
      </div>

      <div className="tablediv">
        <table border="1" className="table">
          <thead className="thead">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Create At</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{usersList.map((val) => {
                return <p>{val.idusers}</p>
              })}
              </td>
              <td>{usersList.map((val) => {
                return <p>{val.usersName}</p>
              })}
              </td>
              <td>{usersList.map((val) => {
                return <p>{val.usersEmail}</p>
              })}</td>
              <td>{usersList.map((val) => {
                return <p>{val.createAt}</p>
              })}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
