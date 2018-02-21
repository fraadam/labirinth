/* almostPerfectLabyrinth
 */

/**
 * Adott a switchLabyrinth megoldása
 *
 * 01. Ábrázold a lépéseidet egy steps nevű tömbben.
 */
var steps = [[0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]];
/**
 * 02. Definiálj egy x és egy y változót 0 értékkel.
 */
var x = 0;
var y = 0;
/**
 * 03. Hozz létre egy hash-t possibleResults néven, aminek a kulcsai a számok,
 *     az értéke pedig egy újabb hash, melynek két kulcsa van,
 *     "en" és "hu", értékeik pedig a számok angolul és magyarul szövegesen.
 */
var possibleResults = {
  0: { hu: 'nulla', en: 'zero' },
  1: { hu: 'egy', en: 'one' },
  2: { hu: 'ketto', en: 'two' },
  3: { hu: 'harom', en: 'three' },
  4: { hu: 'negy', en: 'four' },
  5: { hu: 'ot', en: 'five' },
  6: { hu: 'hat', en: 'six' },
  7: { hu: 'het', en: 'seven' },
  8: { hu: 'nyolc', en: 'eight' }
};
/**
 * 04. Definiálj egy result és egy formattedResult változót érték nélkül.
 */
var result;
var formattedResult;
/**
 * 05. Hozz létre egy matrixot matrix néven, mely a következőt ábrázolja:
 *
 * | 0| 1| 2| 3|
 * | 4| 5| 6| 7|
 * | 8| 9|10|11|
 * |12|13|14|15|
 *
 * A zérus a bal felső sarok legyen, az a 0,0 -s koordináta.
 * Ügyelj rá, először az X-et, majd az Y-t hívjuk: matrix[x][y].
 */
var matrix = [[0, 1, 2, 3],
[4, 5, 6, 7],
[8, 9, 10, 11],
[12, 13, 14, 15]];
/**

 * 06. Hozz létre egy függvényt, getResult néven.
 *     A függvény visszatérési értéke az adott koorinátán lévő szám kell hogy legyen.
 *     Figyelem! Ha érvénytelen X koordinátát adsz meg, undefined lesz az eredménye!
 *     Ezért kell egy IF, ami megállapítja, object-e a típusa a matrix[x] -nek.
 *     Ha nem, akkor a visszatérési értéknek "X" -nek kell lennie.
 *     Ha az Y-on van undefined, szintén "X" legyen a visszatérési érték.
 */
function getResult (matrix) {
  if (typeof (matrix[x]) === 'object') {
    return matrix[x][y];
  } else if (matrix[y] === 'undefined') {
    return 'X';
  } else {
    return 'X';
  }
}
/**
 * 07. Írj metódust processStep néven, ami megváltoztatja a koordinátákat a lépés szerint.
 *     Bemeneti argumentuma a step, ami egy konkrét lépést kap majd értéknek.
 *     Ehhez kiváló egy switch, ami a step értéke alapján
 *     ad hozzá vagy vesz el az x vagy az y értékéből.
 */
function processStep (step) {
  switch (step) {
    case 'up':
      y = y + 1;
      break;
    case 'down':
      y = y + 1;
      break;
    case 'left':
      x = x - 1;
      break;
    case 'right':
      x = x + 1;
      break;
  }
}
/**
 * 08. Definiálj egy resultFormatter metódust,
 *     ami abban az esetben, ha a result X akkor X-et ír ki,
 *     máskülönben a possibleResults hash-ből kinyerve a következő formát, pl:
 *     1-egy-one
 */
function resultFormatter () {
  if (result === 'X') {
    console.log('X');
  } else {
    console.log(possibleResults());
  }
}

/**
 * 09. Definiálj egy processSteps metódust, ami végigmegy a steps tömbön
 *     egy FOR ciklus segítségével. A ciklusmagban a steps i. elemével
 *     hívd meg a processStep() -et, majd a result-ba töltsd be a getResult()
 *     eredményét, ez után pedig a formattedResult-ba a resultFormatter eredményét.
 *     Végül console.log-old ki a formattedResult -ot.
 */
function processSteps (steps) {
  for (let i = 0; i < steps; i++) {
    processStep(steps[i]);
    result = getResult();
    formattedResult = resultFormatter();
    console.log(formattedResult);
  } 
}

/**
 * 10. Hívd meg a processSteps függvényt.*/
processSteps(steps);
 /* Jó munkát!
 *
 * u.i.: rajzoljatok mint az ősember a barlang falára!
 */
