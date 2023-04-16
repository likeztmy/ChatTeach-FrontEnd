import React, { Key, useState } from 'react'
import './index.less'
import arrow from '../../assets/arrow.png'

interface table {
    '首页': string[],
    '语文': string[],
    '数学': string[],
    '英语': string[],
    '信息技术': string[],
}

export default function Header() {

    const [tabs,setTabs] = useState([
        '语文','数学','英语','信息技术'
    ])

    const [chinese,setChinese] = useState([
        '古诗词可视化','作者生平图鉴','文言文解释','情境化问题设计'
    ])

    const [math,setMath] = useState([
        '函数图像','不等式','积分分析','微分方程'
    ])

    const [english,setEnglish] = useState([
        '生词学习','长难句理解','阅读理解','概要写作'
    ])

    const [cs,setCs] = useState([
        '古诗词可视化','作者生平图鉴','文言文解释','情境化问题设计'
    ])

    const [tabSelected,setTabSelected] = useState<'首页'|'语文'|'数学'|'英语'|'信息技术'>('首页')
    const [typeSelected,setTypeSelected] = useState('古诗词可视化')

    const [table,setTable] = useState<table>({
        '首页': [],
        '语文': chinese,
        '数学': math,
        '英语': english,
        '信息技术': cs,
    })

    const chooseTab = (tab:any) => {
        setTabSelected(tab)
    }

    const chooseType = (type:any) => {
        setTypeSelected(type)
    }

    return (
        <div className='header-wrapper'>
            <div className='tab-wrapper'>
                <div className='app-msg'>
                    <div className='app-logo'></div>
                    <div className='app-title'>CHAT TEACH</div>
                </div>
                <div className='tabs'>
                    <div className={`tab ${tabSelected === '首页'? 'active':''}`} onClick={() => chooseTab('首页')}>
                        <div className='home'></div>
                        <div className='tab-name'>首页</div>
                    </div>
                    {
                        tabs.map(tab => 
                            <div className={`tab ${tabSelected === tab? 'active':''}`} onClick={() => chooseTab(tab)}>
                                <div className='arrow'>
                                    <img src={arrow} alt="" />
                                </div>
                                <div className='tab-name'>{tab}</div>
                            </div>    
                        )
                    }
                </div>
            </div>
            <div className={`types ${tabSelected === '首页'? '':'active'}`}>
                    {
                        table[tabSelected].map((type:string) => 
                            <div className={`type ${typeSelected === type? 'type-active':''}`} onClick={() => chooseType(type)}>{type}</div>
                        )
                    }
                </div>
        </div>
    )
}
