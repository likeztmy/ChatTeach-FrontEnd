import React, { useState } from 'react'
import './index.less'
import keyboard from '../../../assets/keyboard.png'
import add from '../../../assets/add.png'
import delete_icon from '../../../assets/delete.png'
import { nanoid } from 'nanoid'

interface formula{
    id: string,
    content: string
}

export default function Inequality() {


    const [pic,setPic] = useState('')
    const [formulas,setFormulas] = useState<formula[]>([
        {
            id:nanoid(),
            content: ''
        }
    ])

    const addFormula = () => {
        let newFormula = {
            id: nanoid(),
            content: ''
        }
        setFormulas((formulas) => [...formulas,newFormula])
    }

    const changeFormula = (e: React.ChangeEvent<HTMLInputElement>,id: string) => {
        const newFormulas = formulas.map(formula => {
            if(id === formula.id) 
                return {
                    id: id,
                    content: e.target.value
                }
            else return formula
        })
        setFormulas(newFormulas)
    }

    const reset = (id: string) => {
        const newFormulas = formulas.map(formula => {
            if(id === formula.id) 
                return {
                    id: id,
                    content: ''
                }
            else return formula
        })
        setFormulas(newFormulas)
    }

    const deleteFormula = (id: string) => {
        const newFormula = formulas.filter((formula) => {
            return id !== formula.id
        })
        setFormulas(newFormula)
    }

    async function submit() {
        const formdata = new FormData()
        formdata.append('number',`${formulas.length}`)
        for(let i = 0; i < formulas.length; i++){
            formdata.append(`lst${i}`,formulas[i].content)
        }
        const url='http://127.0.0.1:5000/api/inequality-plot';

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
                setPic('data:image/png;base64,'+data.image)
            }
        )
    }


    return (
        <div className='inequality-wrapper'>
            <div className="box">
                {
                    formulas.map((formula,index) => 
                    <div className='inequality-form' key={formula.id}>
                        <input type="text"  
                            value={formula.content} 
                            onChange={(e)=>changeFormula(e,formula.id)}
                            className="input-box"  
                            placeholder='请输入不等式'
                        />
                        <div className="keyboard">
                            <img src={keyboard} alt="键盘" />
                        </div>
                        {index===0 &&<div className="add" onClick={addFormula}>
                            <img src={add} alt="" />
                        </div>}
                        {index>0 &&<div className="delete" onClick={() => deleteFormula(formula.id)}>
                            <img src={delete_icon} alt="" />
                        </div>}
                        <div className='btn'>
                            <div className='btn-clear' onClick={() => reset(formula.id)}>重置</div>
                            <div className='btn-submit' onClick={submit} >确定</div>
                        </div>
                    </div>
                    )
                }
            </div>
            <div className='img-box'>
                    <img src={pic} alt=''/>
            </div>
        </div>
    )
}
