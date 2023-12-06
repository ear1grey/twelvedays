const article = document.querySelector("article");

function generateWords() {
    for (let outer=1; outer<=12; outer++){

        const parts = [];
        parts.push( oneTheNthDayOfChristmas(outer) );

        for (let inner=outer; inner >= 1; inner--) {
            parts.push( gift(inner, inner === 1) );
        }

        if (parts.length > 2) {
            const last = parts.pop();
            parts.push("and", last)
        }

        const p = document.createElement("p");
        p.innerHTML = parts.join(" ");
        article.append(p);
    }
}

function oneTheNthDayOfChristmas(num) {
    const words = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];
    return `On the ${words[num-1]} day of christmas my true love gave to me:`;
}

function gift(num, last=false) {
    const gifts = [
        "a partridge in a pear tree",
        "two turtle doves",
        "three french hens",
        "four calling birds",
        "five gold rings",
        "six geese a laying",
        "seven swans a swimming",
        "eight maids a milking",
        "nine ladies dancing",
        "ten lords a leaping",
        "eleven pipers piping",
        "twelve drummers drumming"
    ];
    return `<span class="g${num}">${gifts[num-1]}</span>${last ? "." : ","}`;
}

generateWords();
