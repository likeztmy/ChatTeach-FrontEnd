import React, { useState } from 'react'
import './index.less'
import Loading from '../loading'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getExplanation, getGif } from '../../algorythm'


export default function Algorithm_Visualization() {

    
    const [content,setContent] = useState('')
    const [pic,setPic] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const [md,setMd] = useState('')

    const changeContent = (e: { target: { value: React.SetStateAction<string> } }) => {
        setContent(e.target.value)
    }

    async function submit(){
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setPic(getGif(content))
            setMd(getExplanation(content))
        },3000)
    }

    const clear = () => {
        setContent('')
        setIsLoading(false)
    }
    const dp = '# 步骤\n\n动态规划是解决LIS问题的一种常用方法。其基本思路是：对于序列中的每个元素，计算以该元素为结尾的最长上升子序列的长度，然后取所有长度中的最大值即为整个序列的最长上升子序列的长度。具体实现如下：\n\n1. 定义一个数组dp，其中dp[i]表示以第i个元素为结尾的最长上升子序列的长度。\n2. 初始化dp数组的所有元素为1，因为每个元素本身都可以看作是一个长度为1的上升子序列。\n3. 对于每个元素i，遍历其前面的所有元素j（j<i），如果nums[j]<nums[i]，则更新dp[i]的值为dp[j]+1。\n4. 遍历完所有元素后，取dp数组中的最大值即为整个序列的最长上升子序列的长度。\n\n# 时空复杂度\n\n时间复杂度：O(n^2)，其中n为序列的长度。因为需要遍历所有元素和其前面的所有元素。\n空间复杂度：O(n)，需要一个长度为n的数组dp来存储每个元素的最长上升子序列的长度。'

    return (
        <div className='algorithm-visualization-wrapper'>
            <div className='content-wrapper'>
                <div className='form'>
                    <textarea className='input-box' onChange={changeContent} cols={50} rows={6} placeholder='请输入算法'/>
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
