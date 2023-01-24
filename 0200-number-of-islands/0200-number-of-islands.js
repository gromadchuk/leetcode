/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    let islandsCount = 0;
    
    const checkCurrentIsland = (i, j) => {
        if (
            i < 0 || 
            i >= grid.length || 
            j < 0 || 
            j >= grid[i].length || 
            grid[i][j] === '0'
        ) {
            return;
        }
        
        grid[i][j] = '0';
        
        checkCurrentIsland(i - 1, j); // up
        checkCurrentIsland(i, j + 1); // right
        checkCurrentIsland(i + 1, j); // down
        checkCurrentIsland(i, j - 1); // left
    };
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                islandsCount++;
                checkCurrentIsland(i, j);
            }
        }
    }
    
    return islandsCount;
};