import React, { useState } from 'react'
import search from '../../../assets/search.png'
import './index.less'

export default function Learn_Word() {

    const [content,setContent] = useState('')

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
            }
        )
    }


    return (
        <div className='learn-word-wrapper'>
            <div className='content-wrapper'>
                <div className='form'>
                    <div className='input-wrapper'>
                        <input type='text' className='input-box' value={content} onChange={changeContent} placeholder='请输入生词'/>
                        <div className='search'>
                            <img src={search} alt="" />
                        </div>
                    </div>
                    <div className='btn'>
                        <div className='btn-clear' onClick={clear}>清空</div>
                        <div className='btn-submit' onClick={submit}>确定</div>
                    </div>
                </div>
                <div className='story-box'>
                    <div className='waiting'>故事生成中......</div>
                    <div className='story'></div>
                </div>
            </div>
        </div>
    )
}
