import React, { useState } from 'react'
import camera from '../../../assets/camera.png'
import './index.less'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Loading from '../loading'

export default function ReadingComprehension() {

    const [content,setContent] = useState('')
    const [levels,setLevels] = useState([
        '初中','高中','四级','六级','雅思','GRE'
    ])
    const [selected,setSelected] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [table,setTable] = useState('')
    const changeContent = (e: { target: { value: React.SetStateAction<string> } }) => {
        setContent(e.target.value)
    }

    const clear = () => {
        setContent('')
    }

    const chooseLevel = (level: string) => {
        setSelected(level)
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
            const response = await fetch('http://101.43.180.21:5000/api/ocr-image-identification',{
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
        setTable('')
        setIsLoading(true)
        const formdata = new FormData()
        formdata.append('article',content)
        formdata.append('level',selected)
        const url='http://101.43.180.21:5000/api/article-comprehension';
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
                const title = '|   单词   |   词性   |  含义     |   词频    |   例句   | \n | :------: |:--------:|:--------:|:--------:|:--------:| \n '
                console.log(data)
                setTable(title+data.text)
            }
        )
    }


    return (
        <div className='reading-comprehension-wrapper'>
            <div className='content-wrapper'>
                <div className='form'>
                    <textarea className='input-box' value={content} onChange={changeContent} cols={75} rows={8} placeholder='请输入阅读理解文段或通过图片提取文本'/>
                    <div className='btn'>
                        <label className='btn-camera' htmlFor='camera'>
                            <img src={camera} alt="" />
                        </label>
                        <input type="file" accept='image/*' id='camera' onChange={chooseImage}/>
                        <div className='btn-clear' onClick={clear}>清空</div>
                        <div className='btn-submit' onClick={submit}>确定</div>
                    </div>
                </div>
                <div className="level-wrapper">
                    <div className="level-wrapper-title">选择您的英语水平:</div>
                    <div className='level-box'>
                        {
                            levels.map((level,index)=> 
                                <div 
                                    className={`level-item ${level===selected?'active':''}`}
                                    key={`${index}`}
                                    onClick={()=>chooseLevel(level)}
                                >
                                    {level}
                                </div>
                            )
                        }
                    </div>
                </div>
                {!isLoading&&table===''&&<table className='table'>
                    <thead>
                        <tr>
                            <th>单词</th>
                            <th>词性</th>
                            <th>含义</th>
                            <th>词频</th>
                            <th>例句及其翻译</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>}
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{table}</ReactMarkdown>
                {isLoading&&<Loading/>}
            </div>
        </div>
    )
}
