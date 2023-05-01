import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'

export default function Translation({message,parent}:{message:string,parent:Element | DocumentFragment}) {
    return ReactDOM.createPortal(
        <div className='translation-box'>
            <span>{message}</span>
        </div>,
        parent
    )
}
