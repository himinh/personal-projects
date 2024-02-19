package main

import (
	"fmt"
	"math"
	"strings"
)

func consoleLog(args ...interface{}) {
	fmt.Println(args...)
}

// 1523. Count Odd Numbers in an Interval Range
func countOdds(low int, high int) int {
	result := 0

	for i := low; i <= high; i++ {
		if i%2 != 0 {
			result++
		}
	}

	consoleLog(result)
	return result
}

/*
*
// tính số lượng phần tử: low -> high
// 3,4,5,6,7 = 7 - 3 + 1 = 5
// 4,5,6,7 = 7 - 4 + 1 = 4

// Với số lượng phần tử trong mảng là chẵn:
// 3,4,5,6 = 4 / 2 = 2
// 4,5,6,7 = 4 / 2 = 2

// Với số lượng phần tử trong mảng là lẻ:
//   3,4,5,6,7 = 5 / 2 = 2 + 1
// 2,3,4,5,6 = 5 / 2 = 2
*
*/
func countOddsV2(low int, high int) int {
	numsLen := high - low + 1

	result := numsLen / 2

	if numsLen%2 != 0 && low%2 != 0 {
		result += 1
	}

	consoleLog(result)

	return result
}

// 1528. Shuffle String
// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
func restoreString(s string, indices []int) string {
	result := make([]byte, len(indices))

	for index, value := range indices {
		result[value] = s[index]
	}

	consoleLog(string(result))
	return string(result)
}

// 1507. Reformat Date
/*
Given a date string in the form Day Month Year, where:

Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
Year is in the range [1900, 2100].
Convert the date string to the format YYYY-MM-DD, where:

YYYY denotes the 4 digit year.
MM denotes the 2 digit month.
DD denotes the 2 digit day.

Example:
Input: date = "20th Oct 2052"
Output: "2052-10-20"
*/
func reformatDate(date string) string {
	monthMap := map[string]string{
		"Jan": "01",
		"Feb": "02",
		"Mar": "03",
		"Apr": "04",
		"May": "05",
		"Jun": "06",
		"Jul": "07",
		"Aug": "08",
		"Sep": "09",
		"Oct": "10",
		"Nov": "11",
		"Dec": "12",
	}

	parts := strings.Split(date, " ")
	day := parts[0]
	if len(day) != 4 {
		day = "0" + day
	}

	month := monthMap[parts[1]]
	year := parts[2]

	consoleLog(year + "-" + month + "-" + day[:2])
	return year + "-" + month + "-" + day[:2]

}

/*
*
[-1, 0, 2, 6, 4, 8, 10, 9, 15, 17, 18]

*
*/
func findUnsortedSubarray(nums []int) int {
	if len(nums) < 2 {
		return 0
	}

	min := math.MaxInt32
	max := math.MinInt32
	left := -1
	right := -1

	for i := 0; i < len(nums); i++ {
		if max <= nums[i] {
			max = nums[i]
		} else {
			right = i
		}
	}

	if right == -1 {
		return 0
	}

	for i := len(nums) - 1; i >= 0; i-- {
		if min >= nums[i] {
			min = nums[i]
		} else {
			left = i
		}
	}

	consoleLog(right - left + 1)

	return right - left + 1
}

// -1, 0, 2, 6, 4, 8, 10, 9, 15, 17, 18
//                                   max
//                        right = 7

// -1, 0, 2, 6, 4, 8, 10, 9, 15, 17, 18
//              min
//             left = 4

type Node struct {
	Val      int
	Children []*Node
}

func preorder(root *Node) []int {
	result := []int{}

	dfs(root, &result)

	return result
}

func dfs(root *Node, result *[]int) {
	if root == nil {
		return
	}

	*result = append(*result, root.Val)

	for _, value := range root.Children {
		dfs(value, result)
	}
}

func isPrefixOfWord(sentence string, searchWord string) int {
	consoleLog(strings.Fields(sentence))
	wordList := strings.Split(sentence, " ")

	for i := 0; i < len(wordList); i++ {
		if strings.HasPrefix(wordList[i], searchWord) {
			return i + 1
		}
	}

	return -1

}

func shuffle(nums []int, n int) []int {
	numsLeft := nums[:n]
	numsRight := nums[n:]

	result := []int{}

	for i, v := range numsLeft {
		result = append(result, v, numsRight[i])
	}

	consoleLog(numsLeft, numsRight, result)
	return result
}

type Point struct {
	X int
	Y int
}

// Helper function to validate direction character
func isValidDirection(direction byte) bool {
	return direction >= 'N' && direction <= 'W'
}

// N     :  x = +1; y = +0
// E     :  x = +0; y = +1
// S     :  x = +0; y = -1
// W     :  x = -1; y = 0
// 1496. Path Crossing

func isPathCrossing(path string) bool {
	x := 0
	y := 0
	visitedPoint := make(map[string]bool)
	visitedPoint["0,0"] = true

	for _, direction := range path {

		switch direction {
		case 'N':
			y++
		case 'S':
			y--
		case 'E':
			x++
		case 'W':
			x--
		}

		key := fmt.Sprintf("%d,%d", x, y)
		_, isVisitedNode := visitedPoint[key]

		if isVisitedNode {
			return true
		} else {
			visitedPoint[key] = true
		}
	}

	return false
}

// 1491. Average Salary Excluding the Minimum and Maximum Salary
func average(salary []int) float64 {
	n := len(salary)
	min := salary[0]
	max := salary[0]

	sum := 0
	for i := 0; i < n; i++ {
		if min > salary[i] {
			min = salary[i]
		}

		if max < salary[i] {
			max = salary[i]
		}

		sum += salary[i]
	}

	return float64(sum-min-max) / float64(n-2)
}

// 1480. Running Sum of 1d Array
func runningSum(nums []int) []int {
	for i := 1; i < len(nums); i++ {
		nums[i] += nums[i-1]
	}

	return nums
}

// 1475. Final Prices With a Special Discount in a Shop
func finalPrices(prices []int) []int {
	for i := 0; i < len(prices); i++ {
		minPrice := 0

		for j := i + 1; j < len(prices); j++ {
			if prices[i] >= prices[j] {
				minPrice = prices[j]
				break
			}
		}

		prices[i] -= minPrice
	}

	return prices
}

func canBeEqual(target []int, arr []int) bool {
	mapArr := make(map[int]int)
	for index, val := range target {
		mapArr[val]++
		mapArr[arr[index]]--

		if mapArr[val] == 0 {
			delete(mapArr, val)
		}

		if mapArr[arr[index]] == 0 {
			delete(mapArr, arr[index])
		}

	}

	return len(mapArr) == 0
}

func busyStudent(startTime []int, endTime []int, queryTime int) int {
	countStudents := 0

	for i := 0; i < len(startTime); i++ {
		if startTime[i] <= queryTime && endTime[i] >= queryTime {
			countStudents++
		}
	}

	return countStudents
}

func maxPower(s string) int {
	maxCount, currentCount := 1, 1

	for i := 1; i < len(s); i++ {
		if s[i] == s[i-1] {
			currentCount++
		} else {
			currentCount = 1
		}

		if currentCount > maxCount {
			maxCount = currentCount
		}
	}

	return maxCount
}

func main() {
	maxPower("leetcode")
	// 1523. Count Odd Numbers in an Interval Range
	// countOddsV2(7, 10)
	// countOddsV2(8, 10)
	// countOddsV2(3, 7)

	// 1528. Shuffle String
	// s := "codeleet"
	// indices := []int{4, 5, 6, 7, 0, 2, 1, 3}
	// restoreString(s, indices)

	// 1507. Reformat Date
	// date := "20th Oct 2052"
	// reformatDate(date)

	// findUnsortedSubarray([]int{-1, 0, 2, 6, 4, 8, 10, 9, 15, 17, 18})
	// findUnsortedSubarray([]int{2, 3, 4, 5})

	// consoleLog(isPrefixOfWord("i love eating burger", "aa"))
	// consoleLog(isPrefixOfWord("this problem is an easy problem", "pro"))

	// shuffle([]int{1, 2, 3, 4}, 2)
	// shuffle([]int{1, 2, 3, 4, 5, 6}, 3)
	// consoleLog(isPathCrossing("NES"))
	// consoleLog(isPathCrossing("NESWW"))
	// consoleLog(isPathCrossing("NEEEEEEEEEENNNNNNNNNNWWWWWWWWWW"))
	// consoleLog(isPathCrossing("ENNNNNNNNNNNEEEEEEEEEESSSSSSSSSS"))

	// consoleLog(runningSum())

	// consoleLog(finalPrices([]int{8, 4, 6, 2, 3}))
}
