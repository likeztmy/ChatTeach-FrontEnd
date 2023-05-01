import React, { useState } from 'react'
import './index.less'
import Loading from '../loading'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Code_Completion() {

    
    const [content,setContent] = useState('')
    const [pic,setPic] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [md,setMd] = useState('')

    const changeContent = (e: { target: { value: React.SetStateAction<string> } }) => {
        setContent(e.target.value)
    }

    async function submit(){
        // Default options are marked with *
        setIsLoading(true)
        setPic('')
        const formdata = new FormData()
        formdata.append('code',content)
        const url='http://101.43.180.21:5000/api/code-refactor';
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
                console.log(data)
                setIsLoading(false)
            }
        )
    }

    const clear = () => {
        setContent('')
        setIsLoading(false)
    }
    
    return (
        <div className='code-completion-wrapper'>
            <div className='content-wrapper'>
                <div className='form'>
                    <textarea className='input-box' onChange={changeContent} cols={50} rows={6} placeholder='请输入原始代码'/>
                    <div className='btn'>
                        <div className='btn-clear' onClick={clear}>清空</div>
                        <div className='btn-submit' onClick={submit}>确定</div>
                    </div>  
                </div>
                <div className='result-wrapper'>
                    <div className='code-box'>
                        {isLoading&&<Loading/>}
                        {!isLoading&&md===''&&<div className='code-box-title'>补全及解释</div>}
                        {!isLoading&&md!==''&&<ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>}
                    </div>
                </div>
            </div>  
        </div>
    )
}
