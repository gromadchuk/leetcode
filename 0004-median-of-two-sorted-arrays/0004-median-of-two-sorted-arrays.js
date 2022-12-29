/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    const all = [...nums1, ...nums2];

    all.sort((a, b) => a - b);

    const medianIndex = all.length / 2;
    
    if (all.length % 2) {
        return all[Math.floor(medianIndex)];
    }

    return (all[medianIndex - 1] + all[medianIndex]) / 2;
};