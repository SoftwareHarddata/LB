import { Component, useState } from 'react'
import styled from 'styled-components/macro'
import { loginUser } from '../services/loginService'

export default function SingUp() {
    //const [userName, setUserName] = useState('')
    //const [userPassword, setUserPassword] = useState('')
    //const [idUserEmail, setUserEmail] = useState('')
    const initialFormState = { userName:'', userPassword: '', idUserEmail: '' }
    const [singUpData, setSingUpData] = useState({
        userName:'',
        userPassword: '',
        idUserEmail: ''
    })


    const handleSubmit = (event) => {
        event.preventDefault()
        if (!singUpData.userName && !singUpData.userPassword && !singUpData.idUserEmail) {
            return
        }
        loginUser(singUpData.userName, singUpData.userPassword, singUpData.idUserEmail).then()
        setSingUpData(initialFormState)
    }

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setSingUpData({
            ...singUpData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <p>Please Login</p>

            <Form onSubmit={handleSubmit}>
                <input
                    placeholder="Username"
                    type="text"
                    name="userName"
                    onChange={handleInputChange}
                    value={singUpData.userName}
                    //onChange={({ target }) => setUserName(target.value)}
                />
                <input
                    placeholder="Password"
                    type="password"
                    name="userPassword"
                    onChange={handleInputChange}
                    value={singUpData.userPassword}
                    //onChange={({ target }) => setUserPassword(target.value)}
                />
                <input
                    placeholder="Email"
                    type="text"
                    name="idUserEmail"
                    onChange={handleInputChange}
                    value={singUpData.idUserEmail}
                    //onChange={({ target }) => setUserEmail(target.value)}
                />

                <button type="submit">login</button>
            </Form>
        </>
    )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    flex-grow: 1;
    text-align: center;
    margin: 8px;
  }
  button {
    padding: 8px;
    margin: 8px;
    background-color: chocolate;
    font-family: 'Al Nile';
  }
`