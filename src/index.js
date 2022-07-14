const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let answer = "";
    let letter = "";
    const symbols = {
        "10": ".",
        "11": "-"
    };
    for (let i = 0; i < expr.length; i+=2) {
        if (i % 10 === 0 && letter !== "") {
        answer += MORSE_TABLE[letter];
        letter = "";
        }
        if (expr[i] === "1") letter += symbols[expr.slice(i, i + 2)];
        else if (expr[i] === "*") {
        i += 8;
        answer += " ";
        }
    }
    answer += MORSE_TABLE[letter];
    return answer;
    }

module.exports = {
    decode
}