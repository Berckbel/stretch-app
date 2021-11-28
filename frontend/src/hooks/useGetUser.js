import { useState, useEffect } from 'react'
import { getUser } from '../services/getUser'

export const useGetUser = ({ access }) =>{
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        getUser({ access }).then(res=>{
            setUser(res)
            setLoading(false)
        }).catch(err => console.log(err))
    }, [access])

    return {user, loading}
}