import React, { useState, useEffect } from "react";

import axios from 'axios';

import Avatar from '../../assets/avatar.svg';
import Arrow from '../../assets/arrow.svg';
import Trash from '../../assets/trash.svg';




import { Container, Image, ConteinerItens, H1, Button, User } from './styles';


export default function App() {

    const [users, setUsers] = useState([]);
    

    

    useEffect(() => {
        async function fetchUsers(){

            const { data: newUsers } = await axios.get("http://localhost:3001/users");

            setUsers(newUsers);
        }

        fetchUsers();
    }, [])







    async function deleteUser(userId) {

        await axios.delete(`http://localhost:3001/users/${userId}`)

        const newUsers = users.filter((user) => user.id !== userId);

        setUsers(newUsers);

    }




    return (

        <Container>
            <Image alt="img" src={Avatar} />

            <ConteinerItens>
                <H1>Users</H1>

                

                


                <ul>
                    {users.map((user) => (

                        <User key={user.id}>
                            <p>{user.name}</p><p>{user.age}</p>
                            <button onClick={() => deleteUser(user.id)}>

                                <img alt='trash' src={Trash} /></button>
                        </User>
                    ))}



                </ul>


                <Button><img alt='arrow' src={Arrow} />Back</Button>
                
            

            </ConteinerItens>

        </Container>

    )
};




