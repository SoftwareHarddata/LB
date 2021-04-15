import React, { Component, useState } from 'react'
import styled from 'styled-components/macro'
import { singUpUser } from '../services/loginService'
import {useForm} from "react-hook-form";
import {Link, NavLink, Redirect} from "react-router-dom";


export default function SingUp() {
    //const [userName, setUserName] = useState('')
    //const [userPassword, setUserPassword] = useState('')
    //const [email, setUserEmail] = useState('')

    const { register, errors, handleSubmit } = useForm();
    const initialFormState = { userName:'', userPassword: '', email: '' }
    const [singUpData, setSingUpData] = useState([])
    const [conflictError, setConflictError] = useState('')



    const onSubmit = (data, e) =>{
        console.log(data);
        console.log(data.userName)
        setSingUpData([
            ...singUpData, data
        ])
        e.preventDefault()

        if (!data.userName && !data.userPassword && !data.email) {
            return
        }
        singUpUser(data.userName, data.userPassword, data.email).catch((error) => setConflictError(error.response.data.message))
            .then(response => {
                alert("thank you very much. Now you can login");
                window.location.href = '/user/login';
            })
        // todo: change alert design


        // clean fields
        e.target.reset();
        setConflictError('');



    }


    // Ab hier 1test@email.com


    /*const handleSubmit = (event) => {
        event.preventDefault()
        if (!singUpData.userName && !singUpData.userPassword && !singUpData.email) {
            return
        }
        singUpUser(singUpData.userName, singUpData.userPassword, singUpData.email).then()
        setSingUpData(initialFormState)
    }*/

    /*const handleInputChange = (event) => {
        console.log(event.target.value)
        setSingUpData({
            ...singUpData,
            [event.target.name]: event.target.value
        })
    }*/

    return (
        <>
            <Logo>2bbetter</Logo>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Username"
                    type="text"
                    name="userName"
                    value={singUpData.userName}
                    ref={register({
                        required: {
                            value: true,
                            message: 'Username bitte eingeben'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Username too long. Max 20 letters'
                        },
                        minLength: {
                            value: 2,
                            message: 'Username not valid. Min 2 letters'
                        }
                    })}
                />
                {/*<span>
                    {errors?.userName?.message}
                </span>*/}

                {
                    errors.userName && <ErrorMessage >{errors.userName.message}</ErrorMessage>
                }

                <input
                    placeholder="Password"
                    type="password"
                    name="userPassword"
                    value={singUpData.userPassword}
                    ref={register({
                        required: {
                            value: true,
                            message: 'Password bitte eingeben'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Password too long. Max 20 letters'
                        },
                        minLength: {
                            value: 2,
                            message: 'Password not valid. Min 2 letters'
                        }
                    })}
                />

                {
                    errors.userPassword && <ErrorMessage>{errors.userPassword.message}</ErrorMessage>
                }

                <input
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={singUpData.email}
                    ref={register({
                        required: {
                            value: true,
                            message: 'Email bitte eingeben'
                        },
                        pattern: {
                            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                            message: 'Email not valid'
                        }
                    })}
                />

                {
                    errors.email && <ErrorMessage >{errors.email.message}</ErrorMessage>
                }


                {
                    conflictError && <ErrorMessage >{conflictError}</ErrorMessage>
                }

                <button type="submit">SignUp</button>


            <LoginContent>
                Or login if you are already a user
                <br/>
                <button> <NavLink to="/user/login" >Login</NavLink>  </button>
            </LoginContent>

            </Form>
        </>
    )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  input {
    flex-grow: 1;
    text-align: center;
    margin: 8px;
  }
  button {
    padding: 8px;
    margin: 8px;
    color: white;
    background-color: #1D253B ;
    font-family: 'Al Nile';
    border-radius: 20px;
  }
`

const ErrorMessage = styled.span`
  padding: 0.5em;
  margin: 0.5em;
  color: #470f1a;
  //background: darkgrey;
  border: none;
  border-radius: 3px;
  font-size: medium;
`

const Logo = styled.section`
  display: flex;
  justify-content: center;
  font-family: Frutiger Serif;
  align-self: center;
  color: darkgrey;
  margin: 20px;
`

const LoginContent = styled.section`
  display: flex;
  flex-direction: column;`
;