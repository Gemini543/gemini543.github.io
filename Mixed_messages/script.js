// First line arrays:
const line1_beg = ["Everething's gonna be ", "Never ", "Just "];

const line1_end_1 = ["alright!", "good!", "great!"];

const line1_end_2 = ["give up!", "doubt your abilities!", "think that you're not good enough!"]

const line1_end_3 = ["do it!", "stop punishing yourself!", "think about what you can do!"];

// Second line arrays:
const line2_beg = ["You", "No one", "I"];

const line2_end_1 = ["'re awesome!", "'re looking very glamorous tonight!", "  always look so beautiful!"];

const line2_end_2 = [" as wonderful as you!", " could compare to you!", " has such pretty eyes as you!"];

const line2_end_3 = [" love your smile!", "'m in love with your voice!", " just can not take away my sight from you!"];

// Third line arrays:
const line3_beg = ["Remember: ", "You should ", "It's important to "];

const line3_end_1 = ["you must always learn.", "manners are important.", "thoughts are powerful."];

const line3_end_2 = ["sleep enough.", "take care of your health.", "enjoy your life!"];

const line3_end_3 = ["be a good person.", "help another people.", "spend time with your family."];

// Fourth line arrays:
const line4_quotes = ["Tea is one of the mainstays of civilization in this country.", "Life is a mountain. Your goal is to find your path, not to reach the top.", "Life is a question and how we live it is our answer."];

const line4_authors = ["George Orwell", "Maxime Lagacé", "Gary Keller"];



// First line output:
const first_str = () => {

    // Choose the random beginning for first line:
    const rand_beg_str1_1 = Math.floor(Math.random()*3);
    const rand_beg_str1 = line1_beg[rand_beg_str1_1];
    let rand_end_str1 = '';

    // Choose the random end for first line:
    if (rand_beg_str1_1 == 0) {
        const rand_end_str1_1 = Math.floor(Math.random()*3);
        rand_end_str1 = line1_end_1[rand_end_str1_1];
    } else if (rand_beg_str1_1 == 1) {
        const rand_end_str1_2 = Math.floor(Math.random()*3);
        rand_end_str1 = line1_end_2[rand_end_str1_2];
    } else if (rand_beg_str1_1 == 2) {
        const rand_end_str1_3 = Math.floor(Math.random()*3);
        rand_end_str1 = line1_end_3[rand_end_str1_3];
    }

    const str1_to_log = rand_beg_str1 + rand_end_str1;
    document.write(str1_to_log);
};



// Second line output:
const second_str = () => {

    // Choose the random beginning for second line:
    const rand_beg_str2_1 = Math.floor(Math.random()*3);
    const rand_beg_str2 = line2_beg[rand_beg_str2_1];
    let rand_end_str2 = '';

    // Choose the random end for second line:
    if (rand_beg_str2_1 == 0) {
        const rand_end_str2_1 = Math.floor(Math.random()*3);
        rand_end_str2 = line2_end_1[rand_end_str2_1];
    } else if (rand_beg_str2_1 == 1) {
        const rand_end_str2_2 = Math.floor(Math.random()*3);
        rand_end_str2 = line2_end_2[rand_end_str2_2];
    } else if (rand_beg_str2_1 == 2) {
        const rand_end_str2_3 = Math.floor(Math.random()*3);
        rand_end_str2 = line2_end_3[rand_end_str2_3];
    }

    const str2_to_log = rand_beg_str2 + rand_end_str2;
    document.write(str2_to_log);
};



// Third line output:
const third_str = () => {

    // Choose the random beginning for third line:
    const rand_beg_str3_1 = Math.floor(Math.random()*3);
    const rand_beg_str3 = line3_beg[rand_beg_str3_1];
    let rand_end_str3 = '';

    // Choose the random end for third line:
    if (rand_beg_str3_1 == 0) {
        const rand_end_str3_1 = Math.floor(Math.random()*3);
        rand_end_str3 = line3_end_1[rand_end_str3_1];
    } else if (rand_beg_str3_1 == 1) {
        const rand_end_str3_2 = Math.floor(Math.random()*3);
        rand_end_str3 = line3_end_2[rand_end_str3_2];
    } else if (rand_beg_str3_1 == 2) {
        const rand_end_str3_3 = Math.floor(Math.random()*3);
        rand_end_str3 = line3_end_3[rand_end_str3_3];
    }

    const str3_to_log = rand_beg_str3 + rand_end_str3;
    document.write(str3_to_log);
};


const rand_str4 = Math.floor(Math.random()*3);

// Fourth quote line output:
const fourth_str_quote = () => {
    const str4_quote_to_log = line4_quotes[rand_str4];

    document.write(str4_quote_to_log);
};



// Fourth authour line output:
const fourth_str_author = () => {
    const _author = line4_authors[rand_str4];

    document.write(_author);
};