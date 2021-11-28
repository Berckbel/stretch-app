import { useState, useEffect } from 'react'
import { createToken } from '../services/createToken'

export const useCreateToken = ({ email, password }) =>{
    const [jwt, setJWT] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        createToken({ email, password }).then(res =>{
            const jwt = res
            setJWT(jwt)
            setLoading(false)
        }).catch(err => console.log(err))
    }, [email, password])

    return {jwt, loading}

}