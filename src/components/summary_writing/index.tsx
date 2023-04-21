import React, { useState } from 'react'
import camera from '../../../assets/camera.png'
import smile from '../../../assets/smile.png'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './index.less'

export default function Summary_Writing() {
    const [content,setContent] = useState('')
    const [table,setTable] = useState('')

    const changeContent = (e: { target: { value: React.SetStateAction<string> } }) => {
        setContent(e.target.value)
    }

    const clear = () => {
        setContent('')
    }

    async function chooseImage (e: React.ChangeEvent<HTMLInputElement>){
        const files = e.target.files
        if(!files) return
        const file = files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = async function(e){
            const image_data = reader.result
            console.log(image_data)
            const data = {
                    'image_data': image_data
                }
            const response = await fetch('http://127.0.0.1:5000/api/ocr-image-identification',{
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                /*  redirect: 'follow', */ // manual, *follow, error
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            })
            const res = response.json()
            res.then(
                data => {
                    console.log(data)
                    setContent(data.text)
                    // setTable(data.text)
                }
            )
        }
    }

    async function submit (){
        // Default options are marked with *
        const formdata = new FormData()
        formdata.append('article',content)
        const url='http://127.0.0.1:5000/api/summary-writing';
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
                setTable(data.text)
            }
        )
    }


    return (
        <div className='reading-comprehension-wrapper'>
            <div className='content-wrapper'>
                <div className='form'>
                    <textarea className='input-box' value={content} onChange={changeContent} cols={75} rows={8} placeholder='请输入概要写作文本或通过图片提取文本'/>
                    <div className='btn'>
                        <label className='btn-camera' htmlFor='camera'>
                            <img src={camera} alt="" />
                        </label>
                        <input type="file" accept='image/*' id='camera' onChange={chooseImage}/>
                        <div className='btn-clear' onClick={clear}>清空</div>
                        <div className='btn-submit' onClick={submit}>确定</div>
                    </div>
                </div>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{table}</ReactMarkdown>
                {table===''&&<div className='keywords-box'>
                    <div className='box-header'>
                        <div className='box-header-smile'>
                            <img src={smile} alt="" />
                        </div>
                        <div className='box-header-title'>关键句提取: </div>
                    </div>
                    <div className="box-content"></div>
                </div>}
                {table===''&&<div className='summary-box'>
                    <div className='box-header'>
                        <div className='box-header-smile'>
                            <img src={smile} alt="" />
                        </div>
                        <div className='box-header-title'>概要写作: </div>
                    </div>
                    <div className="box-content">
                        概要生成中......
                    </div>
                </div>}
            </div>
        </div>
    )
}
