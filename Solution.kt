
class Solution {

    private companion object {
        const val DELIMITER = " "
    }

    fun discountPrices(sentence: String, discount: Int): String {
        val words = sentence.split(DELIMITER).toTypedArray()
        for (i in words.indices) {
            if (isPrice(words[i])) {
                words[i] = '$' + applyDiscount(words[i].substring(1), discount)
            }
        }
        return words.joinToString(DELIMITER)
    }

    private fun isPrice(word: String): Boolean {
        if (word.length < 2 || word[0] != '$') {
            return false
        }

        for (i in 1..<word.length) {
            if (word[i] < '0' || word[i] > '9') {
                return false
            }
        }
        return true
    }

    private fun applyDiscount(price: String, discount: Int): String {
        val discountedPrice = ((100 - discount.toDouble()) / 100) * price.toLong()
        return String.format("%.2f", discountedPrice)
    }
}
