import React from 'react'
import loading from '../../../assets/loading.gif'
import './index.less'

export default function Loading() {
    return (
        <div className='loading-wrapper'>
            <div className="loading">
                <img src={loading} alt="" />
            </div>
        </div>
    )
}
