module.exports = (content, maxLength) => {
  if(typeof content !== 'string') return 'Error'
  if(typeof maxLength !== 'number') return 'Error'
  if(maxLength <= 0) return 'Error'
  if(content.length < 1) return 'Error';
  if(content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};

//Funkcja przyjmuje dwa argumenty – content i maxLength.
//Pierwszy po prostu przekazuje treść do skrócenia,
//a drugi informuje, jak długi ma być tekst już po przycięciu.
// => Jeśli treści nie ma, funkcja zwróci Error
// => gdy maxLength, a więc założony nowy rozmiar,
//jest większy lub równy aktualnej długości tekstu,
//pozostawiamy go bez zmian, nie ma wtedy bowiem czego przycinać.

// => W innej sytuacji zwracany jest odpowiednio skrócony tekst.