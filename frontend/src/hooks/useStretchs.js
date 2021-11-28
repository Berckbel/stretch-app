import {useState, useEffect} from 'react'
import { getStretchs }  from '../services/getStretchs'

export const useStretchs = ({ access = '' }) =>{
    const [stretchs, setStretchs] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getStretchs({ access }).then(stretchs =>{
            setStretchs(stretchs)
            setLoading(false)
        }).catch(err => console.log(err))
    }, [access])

    return {stretchs, loading}
}