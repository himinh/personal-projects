package main

import "fmt"

func main() {

	purchases := [5]int{12, 22, 33, 44, 55}

	purchase3 := purchases[2]

	mySlice := purchases[:]

	mySlice = append(mySlice, 1, 2, 3, 4)

	secondSlice := purchases[2:]

	combine := append(mySlice, secondSlice...)

	fmt.Println(purchases, purchase3, mySlice)
	fmt.Println(purchases[:3], purchases[2:], combine)
	fmt.Println(len(combine), cap(combine))

	arr := [5]int{1, 2, 3, 4, 5}
	fmt.Println(len(arr)) // In ra 5, số lượng phần tử trong array arr
	slice := arr[1:4]
	fmt.Println(len(slice)) // In ra 3, số lượng phần tử trong slice

}
