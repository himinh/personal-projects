package main

import (
	"fmt"
	"reflect"
)

type Vertex struct {
	X int
	Y int
}

type User struct {
	name   string
	age    int8
	height int32
}

func main() {
	// i, j := 42, 2071

	// p := &i
	// fmt.Println(*p)

	// *p = 21
	// fmt.Println(i)

	// p = &j

	// *p = *p / 37

	// fmt.Println(j)

	// fmt.Println(Vertex{1, 2})
	// u := User{"Minh", 12, 180}
	// fmt.Println(u)

	// p := &u
	// p.name = "Huyền"
	// fmt.Println(u)

	// u1 := User{"Minh", 12, 180}
	// u2 := User{name: "Minh", height: 180}
	// u3 := &User{name: "Minh", age: 20}
	// u4 := User{}

	// up := u3
	// u4.name = "New"
	// up.name = "Age"

	// fmt.Println(u1, u2, u3, u4)

	// var a [2]string

	// a[0] = "Hello"
	// a[1] = "World!"

	// fmt.Println(a[0], a[1])
	// fmt.Println(a)

	// primes := [6]int{2, 3, 5, 7, 11, 13}

	// var s []int = primes[1:4]

	// fmt.Println(s)

	// names := []string{"Minh", "Huyền", "Nghĩa", "Huy"}

	// fmt.Println(names)

	// a := names[0:2]
	// b := names[1:3]
	// fmt.Println(a, b)

	// b[0] = "XXXX"

	// fmt.Println(a, b)
	// fmt.Println(names)

	// q := []int{12, 11, 20, 23, 34, 55, 66, 27, 16, 57, 98, 19}
	// printSlice(q)

	// q = q[:0]
	// printSlice(q)

	// q = q[:2]
	// printSlice(q)

	// q = q[:3]
	// printSlice(q)

	// q = q[2:]
	// printSlice(q)

	// r := []bool{true, false, true, true, false, true}

	// fmt.Println(r)

	// s := []struct {
	// 	i int
	// 	b bool
	// }{
	// 	{i: 1, b: true},
	// 	{i: 2, b: false},
	// 	{i: 3, b: true},
	// 	{i: 4, b: true},
	// 	{i: 5, b: false},
	// 	{i: 1, b: true},
	// }

	// fmt.Println(s)

	// var s []int

	// if s == nil {
	// 	fmt.Println("nil!", s)
	// 	s := q
	// 	fmt.Println("s: ", s)
	// }

	// a := make([]int, 5)
	// printSlice(a)

	// b := make([]int, 0, 5)
	// printSlice(b)

	// c := b[:2]
	// printSlice(c)

	// d := c[2:5]
	// printSlice(d)

	// create a tic-tac-toe board
	// board := [][]string{
	// 	[]string{"_", "_", "_"},
	// 	[]string{"_", "_", "_"},
	// 	[]string{"_", "_", "_"},
	// 	[]string{"_", "_", "_"},
	// }

	// board[0][0] = "X"
	// board[0][1] = "0"
	// board[0][2] = "X"
	// board[1][0] = "X"
	// board[1][1] = "0"
	// board[1][2] = "X"
	// board[2][0] = "0"

	// for i := 0; i < len(board); i++ {
	// 	fmt.Printf("%s\n", strings.Join(board[i], " "))
	// }

	// var s []int
	// printSlice(s)

	// append works on nil slices
	// s = append(s, 0)
	// printSlice(s)

	// s = append(s, 1)
	// printSlice(s)

	// s = append(s, 2, 3, 4, 5, 6)
	// printSlice(s)

	// var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

	// for i, v := range pow {
	// 	fmt.Printf("2**%d = %d\n", i, v)
	// }

	// pow := make([]int, 10)

	// for i := range pow {
	// 	pow[i] = 1 << i
	// }

	// for _, v := range pow {
	// 	fmt.Printf("%d\n", v)
	// }

	// fmt.Println(1 << 10)

	// pic.Show(Pic)

	var e byte = 'e'
	fmt.Println(e)
	fmt.Println(reflect.TypeOf(e))

}

func printSlice(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}

func Pic(dx, dy int) [][]uint8 {
	return make([][]uint8, 2)
}
