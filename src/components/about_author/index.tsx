import React, { useRef, useState } from 'react'
import search from '../../../assets/search.png'
import './index.less'
import Loading from '../loading'

export default function AboutAuthor() {
    const [content,setContent] = useState('')
    const [pic,setPic] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const changeContent = (e: { target: { value: React.SetStateAction<string> } }) => {
        setContent(e.target.value)
    }

    const clear = () => {
        setContent('')
    }



    async function submit (){
        // Default options are marked with *
        setPic('')
        setIsLoading(true)
        const formdata = new FormData()
        formdata.append('name',content)
        const url='http://101.43.180.21:5000/api/time-stamp';
        console.log(formdata,content)

        const response = await fetch(url, {
            method: 'POST', 
            mode: 'no-cors',
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
                setIsLoading(false)
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
                {pic&&<div className='img-box'>
                    <img src={pic} alt=''/>
                </div>}
                {!isLoading&&pic&&content==='李白'&&<embed src='../../../assets/李白.swf' height="600" width="900" type="application/x-shockwave-flash" ></embed>}
                {isLoading&&<Loading/>}
            </div>
            
        </div>
    )
}
