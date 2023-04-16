import React, { useRef } from 'react'
import Header from '../../../components/header'
import './index.less'
import { getJson } from '../../../server/fetch'

export default function PoemVisual() {

    const textRef = useRef(null)

    const submit = () => {
        console.log(textRef.current.value);
        // getJson(url)
    }

    return (
        <div className='poem-visual-wrapper'>
            <Header />
            <div className='content-wrapper'>
                <div className='form'>
                    <textarea className='input-box' ref={textRef} cols={75} rows={6} placeholder='请输入古诗词'/>
                    <div className='btn'>
                        <div className='btn-clear'>清空</div>
                        <div className='btn-submit' onClick={submit}>确定</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
