import { useCallback, useState } from 'react'
import { useGlobalAuth } from '../hooks/useAuth'
import { createToken } from '../services/createToken'
import { getUser } from '../services/getUser'

export const useUser = () =>{
    const {auth, setAuth} = useGlobalAuth()
    const [state, setState] = useState({loading: false, error: false})

    const login = useCallback(({email, password})=>{
        setState({loading: true, error: false})
        createToken({email, password}).then(jwt =>{
            window.sessionStorage.setItem('jwt_refresh', jwt.refresh)
            window.sessionStorage.setItem('jwt_access', jwt.access)
            getUser({access: jwt.access}).then(user => {
                window.sessionStorage.setItem('user', JSON.stringify(user))
                setAuth({
                    user: user,
                    refresh: jwt.refresh,
                    access: jwt.access
                })  
            }).catch(err =>{
                window.sessionStorage.removeItem('user')
                setAuth({})
                setState({loading: false, error: true})
                console.log(err)
            })
            setState({loading: false, error: false})
        }).catch(err =>{
            window.sessionStorage.removeItem('jwt_refresh')
            window.sessionStorage.removeItem('jwt_access')
            window.sessionStorage.removeItem('user')
            setAuth({})
            setState({loading: false, error: true})
            console.log(err)
        })
    }, [setAuth])

    const logout = useCallback(()=>{
        window.sessionStorage.removeItem('jwt_refresh')
        window.sessionStorage.removeItem('jwt_access')
        window.sessionStorage.removeItem('user')
        setAuth({})
    }, [setAuth])

    return {
        isLogged: Boolean(auth.access),
        isLoading: state.loading,
        hasError: state.error,
        auth,
        login,
        logout
    }
}