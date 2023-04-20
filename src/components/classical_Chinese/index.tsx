import React, { useState } from 'react'
import arrow from '../../../assets/arrow.png'
import './index.less'

export default function Classical_Chinese() {

    const [directory,setDirectory] = useState([
        {
            order: '必修一',
            content: [
                '《烛之武退秦师》',
                '《邹忌讽齐王纳谏》',
                '《子路曾皙冉有公西华侍坐》',
                '《寡人之于国也》'
            ],
            open: true
        },
        {
            order: '必修二',
            content: [
                '《过秦论》',
                '《鸿门宴》',
                '《师说》',
                '《阿房宫赋》'
            ],
            open: true
        },
        {
            order: '必修三',
            content: [
                '《六国论》',
                '《游褒禅山记》',
                '《项脊轩志》',
                '《五人墓碑记》'
            ],
            open: true
        },
        {
            order: '必修四',
            content: [
                '《陈情表》',
                '《赤壁赋》',
                '《逍遥游》',
                '《滕王阁序》'
            ],
            open: true
        },
        {
            order: '必修五',
            content: [
                '《齐桓晋文之事》',
                '《庄暴见孟子》',
                '《齐人有一妻一妾》',
                '《奕秋》'
            ],
            open: true
        },
        {
            order: '必修六',
            content: [
                '《报任安书（节选）》',
                '《廉颇蔺相如列传（节选）》',
            ],
            open: true
        }
    ])

    const [selected,setSelected] = useState({
        order: '',
        article:''
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

    const chooseArticle = (order: string,article: string) => {
        setSelected({
            order: order,
            article: article
        })
    }

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
                                    <div className={`list-item ${selected.article === article?'list-item-selected':''}`} key={article} onClick={()=>chooseArticle(item.order,article)}>{article}</div>
                                )}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
