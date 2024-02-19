package main

func main() {
	// Initialize
	cart := make(map[string]int)

	// Write
	cart["tShirt"] = 0
	cart["pants"] = 1
	cart["socks"] = 2
	cart["books"] = 2
	cart["laptop"] += 2

	// Read
	println(cart["laptop"])
	laptopQuantity, found := cart["laptop"]
	println(laptopQuantity, found)

	// Update
	cart["laptop"] += 1

	// Delete
	delete(cart, "laptop")

	println(cart)
}
