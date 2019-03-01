import React from 'react'

export default props =>
    <a href={`./repository/${props.owner}/${props.name}`}>{props.name}</a>