import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Loading from '../loading'
import remarkGfm from 'remark-gfm'
import './index.less'
import { Radio, RadioChangeEvent } from 'antd'

export default function Code_Convert() {
    
    const [content,setContent] = useState('')
    const [pic,setPic] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [md,setMd] = useState('')
    const [types,setTypes] = useState([
        'C','C++','Java','Python'
    ])
    const [type,setType] = useState('C')


    const changeContent = (e: { target: { value: React.SetStateAction<string> } }) => {
        setContent(e.target.value)
    }

    const changeType = (e:RadioChangeEvent) => {
        setType(e.target.value)
    }

    async function submit(){
        // Default options are marked with *
        setIsLoading(true)
        setPic('')
        const formdata = new FormData()
        formdata.append('code',content)
        formdata.append('target',type)
        const url='http://101.43.180.21:5000/api/code-translation';

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
                setMd(data.text)
            }
        )
    }

    const clear = () => {
        setContent('')
        setIsLoading(false)
        setPic('')
        setMd('')
    }
    
    return (
        <div className='code-convert-wrapper'>
            <div className='content-wrapper'>
                <div className='form'>
                    <textarea className='input-box' value={content}  onChange={changeContent} cols={50} rows={6} placeholder='请输入原始代码'/>
                    <div className='code-type-box'>
                        <div className='code-type-title'>转换类型：</div>
                        <Radio.Group onChange={changeType} value={type}>
                            {
                                types.map((item,index) => 
                                    <Radio className='radio' value={item} key={`${index}`}>{item}</Radio>
                                )
                            }
                        </Radio.Group>
                    </div>
                    <div className='btn'>
                        <div className='btn-clear' onClick={clear}>清空</div>
                        <div className='btn-submit' onClick={submit}>确定</div>
                    </div>  
                </div>
                <div className='result-wrapper'>
                    <div className='code-box'>
                        {isLoading&&<Loading/>}
                        {!isLoading&&md===''&&<div className='code-box-title'>转换代码</div>}
                        {!isLoading&&md!==''&&<ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>}
                    </div>
                </div>
            </div>  
        </div>
    )
}
