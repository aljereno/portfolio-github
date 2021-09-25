import React from 'react';

const Leets = () => {
    return (
        <div className="basicTextBox">
            <h3>Problem 1: </h3>
            <p>
                Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
                You can use each character in text at most once. Return the maximum number of instances that can be formed.
            </p>
            <p>{`Constraint: 1 <= text.length <= 104 and text consists of lower case English letters only.`}</p>
            <pre>{`
                 class Solution {
                     public int maxNumberOfBalloons(String text){
                         int b = 0, a = 0, l = 0, o = 0, n = 0, counter = 0;
                         boolean flag = true;
                         for(int i = 0; i < text.length(); i++){
                            if(text.charAt(i)  == 'b'){b++;}
                            if(text.charAt(i) == 'a'){a++;}
                            if(text.charAt(i) == 'l'){l++;}
                            if(text.charAt(i) == 'o'){o++;}
                            if(text.charAt(i) == 'n'){n++;}                
                         }
                         while(flag){
                            if(b + a + l + o + n >= 7){
                                if(b <= 0 || a <= 0 || l <= 1 || o <= 1 || n <= 0){
                                    flag = false;
                                } else {
                                    b--; a--; l = l - 2; o = o - 2; n--;
                                    counter++;
                                }
                            } else {
                                flag = false;
                            }
                         }
                         return counter;
                     }
                 }       
            `}</pre>
            <p>This was my very naive solution that I came up in 10ish minutes. I understand that the problem could be
                made more complicated if asking for a given word instead of just balloon.
            </p>
        </div>
    )
}

export default Leets;