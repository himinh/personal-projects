package main

import "fmt"

func logCountDown(num int) {
	fmt.Println(num)
}

func sum(a int, b int) int {
	return a + b
}

func main() {
	for i := 0; i < 10; i++ {
		logCountDown(i)

		logCountDown(sum(i, i+1))
	}
}
