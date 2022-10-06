import React, { FC, useState, useEffect } from "react";
import List from "./List";
import  { IUser } from "../types/types";
import UserItem from "./UserItem";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <List
            items={users}
            renderItem={(user: IUser) =>
                <UserItem 
                    onClick={(user) => navigate('/users/' + user.id)} 
                    user={user} 
                    key={user.id} />}
        />
    )
}

export default UsersPage


