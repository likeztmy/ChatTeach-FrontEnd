import React, { useState } from 'react'
import smile from '../../../assets/smile.png'
import './index.less'
import 'github-markdown-css'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Loading from '../loading'

export default function SentenceAnalysis() {
    const [content,setContent] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [table,setTable] = useState('')

    const changeContent = (e: { target: { value: React.SetStateAction<string> } }) => {
        setContent(e.target.value)
    }

    const clear = () => {
        setContent('')
    }

    async function submit (){
        setTable('')
        setIsLoading(true)
        // Default options are marked with *
        const formdata = new FormData()
        formdata.append('sentence',content)
        const url='http://101.43.180.21:5000/api/sentence-analysis';
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
                setTable(data.text)
            }
        )
    }


    return (
        <div className='sentence-analysis-wrapper'>
            <div className='content-wrapper'>
                <div className='form'>
                    <textarea className='input-box' onChange={changeContent} cols={75} rows={4} placeholder='请输入长难句'/>
                    <div className='btn'>
                        <div className='btn-clear' onClick={clear}>清空</div>
                        <div className='btn-submit' onClick={submit}>确定</div>
                    </div>
                </div>
                {!isLoading&&table===''&&<table className='table'>
                    <thead>
                        <tr>
                            <th>句子成分</th>
                            <th className='table-content'>句子内容</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>主语</td>
                            <td className='table-content'></td>
                        </tr>
                        <tr>
                            <td>谓语</td>
                            <td className='table-content'></td>
                        </tr>
                        <tr>
                            <td>宾语</td>
                            <td className='table-content'></td>
                        </tr>
                        <tr>
                            <td>定语</td>
                            <td className='table-content'></td>
                        </tr>
                        <tr>
                            <td>状语</td>
                            <td className='table-content'></td>
                        </tr>
                        <tr>
                            <td>补语</td>
                            <td className='table-content'></td>
                        </tr>
                    </tbody>
                </table>}
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{table}</ReactMarkdown>
                {!isLoading&&table===''&&<div className='analysis-box'>
                    <div className='box-header'>
                        <div className='box-header-smile'>
                            <img src={smile} alt="" />
                        </div>
                        <div className='box-header-title'>整体分析: </div>
                    </div>
                    <div className="box-content"></div>
                </div>}
                {isLoading&&<Loading/>}
            </div>
        </div>
    )
}
