import React from 'react'
import Layout from '../components/Layout'
import { Route, Redirect } from 'react-router'
import Logout from '../components/child/LogoutForm'
import Login from '../components/child/LoginForm'
import Register from '../components/child/RegisterForm'
import Home from '../components/home'
import { useSelector } from 'react-redux'
import DemoRouter from '../components/Demo'
import Card from '../components/Demo/card'

const Router = () => {
    const state = useSelector(state => state.UserReducer);
    return (
        <Layout>
            {
                (state.token) ?
                    <>
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/logout' component={Logout} />
                        <Route path='*' render={() => <Redirect to='/home' />} />
                    </>
                    :
                    <>
                        <Route exact path='/' render={() => <h1>we are in index page</h1>} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/demo' component={DemoRouter} />
                        <Route exact path='/demo/:id' component={Card} />
                        <Route path="*" render={()=><Redirect to='' />} />
                    </>
            }
        </Layout>
    )
}
export default Router