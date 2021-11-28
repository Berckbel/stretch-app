import { useState, useEffect } from 'react'
import { activateUser } from '../services/activateUser'

export const useActivateUser = ({ uid, token }) =>{
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        activateUser({ uid, token }).then(res =>{
            const data = res
            setData(data)
            setLoading(false)
        }).catch(err => console.log(err))
    }, [uid, token])

    return {data, loading}

}