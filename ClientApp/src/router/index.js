import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { Route, Redirect } from 'react-router'
import Logout from '../components/child/LogoutForm'
import Login from '../components/child/LoginForm'
import Register from '../components/child/RegisterForm'
import Home from '../components/home'
import { useSelector } from 'react-redux'

const Router = () => {
    const state = useSelector(state => state.UserReducer);
    return (
        <Layout>
            {
                (state.token) ?
                    <>
                        <Route exact path='/home' render={() => <Home />} />
                        <Route exact path='/logout' render={() => <Logout />} />
                        <Route path='*' render={() => <Redirect to='/home' />} />
                    </>
                    :
                    <>
                        <Route exact path='/login' render={() => <Login />} />
                        <Route exact path='/register' render={() => <Register />} />
                        <Route exact path='/' render={() => <h1>we are in index page</h1>} />
                        <Route exact path='*' render={() => <Redirect to='/' />} />
                    </>
            }
        </Layout>
    )
}
export default Router