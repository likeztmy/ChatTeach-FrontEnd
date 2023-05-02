import React, { useEffect, useRef, useState } from 'react'
import Header from '../header'
import './index.less'
import { getJson } from '../../server/fetch'
import loading from '../../../../assets/loading.gif'
import Loading from '../loading'

export default function PoemVisual() {

    const [content,setContent] = useState('')
    const [pic,setPic] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const changeContent = (e: { target: { value: React.SetStateAction<string> } }) => {
        setContent(e.target.value)
    }

    const clear = () => {
        setContent('')
        setPic('')
        setIsLoading(false)
    }

    async function submit (){
        // Default options are marked with *
        setIsLoading(true)
        setPic('')
        const formdata = new FormData()
        formdata.append('text',content)
        const url='http://101.43.180.21:5000/api/poem-visual';
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
                setIsLoading(false)
                setPic('data:image/png;base64,'+data.image)
            }
        )
    }

    useEffect(() => {
        let msg = navigator.userAgent
        console.log(msg)
    },[])

    return (
        <div className='poem-visual-wrapper'>
            <div className='content-wrapper'>
                <div className='form'>
                    <textarea className='input-box' value={content}  onChange={changeContent} cols={75} rows={6} placeholder='请输入古诗词'/>
                    <div className='btn'>
                        <div className='btn-clear' onClick={clear}>清空</div>
                        <div className='btn-submit' onClick={submit}>确定</div>
                    </div>
                </div>
                {pic&&<div className='img-box'>
                    <img src={pic} alt=''/>
                </div>}
                {isLoading&&<Loading />}
            </div>
        </div>
    )
}
