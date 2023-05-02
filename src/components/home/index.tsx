import React from 'react'
import Header from '../header'
import border from '../../../assets/border-line.png'
import cn_icon from '../../../assets/Chinese.png'
import math_icon from '../../../assets/math.png'
import en_icon from '../../../assets/English.png'
import cs_icon from '../../../assets/cs.png'
import './index.less'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()

    return (
        <div className='home-wrapper'>
            <Header/>
            <div className='content-wrapper'>
                <div className="title-wrapper">
                    <div className='title-wrapper-top'>
                        <div className='top-img-left'>
                            <svg className="banner-shape-1" width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.965848 20.6397L0.943848 38.3906L18.6947 38.4126L18.7167 20.6617L0.965848 20.6397Z" stroke="#040306"
                                stroke-miterlimit="10" />
                                <path className="path" d="M10.4966 11.1283L10.4746 28.8792L28.2255 28.9012L28.2475 11.1503L10.4966 11.1283Z" />
                                <path d="M20.0078 1.62949L19.9858 19.3804L37.7367 19.4024L37.7587 1.65149L20.0078 1.62949Z" stroke="#040306"
                            stroke-miterlimit="10" />
                        </svg>
                        </div>
                        <div className="top-img-right">
                            <svg className="banner-shape-2" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d)">
                                <path className="path"
                                    d="M24.1587 21.5623C30.02 21.3764 34.6209 16.4742 34.435 10.6128C34.2491 4.75147 29.3468 0.1506 23.4855 0.336498C17.6241 0.522396 13.0233 5.42466 13.2092 11.286C13.3951 17.1474 18.2973 21.7482 24.1587 21.5623Z" />
                                <path
                                    d="M5.64626 20.0297C11.1568 19.9267 15.7407 24.2062 16.0362 29.6855L24.631 29.4616L24.1476 10.8081L5.41797 11.296L5.64626 20.0297Z"
                                    stroke="#040306" stroke-miterlimit="10" />
                                </g>
                                <defs>
                                <filter id="filter0_d" x="0.905273" y="0" width="37.8663" height="38.1979" filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className='title-wrapper-content'>
                        Make Education Easier 
                    </div>
                    <div className='bottom-img-right'>
                        <svg className="banner-shape-3" width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.965848 20.6397L0.943848 38.3906L18.6947 38.4126L18.7167 20.6617L0.965848 20.6397Z" stroke="#040306"
                            stroke-miterlimit="10" />
                            <path className="path" d="M10.4966 11.1283L10.4746 28.8792L28.2255 28.9012L28.2475 11.1503L10.4966 11.1283Z" />
                            <path d="M20.0078 1.62949L19.9858 19.3804L37.7367 19.4024L37.7587 1.65149L20.0078 1.62949Z" stroke="#040306"
                            stroke-miterlimit="10" />
                        </svg>
                    </div>
                    <div className='title-border-line'>
                        <svg className="banner-border" height="140" viewBox="0 0 2202 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 123.043C67.2858 167.865 259.022 257.325 549.762 188.784C764.181 125.427 967.75 112.601 1200.42 169.707C1347.76 205.869 1901.91 374.562 2201 1"
                            stroke-width="2" />
                        </svg>
                    </div>
                </div>
                <div className='intro-wrapper'>
                    <div className='cn-box'>
                        <div className='cn-icon'>
                            <img src={cn_icon} alt="" />
                        </div>
                        <div className='cn-name'>语文</div>
                        <div className='cn-content'>
                            <ul>
                                <li>古诗词可视化</li>
                                <li>作者生平图鉴</li>
                                <li>文言文字词解释</li>
                                <li>情境化问题设计</li>
                            </ul>
                        </div>
                        <div className='more' onClick={()=>{navigate('/category/Chinese')}}>更多</div>
                    </div>
                    <div className='math-box'>
                        <div className='math-icon'>
                            <img src={math_icon} alt="" />
                        </div>
                        <div className='math-name'>数学</div>
                        <div className='math-content'>
                            <ul>
                                <li>函数图象</li>
                                <li>不等式</li>
                                <li>积分分析</li>
                                <li>微分方程</li>
                            </ul>
                        </div>
                        <div className='more' onClick={()=>{navigate('/category/math')}}>更多</div>
                    </div>
                    <div className='en-box'>
                        <div className='en-icon'>
                            <img src={en_icon} alt="" />
                        </div>
                        <div className='en-name'>英语</div>
                        <div className='en-content'>
                            <ul>
                                <li>生词学习</li>
                                <li>长难句理解</li>
                                <li>阅读理解</li>
                                <li>概要写作</li>
                            </ul>
                        </div>
                        <div className='more' onClick={()=>{navigate('/category/English')}}>更多</div>
                    </div>
                    <div className='cs-box'>
                        <div className='cs-icon'>
                            <img src={cs_icon} alt="" />
                        </div>
                        <div className='cs-name'>信息技术</div>
                        <div className='cs-content'>
                            <ul>
                                <li>算法可视化</li>
                                <li>代码重构</li>
                                <li>代码转换</li>
                                <li>代码补全</li>
                            </ul>
                        </div>
                        <div className='more' onClick={()=>{navigate('/category/cs')}}>更多</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
