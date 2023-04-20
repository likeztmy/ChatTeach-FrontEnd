import React from 'react'
import Header from '../header'
import { Outlet } from 'react-router-dom'
import './index.less'

export default function Layout() {
    return (
        <div className='layout-wrapper'>
            <Header />
            <Outlet />
        </div>
    )
}
