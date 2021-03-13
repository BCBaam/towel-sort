
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!Array.isArray(matrix) || matrix === []) return [];

    let temporaryArr = matrix.map(function (item,index){
        if(index % 2 !== 0) return item.reverse();
        return item;
    })

    let result = [];
    temporaryArr.forEach(function (item){
        for (let i = 0; i < item.length; i++){
            result.push(item[i]);
        }
    });

    return result ;
}
