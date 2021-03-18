
import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import {loginUser} from "../services/loginService";

const SingUpPage = () => {

    const {register, errors, handleSubmit} = useForm();

    const [entries, setEntries] = useState([]);

    const processForm = (data, e) => {
        console.log(data);
        setEntries([
            ...entries,
            data
        ])
        loginUser(data.username, data.password, data.email).then()
        console.log(entries);
        // clean fields
        e.target.reset();
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(processForm)}>
                <div className="row">
                    <div className="col-md-6 mx-auto p-0">
                        <div className="card">
                            <div className="login-box">
                                <div className="login-snip">
                                    {/* Login , Sign Up*/}

                                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked/>
                                    <label htmlFor="tab-1" className="tab">Login</label>

                                    <input id="tab-2" type="radio" name="tab" className="sign-up"/>
                                    <label htmlFor="tab-2" className="tab">Sign Up</label>

                                    <div className="login-space">
                                            <div className="login">
                                                {/* Login*/}
                                                <div className="group">
                                                    <label htmlFor="user" className="label">Username</label>
                                                    <input
                                                        id="user" type="text" className="input"
                                                    placeholder="Enter your username" name="user"
                                                        ref={
                                                            register({
                                                                required: {value:true, message: 'Ingrese un nombre'}
                                                            })
                                                        }
                                                    />

                                                </div>
                                                <span className="text-danger text-small d-block mb-2">
                                                        {errors?.user?.message}
                                                    </span>

                                                <div className="group"><label htmlFor="pass" className="label">Password</label>
                                                    <input
                                                        id="pass" type="password" className="input" data-type="password"
                                                    placeholder="Enter your password" name="password"
                                                        ref={
                                                            register({
                                                                required: {value:true, message: 'Ingrese un nombre'}
                                                            })
                                                        }
                                                    />
                                                    <span className="text-danger text-small d-block mb-2">
                                                        {errors?.password?.message}
                                                    </span>
                                                </div>

                                                <div className="group"><input id="check" type="checkbox"
                                                                              className="check" checked/> <label
                                                    htmlFor="check"><span className="icon"></span> Keep me Signed
                                                    in</label>
                                                </div>

                                                <div className="group"><input type="submit" className="button"
                                                                              value="Sign In"/>
                                                </div>

                                                <div className="hr"></div>
                                                <div className="foot"><a href="#">Forgot Password?</a></div>
                                            </div>

                                        {/* sign-up*/}
                                        <div className="sign-up-form">
                                                <div className="group"><label htmlFor="user"
                                                                              className="label">Username</label>
                                                    <input id="user" type="text" className="input"
                                                    placeholder="Create your Username" name="username" />
                                                </div>

                                                <div className="group"><label htmlFor="pass"
                                                                              className="label">Password</label> <input
                                                    id="pass" type="password" className="input" data-type="password"
                                                    placeholder="Create your password" name="password" />
                                                </div>

                                                <div className="group"><label htmlFor="pass" className="label">Repeat
                                                    Password</label> <input id="pass" type="password" className="input"
                                                                            data-type="password"
                                                                            placeholder="Repeat your password"/>
                                                </div>

                                                <div className="group"><label htmlFor="pass" className="label">Email
                                                    Address</label> <input id="pass" type="text" className="input"
                                                                           placeholder="Enter your email address" name="email"/>
                                                </div>

                                                <div className="group"><input type="submit" className="button"
                                                                              value="Sign Up"/>
                                                </div>

                                                <div className="hr"></div>
                                                <div className="foot"><label htmlFor="tab-1">Already Member?</label>
                                                </div>
                                            </div>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </Fragment>
    );
}

export default SingUpPage;

