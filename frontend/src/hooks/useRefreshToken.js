import { useState, useEffect } from 'react'
import { refreshToken } from '../services/refreshToken'

export const useRefreshToken = ({ refresh }) =>{
    const [access, setAccess] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        refreshToken({ refresh }).then(res =>{
            setAccess(res)
            setLoading(false)
        }).catch(err => console.log(err))
    }, [refresh])

    return {access, loading}
}