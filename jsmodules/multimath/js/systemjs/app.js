(function () {
    console.log('Starting Multimath with an IIFE');
    document.getElementById('startGame').addEventListener('click', function () {
        player.setName(document.getElementById('playerName').value);
        game.printGame();
    });

    document.getElementById('calculate').addEventListener('click', function () {
        game.calculateScore();
    });

    document.getElementById('problemCount').value = game.getProblemCount();
})();