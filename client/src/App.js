import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios';
import { Button, Form, Input } from 'antd';

function App() {

  const [usersName, setUsersName] = useState('')
  const [usersEmail, setUsersEmail] = useState('')
  const [createAt, setCreateAt] = useState('')
  const [usersList, setUsersList] = useState([])

  // CONSTS ANTD

  const formItemLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const formTailLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 8,
      offset: 4,
    },
  };

  const [form] = Form.useForm();
  const [checkNick, setCheckNick] = useState(false);
  useEffect(() => {
    form.validateFields(['nickname']);
  }, [checkNick, form]);

  const onCheckboxChange = (e) => {
    setCheckNick(e.target.checked);
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  // ===============

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
      <Form form={form} name="dynamic_rule">
        <Form.Item
          {...formItemLayout}
          name="username"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input your name',
            },
          ]}
        >
          <Input placeholder="Please input your name" onChange={(e) => {
          setUsersName(e.target.value)
        }} />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          name="useremail"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please input your email',
            },
          ]}
        >
          <Input placeholder="Please input your email" onChange={(e) => {
          setUsersEmail(e.target.value)
        }} />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          name="createat"
          label="Create At"
          rules={[
            {
              required: true,
              message: 'Please input your create at',
            },
          ]}
        >
          <Input type="date" placeholder="Please input your create at" onChange={(e) => {
          setCreateAt(e.target.value)
        }} />
        </Form.Item>
      </Form>
        
      <Button type="primary" onClick={submitReview} >Submit</Button>

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
