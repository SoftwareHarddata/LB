import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {userDetails} from "../services/userDetailsService";
import styled from "styled-components/macro";
import NavbarComponent from "../components/NavbarComponent";
import {getLoggedUser} from "../services/userService";
import {Link, NavLink, Redirect} from "react-router-dom";
import {Hidden} from "@material-ui/core";
import MyDrawer from "./MyDrawer";
import ButtonAppBar from "../components/ButtonAppBar";
import Header from "../components/Header";

const ages = [
    {
        value: '<18',
        label: '<18',
    },
    {
        value: '18-24',
        label: '18-24',
    },
    {
        value: '25-34',
        label: '25-34',
    },
    {
        value: '35-44',
        label: '35-44',
    },
    {
        value: '45-54',
        label: '45-54',
    },
    {
        value: '55-64',
        label: '55-64',
    },
    {
        value: '>65',
        label: '>65',
    },
];

const sectors = [
    {
        value: 'Industrie',
        label: 'Industrie',
    },
    {
        value: 'Consulting',
        label: 'Consulting',
    },
];

const departments = [
    {
        value: 'IT',
        label: 'IT',
    },
    {
        value: 'HR',
        label: 'HR',
    },
];

const occupations = [
    {
        value: 'Developer',
        label: 'Developer',
    },
    {
        value: 'Consultant',
        label: 'Consultant',
    },
];

const company_sizes = [
    // todo: update size to economy size
    {
        value: '1-3',
        label: '1-3',
    },
    {
        value: '4-10',
        label: '4-10',
    },
    {
        value: '11-50',
        label: '11-50',
    },

    {
        value: '51-250',
        label: '51-250',
    },

    {
        value: '>250',
        label: '>250',
    },
];


export default function Userdetails({loggedUser, token, setToken}) {
    const [requestDetailsError, setRequestDetails ] = useState('')

    const [age, setAge] = React.useState('');
    const [sector, setSector] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const [occupation, setOccupation] = React.useState('');
    const [userData, setUserData] = React.useState({
        age: '', sector: '',
        department: '', occupation: '', company_size: '', plz: 99999, idUserSingUp: loggedUser?.idUserSingUp
    });
    const [company_size, setCompany_size] = React.useState('');
    const [plz, setPlz] = React.useState(99999);


    useEffect(() => {

        console.log("from userdetails ...")
        console.log("loggedUserData username.....")
        console.log(loggedUser)
        console.log(userData)
    }, [userData])



    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value
        })
    };

    const saveData = (e) => {
        e.preventDefault()

        console.log('loading data...' + ' ' +userData.age+ ' ' + userData.sector+ ' ' + userData.department
            + ' ' + userData.occupation+ ' ' + userData.company_size+ ' ' + userData.plz)

        // todo: ?
        if (requestDetailsError === '') {

            userDetails(userData.age, userData.sector, userData.department,
                userData.occupation, userData.company_size, userData.plz, userData.idUserSingUp).catch((error) => setRequestDetails(error.response.data))

            e.target.reset()
            setAge('')
            setSector('')
            setDepartment('')
            setOccupation('')
            setCompany_size('')
            setPlz(99999)
            setUserData({
                age: '', sector: '',
                department: '', occupation: '', company_size: '', plz: 99999
            })

            // todo: redirect
            return <Redirect to={`/user/home`}/>

        }

    }

//  todo: plz validieren (with react hooks form?), button ändern to Material UI, reset anpassen, unnötigen hooks löschen

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header loggedUser={loggedUser} setToken={setToken} />

            <Titel>Privates Nutzerprofil anlegen</Titel>
            <form onSubmit={ saveData } className={classes.root} autoComplete="off">
            <Wrapper>
                <TextField
                    required
                    id="age"
                    name="age"
                    select
                    label="age"
                    value={userData.age}
                    onChange={handleChange}
                    helperText="Please select your age"
                    variant="filled"
                >
                    {ages.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                {
                    requestDetailsError.age && <> <br/> <ErrorMessage> age {requestDetailsError.age} </ErrorMessage> <br/> </>
                }

                <TextField
                    id="sector"
                    name="sector"
                    select
                    label="sector"
                    value={userData.sector}
                    onChange={handleChange}
                    helperText="Please select your sector"
                    variant="filled"
                >
                    {sectors.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="department"
                    name="department"
                    select
                    label="department"
                    value={userData.department}
                    onChange={handleChange}
                    helperText="Please select your department"
                    variant="filled"
                >
                    {departments.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    required
                    id="occupation"
                    name="occupation"
                    select
                    label="occupation"
                    value={userData.occupation}
                    onChange={handleChange}
                    helperText="Please select your occupation"
                    variant="filled"
                >
                    {occupations.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                {
                    requestDetailsError.occupation && <> <br/> <ErrorMessage> occupation {requestDetailsError.occupation} </ErrorMessage> <br/> </>
                }

                <TextField
                    //required
                    id="company_size"
                    name="company_size"
                    select
                    label="company size"
                    value={userData.company_size}
                    onChange={handleChange}
                    helperText="Please select the company size"
                    variant="filled"
                >
                    {company_sizes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    required
                    type='number'
                    id="plz"
                    name="plz"
                    label="plz"
                    //value={userData.company_size}
                    onChange={handleChange}
                    helperText="Please select your plz"
                    variant="filled"
                >
                </TextField>
                {
                    requestDetailsError.plz && <> <br/> <ErrorMessage> plz {requestDetailsError.plz} </ErrorMessage> <br/> <br/> </>
                }

            </Wrapper>

            <AddButton type="submit">Add</AddButton>


        </form>
            <ButtonAppBar loggedUser={loggedUser}/>

        </div>
    );
}

const ErrorMessage = styled.span`
  padding: 0.5em;
  margin: 0.5em;
  color: crimson;
  background: darkgrey;
  border: none;
  border-radius: 3px;
  font-size: x-small;
`;

/*const ButtonsNavigation = styled.div`
  padding: 0.5em;
  background: seashell;
  border: none;
  display: flex;
  justify-content: space-around;
`;*/

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;

const Titel = styled.h4`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const AddButton = styled.button`
  background: #1D253B;
  border-radius: 10px;
  border: 0;

  display: flex;
  margin: 10px;
  text-align: center;

  color: white;
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)';
  height: 30px;
  width: 100px;
  padding: 5px;
  align-self: center;
  justify-content: center;
`;

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
        flexGrow:'1',
        backgroundColor: '#A8AAB5',
        color: '#1D253B'
    },
    toolbar : theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: '#D0CCC5',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
    },
}));