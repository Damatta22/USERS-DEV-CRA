import React, { useState, useRef } from "react";

import axios from 'axios';

import People from './assets/people.svg';
import Arrow from './assets/arrow.svg';
import Trash from './assets/trash.svg';




import { Container, Image, ConteinerItens, H1, InputLabel, Input, Button, User } from './styles';


export default function App() {

    const [users, setUsers] = useState([]);
    const inputName = useRef();
    const inputAge = useRef();

    async function addNewUser(){

        const {data: newUser} = await axios.post("http://localhost:3001/users",
        {name: inputName.current.value, 
            age: inputAge.current.value, });

console.log(newUser)

setUsers([ ...users, newUser]);

    }


    
    function deleteUser(userId) {

        const newUsers = users.filter((user)=> user.id !== userId);
        setUsers(newUsers);

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

                <Button onClick={addNewUser}>Register<img alt='arrow' src={Arrow} /></Button>


                <ul>
                    {users.map((user) => (

                        <User key={user.id}>
                            <p>{user.name}</p><p>{user.age}</p>
                            <button onClick={() => deleteUser(user.id)}>

                                <img alt='trash' src={Trash} /></button>
                        </User>
                    ))}



                </ul>


            </ConteinerItens>

        </Container>

    )
};




