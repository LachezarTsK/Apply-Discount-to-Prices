
#include <format>
#include <string>
#include <sstream>
using namespace std;

class Solution {

    inline static const char DELIMITER = ' ';

public:
    string discountPrices(string sentence, int discount)const {
        string temp;
        string sentenceWithDiscountedPrices;
        stringstream strStream(sentence);

        while (getline(strStream, temp, DELIMITER)) {
            sentenceWithDiscountedPrices.push_back(DELIMITER);

            if (isPrice(temp)) {
                string discountedPrice = '$' + applyDiscount(temp.substr(1), discount);
                sentenceWithDiscountedPrices.append(discountedPrice);
            }
            else {
                sentenceWithDiscountedPrices.append(temp);
            }
        }

        return sentenceWithDiscountedPrices.substr(1);
    }

private:
    bool isPrice(string_view word) const {
        if (word.length() < 2 || word[0] != '$') {
            return false;
        }

        for (int i = 1; i < word.length(); ++i) {
            if (word[i] < '0' || word[i] > '9') {
                return false;
            }
        }
        return true;
    }

    string applyDiscount(const string& price, double discount) const {
            double discountedPrice = ((100 - discount) / 100) * stoll(price);
            return format("{0:.2f}", discountedPrice);
    }
};
