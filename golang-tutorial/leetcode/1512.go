package main

import "fmt"

func main() {
	numIdenticalPairs([]int{1, 2, 3, 1, 1, 3})
	numIdenticalPairs([]int{1, 1, 1, 1})

	numIdenticalPairsV2([]int{1, 2, 3, 1, 1, 3})
	numIdenticalPairsV2([]int{1, 1, 1, 1})
}

func numIdenticalPairs(nums []int) int {
	count := 0

	for i := 0; i < len(nums)-1; i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i] == nums[j] {
				count++
			}
		}
	}
	log(count)

	return count
}

func numIdenticalPairsV2(nums []int) int {
	count := 0
	numMap := make(map[int]int)

	for i := 0; i < len(nums); i++ {
		numCount, ok := numMap[nums[i]]
		if ok {
			numMap[nums[i]] = numCount + 1
			count += numCount + 1
		} else {
			numMap[nums[i]] = 0
		}
	}

	return count
}

func log(args ...interface{}) {
	fmt.Println(args...)
}

// count = 0
// 1, 2, 3, 1, 1, 3
// i
//          j
//             j
//                j

// count = 3
// 1, 2, 3, 1, 1, 3
//    i

// count = 3
// 1, 2, 3, 1, 1, 3
//       i
//                j

// count = 4
// 1, 2, 3, 1, 1, 3
//          i
//              j

// count = 5
// 1, 2, 3, 1, 1, 3
//             i

// return count = 5
