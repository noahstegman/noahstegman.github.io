function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let player_score = 0;
let enemy_score = 0;
function choose(choice) {
    $("#blocker").show();
    let player = choice;
    var win;
    let enemy = Math.floor(Math.random() * 3);
    if(enemy == 0){
        enemy = "Rock";
    }
    else if(enemy == 1){
        enemy = "Paper";
    }
    else if (enemy == 2){
        enemy = "Scissors";
    }
    if (play(player, enemy) == "Victory"){
        player_score++;
        win = "Victory!"
    } else if (play(player, enemy) == "Loss"){
        enemy_score++;
        win = "Loss!"
    } else {
        win = "Tie!"
    }
    $('#' + choice).addClass("youchoice")
    sleep(1000).then(() => { $('#' + enemy).addClass("enemychoice") });
    sleep(2000).then(() => { 
        $("#playerscore").html(player_score);
        $("#enemyscore").html(enemy_score);
        $("#blocker").hide();
        $('#' + choice).removeClass("youchoice");
        $('#' + enemy).removeClass("enemychoice");
    });
    
    }


function play(choice, enemy) {

    if(enemy == "Rock" && choice == "Rock"){
       return "Tie";
    }
    else if (enemy == "Rock" && choice == "Paper"){
        return "Victory";
    }
    else if (enemy == "Rock" && choice == "Scissors"){
        return "Loss";
    }
    else if (enemy == "Paper" && choice == "Scissors"){
        return "Victory";
    }
    else if (enemy == "Paper" && choice == "Paper"){
        return "Tie";
    }
    else if (enemy == "Paper" && choice == "Rock"){
        return "Loss";
    }
    else if (enemy == "Scissors" && choice == "Rock"){
        return "Victory";
    }
    else if (enemy == "Scissors" && choice == "Paper"){
        return "Loss";
    }
    else if (enemy == "Scissors" && choice == "Scissors"){
        return "Tie";
    }
}
