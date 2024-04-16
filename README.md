### Rules for Tic-Tac-Toe

1. The game is played on a grid that's 3 squares by 3 squares.
2. You are X , your friend (or the computer in this case) is O . 
3. Players take turns putting their marks in empty squares.
4. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
5. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.


#### Iteration 1
- The goal of this iteration was to just add the interactivity for the grid and the UI layout.
- UI layout was quite easy to achieve based on my prior [grid layout learnings ](https://github.com/pmadhavan/web-platform-lwexl8-grid-layout-application)
- Adding interativity was also managed to be done but needed a review (used chatgpt's help to review my click handler) to clean up the code, here are my learnings
    - game board was an array stored as state to store the game state/cell content. But I did the classic mistake of mutating the state without creating the shaloow copy of the array.
    - There were multiple if statements, which after review was seemed unnecessary
         -  For any conditional logic, think what is the output of the considtion instead of adding more logic to it. Come up with logic taht can live outside the condition.
    - I added logic that directly manipulated the DOM content using textContent, instead separate to a props or state to handle changes. 
#### Iteration 2
- Fixed the issues above mentioned
- Added the accessible

#### Iteration 3
- Game over logic
    - Was able to quickly implement gameover logic with array.some method.
- Winning Logic
    - Was able decide that the combinations need to be hard coded, then struggled a bit to decid the type of the combination indices, started with string then changed to number array to reduce splitting and converting string to int.
    - Wanted to use array.some, or array.find since the looping through the combination needs to break once winner is found, but struggled to use some or find method inside findWinner logic to return the player who win i.e X or O
        - Instead used for loop with break combination to move forward.
    - Had trouble placing the findWinner function call, initially placed inside click handler which resulted in finding winner click after the winning click. Moving it within the render method worked.

