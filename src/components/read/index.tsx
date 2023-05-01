import React, { useState } from 'react'
import './index.less'
export default function Read() {

    const [content1,setContent1] = useState('')
    const [content2,setContent2] = useState('')
    const [content3,setContent3] = useState('')
    const [words,setWords] = useState<string[]>([])
    const [meanings,setMeanings] = useState<string[]>([])
    const [dict,setDict] = useState<any[]>([])
    const [regexs,setRegexs] = useState<string[]>([])
    const read = () => {
            let pre = content1[0]
            let tail = content1.slice(-1)
            let content = content1.slice(1,-1)
            const regex = `(?<=${pre})${content}(?=${tail})`
            setRegexs((regexs) => [...regexs,regex])
            setContent1('')

    }

    const read2= (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.code==='Enter') meanings.push(content2)
        setContent2('')
    }

    const make = () => {
        const newDict = content3.split('\n')
        setDict(content3.split('\n'))
        const dict1 = newDict.map((item: string,index: number) => {
            let temp = item.split('：')
            console.log(temp)
            console.log(`name: ${temp[0]}`)
            console.log(`mean: ${temp[1]}`)
            console.log(`regex: ${regexs[index]}`)
            return{
                name: temp[0],
                mean: temp[1],
                regex: regexs[index]
            }
        })
        setDict(dict1)
        localStorage.setItem('dict1',JSON.stringify(dict1))
        localStorage.setItem('regexs1',JSON.stringify(regexs))
    }

    return (
        <div >
            <input 
                type="text" 
                value={content1} 
                onChange={(e)=>{setContent1(e.target.value)}} 
            />
            <div className='btn-make' onClick={read}>录入</div>
            <textarea
                value={content3} 
                onChange={(e)=>{setContent3(e.target.value)}} 
                cols={30}
                rows={10}
            ></textarea>
            {/* <div onClick={()=>{console.log(content3)}}>{content3}</div> */}
            <div className='btn-make' onClick={make}>make</div>
            <div className='show'>
                {dict.map((item)=>
                    <div className='show-obj'>
                        <div>{'{'}</div>
                        <div className='p'>{`     name: '${item.name}',`}</div>
                        <div className='p'>{`     mean: '${item.mean}',`}</div>
                        <div className='p'>{`     regex: '${item.regex}'`}</div>
                        <div>{'},'}</div>
                    </div>
                )}
            </div>
        </div>
    )
}
