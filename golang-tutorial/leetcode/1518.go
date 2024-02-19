package main

import "fmt"

func numWaterBottles(numBottles int, numExchange int) int {
	var result int
	var emptyBottles int

	result = numBottles
	emptyBottles = numBottles

	for emptyBottles >= numExchange {
		// exchange
		numBottles = emptyBottles / numExchange
		emptyBottles = emptyBottles % numExchange

		result += numBottles
		emptyBottles += numBottles
	}

	return result
}

func main() {
	numWaterBottles(9, 3)
	numWaterBottles(15, 4)
}

func log(args ...interface{}) {
	fmt.Println(args...)
}
