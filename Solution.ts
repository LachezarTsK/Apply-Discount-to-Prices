
function discountPrices(sentence: string, discount: number): string {
    const DELIMITER = " ";
    const words = sentence.split(DELIMITER);
    for (let i = 0; i < words.length; ++i) {
        if (isPrice(words[i])) {
            words[i] = '$' + applyDiscount(words[i].substring(1), discount);
        }
    }
    return words.join(DELIMITER);
};

function isPrice(word: string): boolean {
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

function applyDiscount(price: string, discount: number): string {
    const discountedPrice = ((100 - discount) / 100) * Number.parseInt(price);
    return (discountedPrice).toFixed(2);
}
