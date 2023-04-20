import React, { useRef, useState } from 'react'
import keyboard from '../../../assets/keyboard.png'
import './index.less'

export default function DE() {
    const [func,setFunc] = useState('')
    const [pic,setPic] = useState('')

    const changeFunc = (e: { target: { value: React.SetStateAction<string> } }) => {
        setFunc(e.target.value)
    }

    const clear = () => {
        setFunc('')
    }

    async function submit (){
        // Default options are marked with *
        const formdata = new FormData()
        formdata.append('text',func)
        const url='http://127.0.0.1:5000/api/poem-visual';
        console.log(formdata,func)

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
                alert(data.image)
                setPic('data:image/png;base64,'+data.image)
            }
        )
    }

    return (
        <div className='de-wrapper'>
            <div className='content-wrapper'>
                <div className='form'>
                    <div className='input-wrapper'>
                        <input type='text' className='input-box' value={func} onChange={changeFunc} placeholder='请输入微分方程'/>
                        <div className='keyboard'>
                            <img src={keyboard} alt="" />
                        </div>
                    </div>
                    <div className='btn'>
                        <div className='btn-clear' onClick={clear}>清空</div>
                        <div className='btn-submit' onClick={submit}>确定</div>
                    </div>
                </div>
                <div className='img-box'>
                    <img src={pic} alt=''/>
                </div>
            </div>
        </div>
    )
}
