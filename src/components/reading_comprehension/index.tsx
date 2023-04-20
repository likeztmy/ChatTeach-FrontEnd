import React, { useState } from 'react'
import camera from '../../../assets/camera.png'
import './index.less'

export default function Reading_Comprehension() {

    const [content,setContent] = useState('')
    const [levels,setLevels] = useState([
        '初中','高中','四级','六级','雅思','GRE'
    ])
    const [selected,setSelected] = useState('')

    const changeContent = (e: { target: { value: React.SetStateAction<string> } }) => {
        setContent(e.target.value)
    }

    const clear = () => {
        setContent('')
    }

    const chooseLevel = (level: string) => {
        setSelected(level)
    }

    const chooseImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if(!files) return
        const file = files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function(e){
            console.log(reader.result)
        }
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
                <table className='table'>
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
                </table>
            </div>
        </div>
    )
}
