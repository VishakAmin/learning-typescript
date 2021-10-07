import React from 'react'

export interface Props {
    title : string
    color?: string
}

const Header = (props: Props) => {
    return (
        <div>
            <h1 style={{color: props.color ? props.color : "red"}}>
                {props.title}
            </h1>            
        </div>
    )
}

export default Header
