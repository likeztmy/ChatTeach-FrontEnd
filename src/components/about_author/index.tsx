import React, { useRef, useState } from 'react'
import search from '../../../assets/search.png'
import './index.less'

export default function About_Author() {
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
                alert(data.image)
                setPic('data:image/png;base64,'+data.image)
            }
        )
    }

    return (
        <div className='about-author-wrapper'>
            <div className='content-wrapper'>
                <div className='form'>
                    <div className='input-wrapper'>
                        <input type='text' className='input-box' value={content} onChange={changeContent} placeholder='请输入作者'/>
                        <div className='search'>
                            <img src={search} alt="" />
                        </div>
                    </div>
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
