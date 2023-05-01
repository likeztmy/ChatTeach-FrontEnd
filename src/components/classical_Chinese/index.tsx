import React, { useEffect, useRef, useState } from 'react'
import arrow from '../../../assets/arrow.png'
import './index.less'
import { createPortal } from 'react-dom'
import Translation from '../translation_box'
import { message } from 'antd'
import Read from '../read'
import { getWords, words } from '../../dictionary'


export default function ClassicalChinese() {

    const contentRef = useRef(null)
    const myRef = useRef(null)
    const [parent,setParent] = useState<Element | null>(null)
    const [id,setId] = useState('')
    const [dic,setDic] = useState<any[]>([])
    const [directory,setDirectory] = useState([
        {
            order: '必修一',
            content: [
                {
                    name: '《烛之武退秦师》',
                    order:'1-1'
                },
                {
                    name: '《邹忌讽齐王纳谏》',
                    order:'1-2'
                },
                {
                    name:'《子路曾皙冉有公西华侍坐》',
                    order:'1-3'
                },
                {
                    name:'《寡人之于国也》',
                    order:'1-4'
                },
            ],
            open: true
        },
        {
            order: '必修二',
            content: [
                {
                    name:'《过秦论》',
                    order:'2-1'
                },
                {
                    name:'《鸿门宴》',
                    order:'2-2'
                },
                {
                    name:'《师说》',
                    order:'2-3'
                },
                {
                    name:'《阿房宫赋》',
                    order:'2-4'
                },
                
            ],
            open: true
        },
        {
            order: '必修三',
            content: [
                {
                    name:'《六国论》',
                    order:'3-1'
                },
                {
                    name:'《游褒禅山记》',
                    order:'3-2'
                },
                {
                    name:'《项脊轩志》',
                    order:'3-3'
                },
                {
                    name:'《五人墓碑记》',
                    order:'3-4'
                },
            ],
            open: true
        },
        {
            order: '必修四',
            content: [
                {
                    name:'《陈情表》',
                    order:'4-1'
                },
                {
                    name:'《赤壁赋》',
                    order:'4-2'
                },
                {
                    name:'《逍遥游》',
                    order:'4-3'
                },
                {
                    name:'《滕王阁序》',
                    order:'4-4'
                },
            ],
            open: true
        },
        {
            order: '必修五',
            content: [
                {
                    name:'《齐桓晋文之事》',
                    order:'5-1'
                },
                {
                    name:'《庄暴见孟子》',
                    order:'5-2'
                },
                {
                    name:'《齐人有一妻一妾》',
                    order:'5-3'
                },
                {
                    name:'《奕秋》',
                    order:'5-4'
                },
            ],
            open: true
        },
    ])

    const [selected,setSelected] = useState({
        order: '必修一',
        article: {
            name: '《烛之武退秦师》',
            order: '1-1'
        }
    })
    const [table,setTable] = useState()

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


    const chooseArticle = (order: string,article: {name:string,order:string}) => {
        
        setSelected({
            order: order,
            article: article
        })
    }

    const move = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.stopPropagation()
        console.log(e.currentTarget.id)
        setParent(e.currentTarget)
        console.log(e.target)
    }

    const leave = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        // console.log(e.currentTarget.textContent,e.clientX,e.clientY)
        // e.currentTarget.removeChild(myRef.current)
        setParent(null)
    }

    const load = (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
        // words(e.currentTarget)
    }

    useEffect(() => {
        // words(contentRef.current)
        const arr = document.querySelectorAll("span.high-light")
        console.log(arr)
        arr.forEach((node)=>{
            node.addEventListener('mousemove',()=>{
                setId(node.id)
                setParent(node)
            })
            node.addEventListener('mouseleave',()=>{
                setParent(null)
            })
        })
        const newDict = getWords(selected.article.order).map((item:any)=>{
            console.log(item.mean)
            return item.mean
        })
        setDic(newDict)
        console.log(newDict)
    },[selected])

    return (
        <div className='classical-Chinese-wrapper'>
            <div className='sider'>
                {
                    directory.map((item,index) => 
                        <div className='content-box' key={`${index}`}>
                            <div className={`content-box-header ${selected.order === item.order?'active':''}`}  onClick={() => {openList(item.order)}}>
                                <div className='content-box-title'>{item.order}</div>
                                <div className={`arrow ${item.open?'arrow-rotate':''}`}>
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                            <div className={`content-box-list ${item.open?'':'list-close'}`}>
                                {item.content.map((article) => 
                                    <div className={`list-item ${selected.article['name'] === article['name']?'list-item-selected':''}`} key={article['name']} onClick={()=>chooseArticle(item.order,article)}>{article['name']}</div>
                                )}
                            </div>
                        </div>
                    )
                }
            </div>
            <div id='content' ref={contentRef} dangerouslySetInnerHTML={{__html:words(selected.article.order)}} className='content-wrapper'>
            </div>
            {/* <Read/> */}
            <div className='translation-box' ref={myRef}>123456</div>
            {parent&&<Translation message={dic[parseInt(id)]} parent={parent}/>}
        </div>
    )
}
