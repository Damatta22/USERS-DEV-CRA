import React, { useState, useRef } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

import People from '../../assets/people.svg';
import Arrow from '../../assets/arrow.svg';





import { Container, Image, ConteinerItens, H1, InputLabel, Input, Button} from './styles';


export default function App() {

    const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    const inputName = useRef();
    const inputAge = useRef();

    async function addNewUser() {

        const { data: newUser } = await axios.post("http://localhost:3001/users",
            {
                name: inputName.current.value,
                age: inputAge.current.value,
            });



        setUsers([...users, newUser]);


            navigate("/Users");
    }

    


    return (

        <Container>
            <Image alt="img" src={People} />

            <ConteinerItens>
                <H1>Hello!</H1>

                <InputLabel>Name</InputLabel>
                <Input ref={inputName} placeholder="What is your name?" />

                <InputLabel>Age</InputLabel>
                <Input ref={inputAge} placeholder="How old are you?" />

                <Button onClick={addNewUser}>
                    Register<img alt='arrow' src={Arrow} />
                </Button>

            
                

            </ConteinerItens>

        </Container>

    )
};




