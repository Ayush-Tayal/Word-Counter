import React from 'react'

export default function Alerts(props) {
    // console.log(props)
    return (
        // props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">

            <strong>{props.alert.type}</strong> {props.alert.message}

        </div>
        
    )
}
