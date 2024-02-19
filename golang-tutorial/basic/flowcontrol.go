package main

import (
	"fmt"
)

func main() {
	fmt.Println("Go runs on ")

	// switch os := runtime.GOOS; os {
	// case "darwin":
	// 	fmt.Println("OS X.")

	// case "linux":
	// 	fmt.Println("Linux.")

	// default:
	// 	// freebsd, openbsd,
	// 	// plan9, windows...
	// 	fmt.Printf("%s.\n", os)
	// }

	// switch a := "new"; a {
	// case "new":
	// 	fmt.Println("New", a)
	// 	break
	// case "old":
	// 	println("Old", a)

	// default:
	// 	println("Not matched")
	// }

	// t := time.Now()

	// switch {
	// case t.Hour() < 12:
	// 	println("Good morning!")
	// case t.Hour() < 17:
	// 	println("Good afternoon!")

	// default:
	// 	println("Good evening!")
	// }

	// defer fmt.Println("World!")
	// defer fmt.Println("HI HI!")

	// fmt.Println("Hello ")

	for i := 0; i < 10; i++ {
		defer fmt.Println(i)
	}

	fmt.Println("DONE")
}
