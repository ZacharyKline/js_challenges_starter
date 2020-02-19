function hangMan(){
    let word = 'asleep'
    let letter = 'i'
    let count = 0
    for (let i = 0; i < word.length; i++){
        if (word[i] == letter) {
            count++
        }

    }
            if (count > 0) {
				console.log("Yeah, the letter " + letter + " exists " + count + " times in my word.");
            } else {
                console.log('Nope, that letter doesn’t exist in my word')
						}
    document.write("hello from hangman-lite.js");

};

hangMan()