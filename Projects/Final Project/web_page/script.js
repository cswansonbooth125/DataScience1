const changingText = document.getElementById("changing-text");

function RandomBandName() {
    var bandNames = ["The Beatles", "Bob Dylan", "Marvin Gaye", "The Clash", "Elvis Presley", "The Velvet Underground",
                 "Miles Davis", "Jimi Hendrix", "Nirvana", "Bruce Springsteen", "Van Morrison", "Michael Jackson",
                 "Chuck Berry", "Robert Johnson", "John Lennon", "Stevie Wonder", "James Brown", "Fleetwood Mac", "U2",
                 "The Who", "Led Zeppelin", "Joni Mitchell", "The Rolling Stones", "The Ramones", "The Band", "David Bowie",
                 "Carole King", "Eagles", "Muddy Waters", "Sex Pistols", "Love", "The Doors", "Pink Floyd", "Patti Smith",
                 "Bob Marley", "John Coltrane", "Public Enemy", "The Allaman Brothers Band", "Little Richard"];

    var randomNumber = Math.floor(Math.random() * bandNames.length());
    changingText.textContent=bandNames[randomNumber];
}
RandomBandName();