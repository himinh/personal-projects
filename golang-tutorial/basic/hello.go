package main

import "math"

func main() {

	// primitives
	// const myBool = true
	// const myNumber = 10
	// const myString = 'foo'
	// const mySymbol = Symbol('bar')
	// const myNull = null
	// const myUndefined = undefined

	// // object types
	// const myObject = {}
	// const myArray = []
	// const myFunction = function() {}
	// const myError = new Error('error')
	// const myDate = new Date()
	// const myRegex = /a/
	// const myMap = new Map()
	// const mySet = new Set()
	// const myPromise = Promise.resolve()
	// const myGenerator = function *() {}
	// const myClass = class {}

	// var myArr [3]int
	// myArr := [3]int{1, 2, 3}

	// value := myArr[0]

	// print(value)

	// type Person struct {
	// 	FirstName string
	// 	LastName  string
	// 	Age       int
	// }

	// person := Person{
	// 	FirstName: "Minh",
	// 	LastName:  "Chìu ",
	// 	Age:       18,
	// }

	// print(person.FirstName)

	// myArr := [5]int{1, 2, 3, 4, 5}

	// for i := 0; i < len(myArr); i++ {
	// 	println(i, myArr[i])
	// }

	// sum := add(10, 12)

	// println(sum)

	// x := "world!"
	// y := "Hello"
	// n := 10

	// x, y, n = swap(x, y, n)

	// m, n := split(10)

	// println(m, n)

	// var i, j int = 1, 2
	// var f float64 = math.Sqrt(float64(i))
	// var z uint = uint(j)

	// println(f, z)

	sum := 1
	for sum < 10 {
		sum += sum
	}

	println(sum, pow(2, 1, 20))
}

// func add(x int, y int) int {
// 	return x + y

// func add(x, y int) int {
// 	return x + y
// }

// func swap(x, y string, n int) (string, string, int) {
// 	return y, x, n
// }

// func split(sum int) (x, y int) {
// 	x = sum * 4 / 9
// 	y = sum - x

// 	return
// }

func pow(x, y, lim float64) float64 {
	// v := math.Pow(x, y)

	if v := math.Pow(x, y); v < lim {
		return v
	}

	return lim
}
