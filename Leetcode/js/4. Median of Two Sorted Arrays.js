/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    중복 영역 찾아서, 만일 중복영역 안에 중간값이 있다면 따로 구하고, 아니면 비중복 영역에서 인덱스로 접근하면 될것 같은데,, 
    1. 중복영역 구하기
        - 완전 포함
        - 일부 포함
        - 미포함
    2. 중복 영역 내에서 중간값 구하기
};

console.log(findMedianSortedArrays([1, 2, 3], [2, 3, 4]));
