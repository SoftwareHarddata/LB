import { Component, useState } from 'react'
import styled from 'styled-components/macro'
import { loginUser } from '../services/loginService'
import {useForm} from "react-hook-form";


export default function SingUp() {
    //const [userName, setUserName] = useState('')
    //const [userPassword, setUserPassword] = useState('')
    //const [email, setUserEmail] = useState('')

    const { register, errors, handleSubmit } = useForm();
    const initialFormState = { userName:'', userPassword: '', email: '' }
    const [singUpData, setSingUpData] = useState([])


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
        loginUser(data.userName, data.userPassword, data.email).then()

        // limpiar campos
        e.target.reset();    }

    // Ab hier


    /*const handleSubmit = (event) => {
        event.preventDefault()
        if (!singUpData.userName && !singUpData.userPassword && !singUpData.email) {
            return
        }
        loginUser(singUpData.userName, singUpData.userPassword, singUpData.email).then()
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
            <p>Please Login</p>

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
                <span>
                    {errors?.userName?.message}
                </span>

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
                <span>
                    {errors?.userPassword?.message}
                </span>

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
                <span>
                    {errors?.email?.message}
                </span>

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
    background-color:blueviolet ;
    font-family: 'Al Nile';
  }
`