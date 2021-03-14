function towelSort(matrix = []) {
    let result = [];
    for (let i = 0; i < matrix.length; i += 1) {
        if (i % 2 !== 0) {
            matrix[i].reverse();
        }
        result = result.concat(matrix[i]);
    }
    return result;
}

module.exports = towelSort;
