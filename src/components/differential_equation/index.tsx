import React, { useRef, useState } from 'react'
import keyboard from '../../../assets/keyboard.png'
import './index.less'
import Loading from '../loading'

export default function DE() {
    const [func,setFunc] = useState('')
    const [pic1,setPic1] = useState('')
    const [pic2,setPic2] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const changeFunc = (e: { target: { value: React.SetStateAction<string> } }) => {
        setFunc(e.target.value)
    }

    const clear = () => {
        setIsLoading(false)
        setFunc('')
        setPic1('')
        setPic2('')
    }

    async function submit (){
        setPic1('')
        setPic2('')
        setIsLoading(true)
        // Default options are marked with *
        const formdata = new FormData()
        formdata.append('expression',func)
        const url1='http://101.43.180.21:5000/api/differential-equation-step';
        const url2='http://101.43.180.21:5000/api/differential-equation-image';
        console.log(formdata,func)

        const response1 = await fetch(url1, {
            method: 'POST', 
            headers: {
                // 'Content-Type': 'application/json;charset=utf-8',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            /*  redirect: 'follow', */ // manual, *follow, error
            body: formdata // body data type must match "Content-Type" header
        });
    
        const response2 = await fetch(url2, {
            method: 'POST', 
            headers: {
                // 'Content-Type': 'application/json;charset=utf-8',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            /*  redirect: 'follow', */ // manual, *follow, error
            body: formdata // body data type must match "Content-Type" header
        });

        const res1 = response1.json()
        res1.then(
            data => {
                setIsLoading(false)
                setPic1('data:image/png;base64,'+data.image)
            }
        )
    
        const res2 = response2.json()
        res2.then(
            data => {
                setPic2('data:image/png;base64,'+data.image)
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
                {pic1&&<div className='img-box'>
                    <img src={pic1} alt=''/>
                </div>}
                {pic2&&<div className='img-box'>
                    <img src={pic2} alt=''/>
                </div>}
                {isLoading&&<Loading/>}
            </div>
        </div>
    )
}
