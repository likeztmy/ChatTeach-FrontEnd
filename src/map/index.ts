const sushi = '../../../assets/sushi.swf'
const dufu = '../../../assets/dufu.swf'
const libai = '../../../assets/libai.swf'

export function getMap(keyWord:string){
    let res = ''
    switch (keyWord) {
        case '李白':
            res = libai
            break;
        case '杜甫':
            res = dufu
            break;        
        case '苏轼':
            res = sushi
            break;
        default:
            res = ''
            break;
    }
    return res
}