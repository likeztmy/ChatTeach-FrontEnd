import React, { useEffect, useState } from 'react'
import './index.less'
import arrow from '../../../assets/arrow.png'
import Loading from '../loading'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getCode, getExplanation, getGif } from '../../algorithm'


export default function Algorithm_Visualization() {

    
    const [content,setContent] = useState('')
    const [pic,setPic] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [md,setMd] = useState('')
    const [directory,setDirectory] = useState([
        {
            order: '排序',
            content: [
                '冒泡排序','堆排序'
            ],
            open: true
        },
        {
            order: '字符串',
            content: [
                '最小上升子序列','KMP算法'
            ],
            open: true
        },
        {
            order: '树',
            content: [
                '广度优先遍历','深度优先遍历'
            ],
            open: true
        },
        {
            order: '图',
            content: [
                'kruskal最小生成树','Dijkstra最短路径'
            ],
            open: true
        }
    ])

    const [selected,setSelected] = useState({
        parent: '排序',
        child: '冒泡排序'
    })

    const openList = (order: string) => {
        const newDirectory = directory.map((item) => {
            const open = !item.open
            if(order === item.order)
                return {
                    order:order,
                    content: item['content'],
                    open: open
                }
            else return item
        })
        setDirectory(newDirectory)
    }

    
    const chooseAlgorithm = (order: string,algorithm:string) => {
        
        setSelected({
            parent: order,
            child: algorithm
        })
    }

    const changeContent = (e: { target: { value: React.SetStateAction<string> } }) => {
        setContent(e.target.value)
    }

    async function submit(){

        console.log(content)
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setPic(getGif(selected.child))
            setMd(getExplanation(selected.child))
        },3000)
    }

    const clear = () => {
        setContent('')
        setIsLoading(false)
        setPic('')
        setMd('')
    }

    useEffect(() => {
        setContent(getCode(selected.child))
    },[selected])

    return (
        <div className='algorithm-visualization-wrapper'>
            <div className="sider">
                {directory.map((item,index) => 
                    <div className='content-box' key={`${index}`}>
                        <div className={`content-box-header ${selected.parent === item.order?'active':''}`}  onClick={() => {openList(item.order)}}>
                                <div className='content-box-title'>{item.order}</div>
                                <div className={`arrow ${item.open?'arrow-rotate':''}`}>
                                    <img src={arrow} alt="" />
                                </div>
                        </div>
                        <div className={`content-box-list ${item.open?'':'list-close'}`}>
                                {item.content.map((algorithm) => 
                                    <div className={`list-item ${selected.child === algorithm?'list-item-selected':''}`} key={algorithm} onClick={()=>chooseAlgorithm(item.order,algorithm)}>{algorithm}</div>
                                )}
                            </div>
                    </div>
                )}
            </div>
            <div className='content-wrapper'>
                <div className='form'>
                    <textarea className='input-box' value={content}  onChange={changeContent} cols={50} rows={6} placeholder='请输入算法'/>
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
                            <img className='gif' src={pic} alt="" />    
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
