import React, { useState } from 'react'
import search from '../../../assets/search.png'
import './index.less'
import Loading from '../loading'

export default function LearnWord() {

    const [content,setContent] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const [story,setStory] = useState('')
    const changeContent = (e: { target: { value: React.SetStateAction<string> } }) => {
        setContent(e.target.value)
    }

    const clear = () => {
        setContent('')
        setIsLoading(false)
        setStory('')
    }

    async function submit (){
        // Default options are marked with *
        setStory('')
        setIsLoading(true)
        const formdata = new FormData()
        formdata.append('word',content)
        const url='http://101.43.180.21:5000/api/story-generate';
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
                console.log(data.text)
                setIsLoading(false)
                setStory(data.text)
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
                {!isLoading&&<div className='story-box'>
                    {story===''&&<div className='waiting'>故事生成中......</div>}
                    {story!==''&&<div className='story'>{story}</div>}
                </div>}
                {isLoading&&<Loading/>}
            </div>
        </div>
    )
}
