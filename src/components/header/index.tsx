import React, { Key, useState } from 'react'
import './index.less'
import arrow from '../../../assets/arrow.png'
import { useNavigate } from 'react-router-dom'

interface table {
    '首页': object[],
    '语文': object[],
    '数学': object[],
    '英语': object[],
    '信息技术': object[],
}

export default function Header() {

    const navigate = useNavigate()

    const [tabs,setTabs] = useState([
        {
            name: '语文',
            link: '/category/Chinese'
        },
        {
            name: '数学',
            link: '/category/math'
        },
        {
            name: '英语',
            link: '/category/English'
        },
        {
            name: '信息技术',
            link: '/category/Chinese'
        }
    ])

    const [chinese,setChinese] = useState([
        {
            name: '古诗词可视化',
            link: '/category/Chinese/poem-visual'
        },
        {
            name: '作者生平图鉴',
            link: '/category/Chinese/about-author'
        },
        {
            name: '文言文解释',
            link: '/category/Chinese/classical-Chinese'
        },
        {
            name: '情境化问题设计',
            link: '/category/Chinese/write-essay'
        },
    ])

    const [math,setMath] = useState([
        {
            name: '函数图像',
            link: '/category/math/function-image'
        },
        {
            name: '不等式',
            link: '/category/math/inequality'
        },
        {
            name: '积分分析',
            link: '/category/math/integral-analysis'
        },
        {
            name: '微分方程',
            link: '/category/math/differential-equation'
        },
    ])

    const [english,setEnglish] = useState([
        {
            name: '生词学习',
            link: '/category/English/learn-word'
        },
        {
            name: '长难句理解',
            link: '/category/English/sentence-analysis'
        },
        {
            name: '阅读理解',
            link: '/category/English/reading-comprehension'
        },
        {
            name: '概要写作',
            link: '/category/English/summary-writing'
        },
    ])

    const [cs,setCs] = useState([
        {
            name: '算法可视化',
            link: '/category/Chinese/poem-visual'
        },
        {
            name: '长难句理解',
            link: '/category/Chinese/about-author'
        },
        {
            name: '阅读理解',
            link: '/category/Chinese/classical-Chinese'
        },
        {
            name: '概要写作',
            link: '/category/Chinese/summary-writing'
        },
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

    const toHome = () => {
        setTabSelected('首页')
        navigate('/home')
    }

    const chooseTab = (tab:any) => {
        if(tab.name === '语文') setTypeSelected('古诗词可视化')
        else if(tab.name === '数学') setTypeSelected('函数图像')
        else if(tab.name === '英语') setTypeSelected('生词学习')
        else setTypeSelected('算法可视化')
        setTabSelected(tab.name)
        navigate(tab.link)
    }

    const chooseType = (type:any) => {
        setTypeSelected(type.name)
        navigate(type.link)
    }

    return (
        <div className='header-wrapper'>
            <div className='tab-wrapper'>
                <div className='app-msg'>
                    <div className='app-logo'></div>
                    <div className='app-title'>CHAT TEACH</div>
                </div>
                <div className='tabs'>
                    <div className={`tab ${tabSelected === '首页'? 'active':''}`} onClick={toHome}>
                        <div className='home'></div>
                        <div className='tab-name'>首页</div>
                    </div>
                    {
                        tabs.map(tab => 
                            <div className={`tab ${tabSelected === tab.name? 'active':''}`} onClick={() => chooseTab(tab)}>
                                <div className='arrow'>
                                    <img src={arrow} alt="" />
                                </div>
                                <div className='tab-name'>{tab.name}</div>
                            </div>    
                        )
                    }
                </div>
            </div>
            <div className={`types ${tabSelected === '首页'? '':'active'}`}>
                    {
                        table[tabSelected]&&table[tabSelected].map((type:any) => 
                            <div className={`type ${typeSelected === type.name? 'type-active':''}`} onClick={() => chooseType(type)}>{type.name}</div>
                        )
                    }
                </div>
        </div>
    )
}
