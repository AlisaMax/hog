import React from 'react';

const compareTexts = (value1, value2) => {
    const words1 = value1.split(" ");
    const words2 = value2.split(" ");

    const errors = [];

    if (words1.length !== words2.length) {
        return "Тексты содержат разное количество слов.";
    }
    const getSortedLetters = (word) => word.split("").sort().join("");

    for (let i = 0; i < words1.length; i++) {
        const word1 = words1[i];
        const word2 = words2[i];

        if (word1.length !== word2.length) {
            errors.push(`Слово ${i + 1} ("${word2}") неверное: разная длина слов.`);
            continue;
        }

        if (getSortedLetters(word1) !== getSortedLetters(word2)) {
            errors.push(`Слово ${i + 1} ("${word2}") неверное: используются другие буквы.`);
        }
    }

    if (errors.length === 0) {
        return "Тексты идентичны: слова совпадают по длине и набору букв.";
    } else {
        return errors.join("\n");
    }
};

export default compareTexts;
