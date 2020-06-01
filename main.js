let currentPlayer = 'X'; // X is the starting player.
let nextplayer = 'O'
let playerXSelections = [];
let playerOSelections = [];
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [2, 5, 8]
    [3, 6, 9]

];



// Get all .grid-cell elements from the DOM and store in cellElementArray (see Resources links below):
const cellElementArray = document.querySelectorAll('.grid-cell');
for (let elementIndex = 0; elementIndex < cellElementArray.length;

    elementIndex += 1) {
    const currentCellElement = cellElementArray[elementIndex]
    currentCellElement.addEventListener('click', function (event) {
        const clickedCellElement = event.target;
        console.log("You clicked on cell number: " + clickedCellElement.id)


        if (currentPlayer == "X") {
            currentPlayer = 'O'
            clickedCellElement.innerHTML = 'X'
            playerXSelections.push( clickedCellElement.id)
        }
        else {
            currentPlayer == "O"
            currentPlayer = 'X'
            clickedCellElement.innerHTML = 'O'
            playerOSelections.push(clickedCellElement.id)

        }
       


    });
}








