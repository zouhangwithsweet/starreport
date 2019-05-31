package main

import (
    "fmt"
    "test/pack1"
    "test/tree"
)

func main() {
    var test1 string
    test1 = pack1.ReturnStr()
    fmt.Printf("ReturnStr from package1: %s\n", test1)
    fmt.Printf("Integer from package1: %d\n", pack1.Pack1Int)
    // fmt.Printf("Float from package1: %f\n", pack1.pack1Float)
    fmt.Println(tree.Print())
}