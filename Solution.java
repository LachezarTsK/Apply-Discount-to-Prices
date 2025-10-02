
public class Solution {

    private static final String DELIMITER = " ";

    public String discountPrices(String sentence, int discount) {
        String[] words = sentence.split(DELIMITER);
        for (int i = 0; i < words.length; ++i) {
            if (isPrice(words[i])) {
                words[i] = '$' + applyDiscount(words[i].substring(1), discount);
            }
        }
        return String.join(DELIMITER, words);
    }

    private boolean isPrice(String word) {
        if (word.length() < 2 || word.charAt(0) != '$') {
            return false;
        }
        for (int i = 1; i < word.length(); ++i) {
            if (word.charAt(i) < '0' || word.charAt(i) > '9') {
                return false;
            }
        }
        return true;
    }

    private String applyDiscount(String price, double discount) {
        double discountedPrice = ((100 - discount) / 100) * Integer.parseInt(price);
        return String.format("%.2f", discountedPrice);
    }
}
