import React, { useState } from 'react'
import './index.less'
import Loading from '../loading'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


export default function Algorithm_Visualization() {

    
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
        // setPic('')
        // const formdata = new FormData()
        // formdata.append('text',content)
        // const url='http://101.43.180.21:5000/api/poem-visual';
        // console.log(formdata,content)

        // const response = await fetch(url, {
        //     method: 'POST', 
        //     mode: 'no-cors',
        //     headers: {
        //         // 'Content-Type': 'application/json;charset=utf-8',
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     /*  redirect: 'follow', */ // manual, *follow, error
        //     body: formdata // body data type must match "Content-Type" header
        // });
    
        // const res = response.json()
        // res.then(
        //     data => {
        //         console.log(data)
        //         setIsLoading(false)
        //         setPic('data:image/png;base64,'+data.image)
        //     }
        // )
    }

    const clear = () => {
        setContent('')
        setIsLoading(false)
    }
    
    return (
        <div className='algorithm-visualization-wrapper'>
            <div className='content-wrapper'>
                <div className='form'>
                    <textarea className='input-box' onChange={changeContent} cols={50} rows={6} placeholder='请输入算法'/>
                    <div className='btn'>
                        <div className='btn-clear' onClick={clear}>清空</div>
                        <div className='btn-submit' onClick={submit}>确定</div>
                    </div>
                </div>
                <div className='result-wrapper'>
                    <div className='visualization-box'>
                        {isLoading&&<Loading/>}
                        {!isLoading&&pic===''&&<div className='visualization-box-title'>可视化演示</div>}
                        {!isLoading&&pic!==''&&<div className='visualization-box-gif'>
                            <img src={pic} alt="" />    
                        </div>}
                    </div>
                    <div className='algorythm-explanation'>
                        {isLoading&&<Loading/>}
                        {!isLoading&&md===''&&<div className='algorythm-explanation-title'>算法解释</div>}
                        {!isLoading&&md!==''&&<ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>}
                    </div>
                </div>
            </div>
        </div>
    )
}
