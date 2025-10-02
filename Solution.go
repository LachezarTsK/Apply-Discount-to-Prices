
package main
import (
    "fmt"
    "strconv"
    "strings"
)

const DELIMITER = " "

func discountPrices(sentence string, discount int) string {
    words := strings.Split(sentence, DELIMITER)

    for i := range words {
        if isPrice(words[i]) {
            words[i] = "$" + applyDiscount(words[i][1:], discount)
        }
    }
    return strings.Join(words, DELIMITER)
}

func isPrice(word string) bool {
    if len(word) < 2 || word[0] != '$' {
        return false
    }

    for i := 1; i < len(word); i++ {
        if word[i] < '0' || word[i] > '9' {
            return false
        }
    }
    return true
}

func applyDiscount(price string, discount int) string {
    value, _ := strconv.ParseInt(price, 10, 64)
    discountedPrice := ((100.0 - float64(discount)) / 100.0) * float64(value)
    return fmt.Sprintf("%.2f", discountedPrice)
}
