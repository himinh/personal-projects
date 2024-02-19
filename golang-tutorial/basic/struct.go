package main

import "fmt"

type Animal struct {
	class  string
	age    int
	gender bool
}

func main() {

	var teddy = Animal{
		class:  "bear",
		age:    24,
		gender: true,
	}

	log((teddy))

	teddy.age += 10

	var lalo = Animal{}

	log(teddy)
	log(lalo)

}

func log(item Animal) {
	fmt.Println(item)
}
