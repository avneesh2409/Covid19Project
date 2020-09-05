import React, {useState } from 'react'
import PropTypes from 'prop-types'
import data from "../../mockData.json"
import styles from '../../css/demo.module.css'

const Card = (props) =>{
    let {data:myData} = data
    let id = parseInt(props.location.pathname.replace('/demo/',''))
    return (
        <>
            {
                myData.filter(e=>e.id===id).map(x=>(
                    <div key={id} className={styles.wrapper}>
                            <h2>{x.email}</h2>
                            <p>{`${x.first_name} ${x.last_name}`}</p>
                            <img src={x.avatar} height='50vh' width='50vh' />
                    </div>
                ))
            }
        </>
    )
}
Card.propTypes = {
    props:PropTypes.object
}
export default Card
