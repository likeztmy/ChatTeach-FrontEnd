import React, { useState } from 'react'
import './index.less'
import keyboard from '../../../assets/keyboard.png'
import add from '../../../assets/add.png'
import delete_icon from '../../../assets/delete.png'
import { nanoid } from 'nanoid'
import { Radio, RadioChangeEvent } from 'antd'
import { compute_definite_integral, compute_grad, compute_indefinite_integral, compute_lim, derivative, generate_definite_integral_image, generate_derivative_image, generate_indefinite_integral_image, generate_lim_image } from '../../server/fetch'
import Loading from '../loading'

interface variable {
    name: string,
    left: string,
    right: string
}

export default function IntegralAnalysis() {

    const [func,setFunc] = useState('')
    const [types,setTypes] = useState([
        '定积分','不定积分','导数','梯度','极限'
    ])
    const [type,setType] = useState('定积分')
    const [variable,setVariable] = useState<variable>(
        {
            name:'',
            left:'',
            right:''
        }
    )

    const [pic1,setPic1] = useState('')
    const [pic2,setPic2] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFunc(e.target.value)
    }

    const clear = () => {
        setFunc('')
        setPic1('')
        setPic2('')
        setIsLoading(false)
    }

    const changeType = (e:RadioChangeEvent) => {
        setType(e.target.value)
    }

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVariable = {
                name: e.target.value,
                left: variable.left,
                right: variable.right
            }
        setVariable(newVariable)
    }

    const changeLeft = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVariable = {
            name: variable.name,
            left:  e.target.value,
            right: variable.right
        }
        setVariable(newVariable)
    }

    const changeRight = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVariable = {
            name: variable.name,
            left:  variable.left,
            right: e.target.value
        }
        setVariable(newVariable)
    }

    // const addVariable = () => {
    //     const newVariable = {
    //         id: nanoid(),
    //         name:'',
    //         left:'',
    //         right:''
    //     }
    //     setVariables((variables) => [...variables,newVariable])
    // }

    // const deleteVariable = (id: string) => {
    //     const newVariables = variables.filter((variable) => {
    //         return id !== variable.id
    //     })
    //     setVariables(newVariables)
    // }

    const reset = () => {
        const newVariable = {
            name: '',
            left:  '',
            right: ''
        }
        setVariable(newVariable)
    }

    function submit (){
        setPic1('')
        setPic2('')
        setIsLoading(true)
        if(type === '定积分'){
            compute_definite_integral(func,variable.name,`${variable.left}`,`${variable.right}`).then(
                data => {
                    setIsLoading(false)
                    setPic1('data:image/png;base64,'+data.image)
                }
            )
            generate_definite_integral_image(func,variable.name,`${variable.left}`,`${variable.right}`).then(
                data => {
                    setIsLoading(false)
                    setPic2('data:image/png;base64,'+data.image)
                }
            )
        }else if(type === '不定积分'){
            compute_indefinite_integral(func,variable.name).then(
                data => {
                    setIsLoading(false)
                    setPic1('data:image/png;base64,'+data.image)
                }
            )
            generate_indefinite_integral_image(func,variable.name).then(
                data => {
                    setIsLoading(false)
                    setPic2('data:image/png;base64,'+data.image)
                }
            )
        }else if(type ==='导数'){
            derivative(func).then(
                data => {
                    setIsLoading(false)
                    setPic1('data:image/png;base64,'+data.image)
                }
            )
            generate_derivative_image(func).then(
                data => {
                    setIsLoading(false)
                    setPic2('data:image/png;base64,'+data.image)
                }
            )
        }else if(type === '极限'){
            compute_lim(func,variable.name,variable.left).then(
                data => {
                    setIsLoading(false)
                    setPic1('data:image/png;base64,'+data.image)
                }
            )
            generate_lim_image(func,variable.name,variable.left).then(
                data => {
                    setIsLoading(false)
                    setPic2('data:image/png;base64,'+data.image)
                }
            )
        }else {
            compute_grad(func).then(
                data => {
                    setIsLoading(false)
                    setPic1('data:image/png;base64,'+data.image)
                }
            )
        }
    }

    return (
        <div className='function-img-wrapper'>
            <div className="content-wrapper">
                <div className="box">
                    <div className='function-form'>
                        <input type="text" value={func} onChange={changeFunc} className="input-box"  placeholder='请输入积分方程'/>
                        <img src={keyboard} alt="键盘" />
                        <div className='btn'>
                            <div className='btn-clear' onClick={clear}>清空</div>
                            <div className='btn-submit' onClick={submit}>确定</div>
                        </div>
                    </div>
                    <Radio.Group onChange={changeType} value={type}>
                        {
                            types.map((item,index) => 
                                <Radio className='radio' value={item} key={`${index}`}>{item}</Radio>
                            )
                        }
                    </Radio.Group>
                    <div className="variable-form">
                        <div className="input-box-wrapper">
                            <input 
                                type="text" 
                                value={variable.name} 
                                onChange={(e) => changeName(e)} 
                                className='input-box' 
                                placeholder='变量'
                            />
                            {(type==='定积分'||type==='极限')&&<input 
                                type="text" 
                                value={variable.left} 
                                onChange={(e) => changeLeft(e)} 
                                className='input-box' 
                                placeholder={type==='定积分'?'左边界':'趋势'}
                            />}
                            {type==='定积分'&&<input 
                                type="text" 
                                value={variable.right} 
                                onChange={(e) => changeRight(e)} 
                                className='input-box' 
                                placeholder='右边界'
                            />}
                        </div>
                        <div className='btn'>
                            <div className='btn-clear' onClick={reset}>重置</div>
                        </div>
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
