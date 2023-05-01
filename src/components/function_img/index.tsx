import React, { useRef, useState } from 'react'
import './index.less'
import keyboard from '../../../assets/keyboard.png'
import add from '../../../assets/add.png'
import delete_icon from '../../../assets/delete.png'
import { nanoid } from 'nanoid'
import { Radio, RadioChangeEvent } from 'antd'
import Loading from '../loading'

interface variable {
    id: string,
    name: string,
    left: string,
    right: string
}

export default function FunctionImg() {

    const [func,setFunc] = useState('')
    const [pic,setPic] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const [variables,setVariables] = useState<variable[]>([
        {
            id: nanoid(),
            name:'',
            left:'',
            right:''
        }
    ])

    const changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFunc(e.target.value)
    }

    
    const clear = () => {
        setFunc('')
    }


    const changeName = (e: React.ChangeEvent<HTMLInputElement>,id: string) => {
        const newVariables = variables.map((variable) => {
            if(id === variable.id) 
                return {
                    id: id,
                    name: e.target.value,
                    left: variable.left,
                    right: variable.right
                }
            else return variable
        })
        setVariables(newVariables)
    }

    const changeLeft = (e: React.ChangeEvent<HTMLInputElement>,id: string) => {
        const newVariables = variables.map((variable) => {
            if(id === variable.id) 
                return {
                    id: id,
                    name: variable.name,
                    left: e.target.value,
                    right: variable.right
                }
            else return variable
        })
        setVariables(newVariables)
    }

    const changeRight = (e: React.ChangeEvent<HTMLInputElement>,id: string) => {
        const newVariables = variables.map((variable) => {
            if(id === variable.id) 
                return {
                    id: id,
                    name: variable.name,
                    left: variable.left,
                    right: e.target.value
                }
            else return variable
        })
        setVariables(newVariables)
    }

    const addVariable = () => {
        const newVariable = {
            id: nanoid(),
            name:'',
            left:'',
            right:''
        }
        setVariables((variables) => [...variables,newVariable])
    }

    const deleteVariable = (id: string) => {
        const newVariables = variables.filter((variable) => {
            return id !== variable.id
        })
        setVariables(newVariables)
    }

    const reset = (id: string) => {
        const newVariables = variables.map((variable) => {
            if(id === variable.id) 
                return {
                    id: id,
                    name: '',
                    left: '',
                    right: ''
                }
            else return variable
        })
        setVariables(newVariables)
    }

    async function submit (){
        // Default options are marked with *
        setPic('')
        setIsLoading(true)
        const formdata = new FormData()
        formdata.append('function',func)
        formdata.append('option',`${variables.length}`)
        for(let i = 0; i < variables.length; i++){
            formdata.append(`var${i+1}`,variables[i].name)
            formdata.append(`variable_range_left${i+1}`,variables[i].left)
            formdata.append(`variable_range_right${i+1}`,variables[i].right)
        }
        const url='http://101.43.180.21:5000/api/function-plot';
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
                console.log(data)
                setIsLoading(false)
                setPic('data:image/png;base64,'+data.image)
            }
        )
    }

    return (
        <div className='function-img-wrapper'>
            <div className="content-wrapper">
                <div className="box">
                    <div className='function-form'>
                        <input type="text" value={func} onChange={changeFunc} className="input-box"  placeholder='请输入函数'/>
                        <img src={keyboard} alt="键盘" />
                        <div className='btn'>
                            <div className='btn-clear' onClick={clear}>清空</div>
                            <div className='btn-submit' onClick={submit}>确定</div>
                        </div>
                    </div>
                    {
                        variables.map((variable,index)=> 
                        <div className="variable-form" key={variable.id}>
                            <div className="input-box-wrapper">
                                <input 
                                    type="text" 
                                    value={variable.name} 
                                    onChange={(e) => changeName(e,variable.id)} 
                                    className='input-box' 
                                    placeholder='变量'
                                />
                                <input 
                                    type="text" 
                                    value={variable.left} 
                                    onChange={(e) => changeLeft(e,variable.id)} 
                                    className='input-box' 
                                    placeholder='左边界'
                                />
                                <input 
                                    type="text" 
                                    value={variable.right} 
                                    onChange={(e) => changeRight(e,variable.id)} 
                                    className='input-box' 
                                    placeholder='右边界'
                                />
                            </div>
                            {index === 0 &&<div className='add' onClick={addVariable}>
                                <img src={add} alt="" />
                            </div>}
                            {index>0 &&<div className="delete" onClick={() => deleteVariable(variable.id)}>
                            <img src={delete_icon} alt="" />
                            </div>}
                            <div className='btn'>
                                <div className='btn-clear' onClick={()=>reset(variable.id)}>重置</div>
                            </div>
                        </div>
                        )
                    }
                </div>
                {pic&&<div className='img-box'>
                    <img src={pic} alt=''/>
                </div>}
                {isLoading&&<Loading/>}
            </div>
        </div>
    )
}
