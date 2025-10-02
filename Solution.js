
/**
 * @param {string} sentence
 * @param {number} discount
 * @return {boolean}
 */
var discountPrices = function (sentence, discount) {
    const DELIMITER = " ";
    const words = sentence.split(DELIMITER);
    for (let i = 0; i < words.length; ++i) {
        if (isPrice(words[i])) {
            words[i] = '$' + applyDiscount(words[i].substring(1), discount);
        }
    }
    return words.join(DELIMITER);
};

/**
 * @param {string} word
 * @return {string}
 */
function isPrice(word) {
    if (word.length < 2 || word.charAt(0) !== '$') {
        return false;
    }

    for (let i = 1; i < word.length; ++i) {
        if (word.charAt(i) < '0' || word.charAt(i) > '9') {
            return false;
        }
    }
    return true;
}

/**
 * @param {string} price
 * @param {number} discount
 * @return {string}
 */
function applyDiscount(price, discount) {
    const  discountedPrice = ((100 - discount) / 100) * Number.parseInt(price);
    return (discountedPrice).toFixed(2);
}
