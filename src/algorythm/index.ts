const heapSortGif = '../../../assets/heapSort.gif'
const bubbleSortGif = '../../../assets/bubbleSort.gif'
const dpGif = '../../../assets/dp.gif'
const kmpGif = '../../../assets/kmp.jpg'
const bfsGif = '../../../assets/bfs.gif'
const dfsGif = '../../../assets/dfs.gif'
const kruskalGif = '../../../assets/kruskal.gif'
const dijkstraGif = '../../../assets/dijkstra.gif'

export function getGif(keyWord:string){
    let res = ''
    switch (keyWord) {
        case '堆排序':
            res = heapSortGif;
            break;
        case '冒泡排序':
            res = bubbleSortGif;
            break;
        case '最小上升子序列':
            res = dpGif;
            break
        case 'KMP算法':
            res = kmpGif;
            break
        case '广度优先遍历':
            res = bfsGif;
            break
        case '深度优先遍历':
            res = dfsGif;
            break;
        case 'kruskal最小生成树':
            res = kruskalGif;
            break;
        case 'Dijkstra最短路径':
            res = dijkstraGif;
            break;
        default: 
            res = '';
            break;
    }
    return res
}


const heapSort = '# 过程\n\n首先建立大顶堆，然后将堆顶的元素取出，作为最大值，与数组尾部的元素交换，并维持残余堆的性质；之后将堆顶的元素取出，作为次大值，与数组倒数第二位元素交换，并维持残余堆的性质；以此类推，在第 n-1 次操作后，整个数组就完成了排序。\n\n# 分析\n\n| 名称       |   最优情况    |   平均情况    |   最差情况    | 空间 | 稳定性 |\n| ---------- | :-----------: | :-----------: | :-----------: | :--: | :----: |\n| **堆排序** | n&nbsp;log(n) | n&nbsp;log(n) | n&nbsp;log(n) | O(1) |   否   |'
const bubbleSort = '# 步骤\n\n它的工作原理是每次检查相邻两个元素，如果前面的元素与后面的元素满足给定的排序条件，就将相邻两个元素交换。当没有相邻的元素需要交换时，排序就完成了。经过 i 次扫描后，数列的末尾 i 项必然是最大的 i 项，因此冒泡排序最多需要扫描 n-1 遍数组就能完成排序。\n\n# 分析\n\n| 名称         | 最优情况 |     平均情况     |     最差情况     | 空间 | 稳定性 |\n| ------------ | :------: | :--------------: | :--------------: | :--: | :----: |\n| **冒泡排序** |   O(n)   | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(1) |   是   |'
const bfs = '# 步骤\n\n 1. 首先将根节点放入队列中。\n 2. 从队列中取出第一个节点，并检验它是否为目标。如果找到目标，则结束搜寻并回传结果。否则将它所有尚未检验过的直接子节点加入队列中。\n3. 若队列为空，表示整张图都检查过了——亦即图中没有欲搜寻的目标。结束搜寻并回传“找不到目标”。\n4. 重复步骤2。\n\n# 时空复杂度分析\n\n| 算法 | 时间复杂度 | 空间复杂度 |\n| ---- | ---------- | ---------- |\n| BFS  | O(V + E)   | O(V)       |\n\n其中，V 表示顶点（vertices）的数量，E 表示边（edges）的数量。'
const dfs = '# 步骤\n\n1. 首先将根节点放入stack中。\n\n2. 从stack中取出第一个节点，并检验它是否为目标。\n&nbsp;&nbsp;- 如果找到目标，则结束搜寻并回传结果。\n&nbsp;&nbsp;- 否则将它某一个尚未检验过的直接子节点加入stack中。\n\n3. 重复步骤2。\n\n4. 如果不存在未检测过的直接子节点。\n&nbsp;&nbsp;- 将上一级节点加入stack中。\n&nbsp;&nbsp;- 重复步骤2。\n\n5. 重复步骤4。\n\n6. 若stack为空，表示整张图都检查过了——亦即图中没有欲搜寻的目标。结束搜寻并回传“找不到目标”。\n\n# 时空复杂度分析\n\n| 情况 | 时间复杂度 | 空间复杂度 |\n| ---- | ---------- | ---------- |\n| 最好 | O(b^d)     | O(bd)      |\n| 平均 | O(b^d)     | O(bd)      |\n| 最坏 | O(b^m)     | O(bm)      |\n\n其中：\nb：树的分支因子（每个节点的平均子节点数）\nd：目标节点所在的最小深度\nm：树的最大深度'
const dijkstra = '# 步骤\n\nDijkstra算法是一种用于计算带权有向图中的最短路径的贪心算法。它的具体步骤如下：\n\n1. 初始化：将起始节点的距离设置为0，将所有其他节点的距离设置为无穷大。\n2. 将起始节点标记为“当前节点”。\n3. 对于当前节点的每个邻居，计算从起始节点到该邻居的距离。如果该距离小于该邻居当前的距离，则更新该邻居的距离。\n4. 将当前节点标记为“已访问”并将其从“未访问”节点列表中删除。\n5. 如果目标节点被标记为“已访问”（即，如果已经找到了最短路径），则停止搜索。否则，从未访问的节点中选择具有最小距离的节点作为下一个“当前节点”，并重复步骤3。\n\n# 时空复杂度分析\n\n时间复杂度：O(ElogV)，其中E为边的数量，V为顶点的数量。这个算法使用了优先队列来选择下一个“当前节点”，并使用一个距离字典来跟踪每个节点的距离。因此，时间复杂度主要由优先队列的插入和弹出操作以及距离字典的更新操作决定。\n\n空间复杂度：取决于距离字典和优先队列的大小，即O(V)。在实现中，图通常表示为邻接列表或邻接矩阵，这需要额外的空间，但通常不会影响算法的时间复杂度。'
const kruskal = '# 过程\n\n按照边的权重顺序（从小到大）将边加入生成树中，但是若加入该边会与生成树形成环则不加入该边。直到树中含有 V-1 条边为止。这些边组成的就是该图的最小生成树。\n\n# 时间复杂度\n\n O(Elog(E))\n\n# 空间复杂度\n\n O(|E| + |V|)'
const kmp = '# 步骤\n\nKMP算法的基本思想是，当出现不匹配时，不需要回溯i指针，而是利用已经匹配的信息，尽可能减少匹配次数。\n\n具体实现步骤如下：\n\n1. 预处理模式串，得到next数组。next[i]表示当第i个字符不匹配时，下一次匹配应该从模式串的哪个位置开始。\n\n2. 在文本串中匹配模式串。用i指针遍历文本串，用j指针遍历模式串。如果匹配成功，i和j同时后移一位；否则，根据next数组移动j指针。\n\n# 时空复杂度分析\n\n空间复杂度：O(m)，其中m是模式串的长度，因为需要额外开辟一个next数组来存储匹配失败时的跳转位置。\n时间复杂度：O(m+n)，其中n是文本串的长度，因为在最坏情况下，每个字符都需要比较一次。'
const dp = '# 步骤\n\n动态规划是解决LIS问题的一种常用方法。其基本思路是：对于序列中的每个元素，计算以该元素为结尾的最长上升子序列的长度，然后取所有长度中的最大值即为整个序列的最长上升子序列的长度。具体实现如下：\n\n1. 定义一个数组dp，其中dp[i]表示以第i个元素为结尾的最长上升子序列的长度。\n2. 初始化dp数组的所有元素为1，因为每个元素本身都可以看作是一个长度为1的上升子序列。\n3. 对于每个元素i，遍历其前面的所有元素j（j<i），如果nums[j]<nums[i]，则更新dp[i]的值为dp[j]+1。\n4. 遍历完所有元素后，取dp数组中的最大值即为整个序列的最长上升子序列的长度。\n\n# 时空复杂度\n\n时间复杂度：O(n^2)，其中n为序列的长度。因为需要遍历所有元素和其前面的所有元素。\n空间复杂度：O(n)，需要一个长度为n的数组dp来存储每个元素的最长上升子序列的长度。'

export function getExplanation(keyWord:string){
    let res = ''
    switch (keyWord) {
        case '堆排序':
            res = heapSort;
            break;
        case '冒泡排序':
            res = bubbleSort;
            break;
        case '最小上升子序列':
            res = dp;
            break
        case 'KMP算法':
            res = kmp;
            break
        case '广度优先遍历':
            res = bfs;
            break
        case '深度优先遍历':
            res = dfs;
            break;
        case 'kruskal最小生成树':
            res = kruskal;
            break;
        case 'Dijkstra最短路径':
            res = dijkstra;
            break;
        default: 
            res = '';
            break;
    }
    return res
}

