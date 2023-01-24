/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
    if (intervals.length === 1) {
        return intervals;
    }
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [];
    
    let min = intervals[0][0]
    let max = intervals[0][1]

    for (let i = 1; i < intervals.length; i++) {
        const [itMin, itMax] = intervals[i];
        
        if (itMin > max) {
            result.push([min, max]);
            
            min = itMin;
            max = itMax;
        } else {
            if (itMin < min) {
                min = itMin;
            }
            
            if (itMax > max) {
                max = itMax;
            }
        }
        
        if (i === intervals.length - 1) {
            result.push([min, max]);
        }
    }
    
    return result;
};