var rotate = function(matrix){
    matrix.reverse();
    for(let i = 0; i < matrix.length; i++){
        for(let j = i; j < i; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp; 
        }
    }
}