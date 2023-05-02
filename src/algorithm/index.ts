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

const heapSortCode =  
`
void swap(int& a, int& b)
{
    int tmp = a;
    a = b;
    b = tmp;
}

void sift_down(int arr[], int start, int end)
{
    // 计算父结点和子结点的下标
    int parent = start;
    int child = parent * 2 + 1;
    while (child <= end)
    { // 子结点下标在范围内才做比较
        // 先比较两个子结点大小，选择最大的
        if (child + 1 <= end && arr[child] < arr[child + 1])
            child++;
        // 如果父结点比子结点大，代表调整完毕，直接跳出函数
        if (arr[parent] >= arr[child])
            return;
        else
        { // 否则交换父子内容，子结点再和孙结点比较
            swap(arr[parent], arr[child]);
            parent = child;
            child = parent * 2 + 1;
        }
    }
}

void heap_sort(int arr[], int len)
{
    // 从最后一个节点的父节点开始 sift down 以完成堆化 (heapify)
    for (int i = (len - 1 - 1) / 2; i >= 0; i--)
        sift_down(arr, i, len - 1);
    // 先将第一个元素和已经排好的元素前一位做交换，再重新调整（刚调整的元素之前的元素），直到排序完毕
    for (int i = len - 1; i > 0; i--)
    {
        swap(arr[0], arr[i]);
        sift_down(arr, 0, i - 1);
    }
}
`

const bubbleSortCode =
`
// 假设数组的大小是 n + 1，冒泡排序从数组下标 1 开始
void bubble_sort(int *a, int n)
{
    bool flag = true;
    while (flag)
    {
        flag = false;
        for (int i = 1; i < n; ++i)
        {
            if (a[i] > a[i + 1])
            {
                flag = true;
                int t = a[i];
                a[i] = a[i + 1];
                a[i + 1] = t;
            }
        }
    }
}
`

const dpCode = 
`
#include <stdio.h>

int lis(int nums[], int n) {
    int dp[n]; // 定义dp数组
    int maxLen = 1; // 初始化最长上升子序列的长度为1

    // 初始化dp数组
    for (int i = 0; i < n; i++) {
        dp[i] = 1;
    }

    // 遍历所有元素
    for (int i = 1; i < n; i++) {
        // 遍历元素i前面的所有元素
        for (int j = 0; j < i; j++) {
            // 如果nums[j]<nums[i]，则更新dp[i]的值为dp[j]+1
            if (nums[j] < nums[i]) {
                dp[i] = dp[j] + 1 > dp[i] ? dp[j] + 1 : dp[i];
            }
        }
        // 更新最长上升子序列的长度
        maxLen = dp[i] > maxLen ? dp[i] : maxLen;
    }

    return maxLen;
}

int main() {
    int nums[] = {10, 9, 2, 5, 3, 7, 101, 18};
    int n = sizeof(nums) / sizeof(nums[0]);
    int maxLen = lis(nums, n);
    printf("%d\n", maxLen); // 输出最长上升子序列的长度
    return 0;
}
`

const kmpCode = 
`
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void getNext(char* pattern, int* next, int len) {
    int i = 0, j = -1;
    next[0] = -1;
    while (i < len) {
        if (j == -1 || pattern[i] == pattern[j]) {
            i++;
            j++;
            next[i] = j;
        } else {
            j = next[j];
        }
    }
}

void kmp(char* text, char* pattern) {
    int n = strlen(text);
    int m = strlen(pattern);
    int* next = (int*)malloc(sizeof(int) * m);
    getNext(pattern, next, m);
    int i = 0, j = 0;
    while (i < n) {
        if (j == -1 || text[i] == pattern[j]) {
            i++;
            j++;
            if (j == m) {
                printf("Pattern found at index %d\n", i - m);
                j = next[j];
            }
        } else {
            j = next[j];
        }
    }
    free(next);
}

int main() {
    char text[] = "ABABDABACDABABCABAB";
    char pattern[] = "ABABCABAB";
    kmp(text, pattern);
    return 0;
}
`

const bfsCode =
`
#include <stdio.h>
#include <stdlib.h>

#define MAX_QUEUE_SIZE 100

// 定义队列结构体
typedef struct Queue {
    int items[MAX_QUEUE_SIZE];
    int front;
    int rear;
} Queue;

// 初始化队列
Queue* createQueue() {
    Queue* q = (Queue*)malloc(sizeof(Queue));
    q->front = -1;
    q->rear = -1;
    return q;
}

// 检查队列是否为空
int isEmpty(Queue* q) {
    if (q->rear == -1) {
        return 1;
    } else {
        return 0;
    }
}

// 添加元素到队列尾部
void enqueue(Queue* q, int value) {
    if (q->rear == MAX_QUEUE_SIZE - 1) {
        printf("队列已满\n");
    } else {
        if (q->front == -1) {
            q->front = 0;
        }
        q->rear++;
        q->items[q->rear] = value;
    }
}

// 从队列头部删除元素
int dequeue(Queue* q) {
    int item;
    if (isEmpty(q)) {
        printf("队列为空\n");
        item = -1;
    } else {
        item = q->items[q->front];
        q->front++;
        if (q->front > q->rear) {
            q->front = q->rear = -1;
        }
    }
    return item;
}

// 定义节点结构体
typedef struct Node {
    int value;
    struct Node* left;
    struct Node* right;
} Node;

// 创建新节点
Node* createNode(int value) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->value = value;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// 插入节点到二叉树
Node* insert(Node* root, int value) {
    if (root == NULL) {
        return createNode(value);
    } else if (value <= root->value) {
        root->left = insert(root->left, value);
    } else {
        root->right = insert(root->right, value);
    }
    return root;
}

// BFS搜索树
void bfs(Node* root) {
    if (root == NULL) {
        return;
    }

    Queue* q = createQueue();
    enqueue(q, root->value);

    while (!isEmpty(q)) {
        int current = dequeue(q);
        printf("%d ", current);

        if (root->left != NULL) {
            enqueue(q, root->left->value);
        }
        if (root->right != NULL) {
            enqueue(q, root->right->value);
        }
    }
}

// 测试代码
int main() {
    Node* root = NULL;
    root = insert(root, 8);
    root = insert(root, 3);
    root = insert(root, 10);
    root = insert(root, 1);
    root = insert(root, 6);
    root = insert(root, 14);
    root = insert(root, 4);
    root = insert(root, 7);
    root = insert(root, 13);

    bfs(root);

    return 0;
}
`

const dfsCode =
`
#include <stdio.h>
#include <stdlib.h>

#define MAX_VERTICES 10

int visited[MAX_VERTICES];
int adj_matrix[MAX_VERTICES][MAX_VERTICES];

void dfs(int vertex, int num_vertices) {
    visited[vertex] = 1;
    printf("访问顶点 %d\n", vertex);

    for (int i = 0; i < num_vertices; i++) {
        if (adj_matrix[vertex][i] == 1 && !visited[i]) {
            dfs(i, num_vertices);
        }
    }
}

int main() {
    int num_vertices, num_edges;
    printf("请输入顶点数和边数: ");
    scanf("%d %d", &num_vertices, &num_edges);

    for (int i = 0; i < num_vertices; i++) {
        for (int j = 0; j < num_vertices; j++) {
            adj_matrix[i][j] = 0;
        }
    }

    printf("请输入 %d 条边的信息:\n", num_edges);
    for (int i = 0; i < num_edges; i++) {
        int src, dest;
        scanf("%d %d", &src, &dest);
        adj_matrix[src][dest] = 1;
        adj_matrix[dest][src] = 1;
    }

    for (int i = 0; i < num_vertices; i++) {
        visited[i] = 0;
    }

    printf("DFS 遍历结果:\n");
    dfs(0, num_vertices);

    return 0;
}
`

const kruskalCode =
`
#include <algorithm>
#include <iostream>

const int INF = 0x3fffffff;
const long long INF64 = 0x3fffffffffffffffLL;

struct Edge
{
    int u, v, val;

    bool operator<(const Edge &other) const { return val < other.val; }
};

Edge e[300010];
bool used[300010];

int n, m;
long long sum;

class Tr
{
private:
    struct Edge
    {
        int to, nxt, val;
    } e[600010];

    int cnt, head[100010];

    int pnt[100010][22];
    int dpth[100010];
    // 到祖先的路径上边权最大的边
    int maxx[100010][22];
    // 到祖先的路径上边权次大的边，若不存在则为 -INF
    int minn[100010][22];

public:
    void addedge(int u, int v, int val)
    {
        e[++cnt] = (Edge){v, head[u], val};
        head[u] = cnt;
    }

    void insedge(int u, int v, int val)
    {
        addedge(u, v, val);
        addedge(v, u, val);
    }

    void dfs(int now, int fa)
    {
        dpth[now] = dpth[fa] + 1;
        pnt[now][0] = fa;
        minn[now][0] = -INF;
        for (int i = 1; (1 << i) <= dpth[now]; i++)
        {
            pnt[now][i] = pnt[pnt[now][i - 1]][i - 1];
            int kk[4] = {maxx[now][i - 1], maxx[pnt[now][i - 1]][i - 1],
                         minn[now][i - 1], minn[pnt[now][i - 1]][i - 1]};
            // 从四个值中取得最大值
            std::sort(kk, kk + 4);
            maxx[now][i] = kk[3];
            // 取得严格次大值
            int ptr = 2;
            while (ptr >= 0 && kk[ptr] == kk[3])
                ptr--;
            minn[now][i] = (ptr == -1 ? -INF : kk[ptr]);
        }

        for (int i = head[now]; i; i = e[i].nxt)
        {
            if (e[i].to != fa)
            {
                maxx[e[i].to][0] = e[i].val;
                dfs(e[i].to, now);
            }
        }
    }

    int lca(int a, int b)
    {
        if (dpth[a] < dpth[b])
            std::swap(a, b);

        for (int i = 21; i >= 0; i--)
            if (dpth[pnt[a][i]] >= dpth[b])
                a = pnt[a][i];

        if (a == b)
            return a;

        for (int i = 21; i >= 0; i--)
        {
            if (pnt[a][i] != pnt[b][i])
            {
                a = pnt[a][i];
                b = pnt[b][i];
            }
        }
        return pnt[a][0];
    }

    int query(int a, int b, int val)
    {
        int res = -INF;
        for (int i = 21; i >= 0; i--)
        {
            if (dpth[pnt[a][i]] >= dpth[b])
            {
                if (val != maxx[a][i])
                    res = std::max(res, maxx[a][i]);
                else
                    res = std::max(res, minn[a][i]);
                a = pnt[a][i];
            }
        }
        return res;
    }
} tr;

int fa[100010];

int find(int x) { return fa[x] == x ? x : fa[x] = find(fa[x]); }

void Kruskal()
{
    int tot = 0;
    std::sort(e + 1, e + m + 1);
    for (int i = 1; i <= n; i++)
        fa[i] = i;

    for (int i = 1; i <= m; i++)
    {
        int a = find(e[i].u);
        int b = find(e[i].v);
        if (a != b)
        {
            fa[a] = b;
            tot++;
            tr.insedge(e[i].u, e[i].v, e[i].val);
            sum += e[i].val;
            used[i] = 1;
        }
        if (tot == n - 1)
            break;
    }
}

int main()
{
    std::ios::sync_with_stdio(0);
    std::cin.tie(0);
    std::cout.tie(0);

    std::cin >> n >> m;
    for (int i = 1; i <= m; i++)
    {
        int u, v, val;
        std::cin >> u >> v >> val;
        e[i] = (Edge){u, v, val};
    }

    Kruskal();
    long long ans = INF64;
    tr.dfs(1, 0);

    for (int i = 1; i <= m; i++)
    {
        if (!used[i])
        {
            int _lca = tr.lca(e[i].u, e[i].v);
            // 找到路径上不等于 e[i].val 的最大边权
            long long tmpa = tr.query(e[i].u, _lca, e[i].val);
            long long tmpb = tr.query(e[i].v, _lca, e[i].val);
            // 这样的边可能不存在，只在这样的边存在时更新答案
            if (std::max(tmpa, tmpb) > -INF)
                ans = std::min(ans, sum - std::max(tmpa, tmpb) + e[i].val);
        }
    }
    // 次小生成树不存在时输出 -1
    std::cout << (ans == INF64 ? -1 : ans) << '\n';
    return 0;
}
`

const dijkstraCode =
`
#include <iostream>
#include <vector>
#include <queue>
#include <cstring>

using namespace std;

const int maxn = 10005; // maximum number of vertices in the graph

struct edge
{
    int v, w;
};

struct node
{
    int dis, u;

    bool operator>(const node &a) const { return dis > a.dis; }
};

vector<edge> e[maxn];
int dis[maxn], vis[maxn];
priority_queue<node, vector<node>, greater<node>> q;

void dijkstra(int n, int s)
{
    memset(dis, 63, sizeof(dis)); // initialize all distances to a large value
    dis[s] = 0; // distance from source vertex to itself is 0
    q.push({0, s}); // push source vertex into the priority queue
    while (!q.empty())
    {
        int u = q.top().u;
        q.pop();
        if (vis[u])
            continue;
        vis[u] = 1; // mark vertex as visited
        for (auto ed : e[u])
        {
            int v = ed.v, w = ed.w;
            if (dis[v] > dis[u] + w) // if a shorter path to v is found through u
            {
                dis[v] = dis[u] + w; // update the distance
                q.push({dis[v], v}); // push v into the priority queue
            }
        }
    }
}

int main()
{
    int n, m, s; // n = number of vertices, m = number of edges, s = source vertex
    cin >> n >> m >> s;
    for (int i = 1; i <= m; i++)
    {
        int u, v, w;
        cin >> u >> v >> w;
        e[u].push_back({v, w}); // add edge (u, v) with weight w to the graph
    }
    dijkstra(n, s); // find shortest path from s to all other vertices
    for (int i = 1; i <= n; i++)
        cout << (dis[i] == 1061109567 ? -1 : dis[i]) << ' '; // print the distances
    return 0;
}
`

export function getCode(keyWord:string){
    let res = ''
    switch (keyWord) {
        case '堆排序':
            res = heapSortCode;
            break;
        case '冒泡排序':
            res = bubbleSortCode;
            break;
        case '最小上升子序列':
            res = dpCode;
            break
        case 'KMP算法':
            res = kmpCode;
            break
        case '广度优先遍历':
            res = bfsCode;
            break
        case '深度优先遍历':
            res = dfsCode;
            break;
        case 'kruskal最小生成树':
            res = kruskalCode;
            break;
        case 'Dijkstra最短路径':
            res = dijkstraCode;
            break;
        default: 
            res = '';
            break;
    }
    return res
}