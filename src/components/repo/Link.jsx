import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <Link to={`repository/${props.owner}/${props.name}`}>{props.name}</Link>