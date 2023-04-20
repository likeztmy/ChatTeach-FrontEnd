import React, { useRef, useState } from 'react'
import Header from '../../../components/header'
import './index.less'
import { getJson } from '../../../server/fetch'

export default function PoemVisual() {

    const [content,setContent] = useState('')
    const [pic,setPic] = useState('')

    const changeContent = (e: { target: { value: React.SetStateAction<string> } }) => {
        setContent(e.target.value)
    }

    const clear = () => {
        setContent('')
    }

    async function submit (){
        // Default options are marked with *
        const formdata = new FormData()
        formdata.append('text',content)
        const url='http://127.0.0.1:5000/api/poem-visual';
        console.log(formdata,content)

        const response = await fetch(url, {
            method: 'POST', 
            headers: {
                // 'Content-Type': 'application/json;charset=utf-8',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            /*  redirect: 'follow', */ // manual, *follow, error
            body: formdata // body data type must match "Content-Type" header
        });
    
        const res = response.json()
        res.then(
            data => {
                console.log(data)
                setPic('data:image/png;base64,'+data.image)
            }
        )
    }


    return (
        <div className='poem-visual-wrapper'>
            <div className='content-wrapper'>
                <div className='form'>
                    <textarea className='input-box' onChange={changeContent} cols={75} rows={6} placeholder='请输入古诗词'/>
                    <div className='btn'>
                        <div className='btn-clear' onClick={clear}>清空</div>
                        <div className='btn-submit' onClick={submit}>确定</div>
                    </div>
                </div>
                <div className='img-box'>
                    <img src={pic} alt=''/>
                </div>
            </div>
        </div>
    )
}
