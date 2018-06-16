$(document).ready(function() {

    var audio = document.getElementById('gem');
    var wins = 0;
    var loses = 0;
    var score = 0;
    var total;
    var cr1;
    var cr2;
    var cr3;
    var cr4;
    setValues();

    function getRandomValue(min, max) {
        var number = Math.floor(Math.random() * (max - min) + min);
        console.log(number);
        return number;
    }
    function setValues() {
        score = getRandomValue(19, 120);
        cr1 = getRandomValue(1, 12);
        cr2 = getRandomValue(1, 12);
        cr3 = getRandomValue(1, 12);
        cr4 = getRandomValue(1, 12);
        total = 0;
    }
    function setScreen() {
        $('#win').text(wins);
        $('#lose').text(loses);
        $('#total').text(total);
        $('#score').text(score);
    }
    function progressCheck() {
        if (total === score) {
            wins++;
            $('#alert').text("You Win!");
            $('#alert').attr("class", "alert-win");
            setValues();
            setScreen();
        }
        if (total > score) {
            loses++;
            setValues();
            $('#alert').text("You Lost!");
            $('#alert').attr("class", "alert-lose");
            setValues();
            setScreen();
        }
    }
      
    setScreen();

    $('#cr1').on('click', function(){
        audio.play();
        total += cr1;
        setScreen();
        progressCheck();
    });

    $('#cr2').on('click', function(){
        audio.play();
        total += cr2;
        setScreen();
        progressCheck();
    });

    $('#cr3').on('click', function(){
        audio.play();
        total += cr3;
        setScreen();
        progressCheck();
    });

    $('#cr4').on('click', function(){
        audio.play();
        total += cr4;
        setScreen();
        progressCheck();
    });

});
