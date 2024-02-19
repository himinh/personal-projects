package main

func main() {
	a := 1
	b := a

	b += 1

	c := 1
	d := &c

	*d += 1

	println(a, b)
	println(c, *d)
}
