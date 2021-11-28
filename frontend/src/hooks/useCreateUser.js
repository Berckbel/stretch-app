import { useEffect, useState } from "react";
import { createUser } from '../services/createUser';

export const useCreateUser = ({ email, name, password, re_password }) =>{
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        createUser({ email, name, password, re_password }).then(res =>{
            setUser(res)
            setLoading(false)
        }).catch(err => console.log(err))
        
    }, [email, name, password, re_password])

    return {user, loading}
}