import React, { useRef, useState } from 'react'
import './index.less'

export default function Write_Essay() {

    const [content,setContent] = useState('')
    const [explanation,setExplanation] = useState('')

    const changeContent = (e: { target: { value: React.SetStateAction<string> } }) => {
        setContent(e.target.value)
    }

    const clear = () => {
        setContent('')
    }
    async function submit (){
        // Default options are marked with *
        const formdata = new FormData()
        formdata.append('theme',content)
        const url='http://127.0.0.1:5000/api/scene-generate';
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
                setExplanation(data.text)
            }
        )
    }

    return (
        <div className='write-essay-wrapper'>
            <div className='content-wrapper'>
                <div className="box">
                    <div className='form'>
                        <input type='text' className='input-box' onChange={changeContent} placeholder='请输入关键词'/>
                        <div className='btn'>
                            <div className='btn-clear' onClick={clear}>清空</div>
                            <div className='btn-submit' onClick={submit}>确定</div>
                        </div>
                    </div>
                    <div className='explanation'>
                        <div className='explanation-title'>释意：</div>
                        <div className='explanation-content'>{explanation}</div>
                    </div>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>写作对象</th>
                            <th>写作目的</th>
                            <th>文本类型</th>
                            <th>参考角度</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>任务一</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>任务二</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>任务三</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
