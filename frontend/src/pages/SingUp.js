import { Component, useState } from 'react'
import styled from 'styled-components/macro'
import { loginUser } from '../services/loginService'

export default function SingUp() {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [idUserEmail, setUserEmail] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        if (!userName && !userPassword) {
            return
        }
        loginUser(userName, userPassword, idUserEmail).then()
        setUserName('')
    }

    return (
        <>
            <p>Please Login</p>

            <Form onSubmit={handleSubmit}>
                <input
                    placeholder="Username"
                    type="text"
                    value={userName}
                    onChange={({ target }) => setUserName(target.value)}
                />
                <input
                    placeholder="Password"
                    type="password"
                    value={userPassword}
                    onChange={({ target }) => setUserPassword(target.value)}
                />
                <input
                    placeholder="Email"
                    type="text"
                    value={idUserEmail}
                    onChange={({ target }) => setUserEmail(target.value)}
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