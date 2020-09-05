import React from 'react'
import PropTypes from 'prop-types'
import data from "../../mockData.json"
import styles from '../../css/demo.module.css'
import { Link } from 'react-router-dom'

const DemoRouter = (props) => {
    let { data: myData } = data;
    
    return (
        <>
            <h1 id={styles.id}>we are in DemoRouter Page</h1>
            {
                myData && myData.length > 0 &&
                myData.map((e, i) => {
                    let { id, email, first_name, last_name, avatar } = e
                    return (
                        <div key={id} className={styles.wrapper} onClick={()=>props.history.push(`/demo/${id}`)}>
                            <h2>{email}</h2>
                            <p>{`${first_name} ${last_name}`}</p>
                            <img src={avatar} height='50vh' width='50vh' />
                        </div>
                    )
                })
            }
        </>
    )
}

DemoRouter.propTypes = {
    props: PropTypes.object
}

export default DemoRouter



