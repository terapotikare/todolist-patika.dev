function generate() {
  var quotes = {
    "Jon Krakauer":
      '"He was unheeded, happy, and near to the wild heart of life. He was alone and young and wilful and wildhearted, alone amid a waste of wild air and brackish waters and the seaharvest of shells and tangle and veiled grey sunlight."',

    "Aaron Lauritsen":
      '"The struggles we endure today will be the ‘good old days’ we laugh about tomorrow."',
    "Jules Renard":
      '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse. "',
  };
  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length)];
  var quotes = quotes[author];

  document.getElementById("quote").innerHTML = quotes;
  document.getElementById("author").innerHTML = author;
}
