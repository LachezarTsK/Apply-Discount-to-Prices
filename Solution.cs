
using System;

public class Solution
{
    private static readonly string DELIMITER = " ";

    public string DiscountPrices(string sentence, int discount)
    {
        string[] words = sentence.Split(DELIMITER);
        for (int i = 0; i < words.Length; ++i)
        {
            if (IsPrice(words[i]))
            {
                words[i] = '$' + ApplyDiscount(words[i].Substring(1), discount);
            }
        }
        return string.Join(DELIMITER, words);
    }

    private bool IsPrice(string word)
    {
        if (word.Length < 2 || word[0] != '$')
        {
            return false;
        }

        for (int i = 1; i < word.Length; ++i)
        {
            if (word[i] < '0' || word[i] > '9')
            {
                return false;
            }
        }
        return true;
    }

    private string ApplyDiscount(string price, double discount)
    {
        double discountedPrice = ((100 - discount) / 100) * int.Parse(price);
        return string.Format("{0:0.00.##}", discountedPrice);
    }
}
