/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
    let left = 0;
    let right = height.length - 1;
    let water = 0;
    let leftMax = 0;
    let rightMax = 0;
    
    while (left <= right) {
        if (height[left] < height[right]) {
            if (height[left] > leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            
            left++;
        } else {
            if (height[right] > rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            
            right--;
        }
    }
    
    return water;
};