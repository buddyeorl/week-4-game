var originalMain;
var originalEnemy;
var newAttack = 0;
var counterAttack = 0;
var attackMain = 0;
var attackEnemy = 0;  
var currentHealthMain;
var currentHealthEnemy;
var currentAttackMain;
var currentAttackEnemy;
var mainSet = false;
var enemySet = true;
var wins = 0;
var loses = 0;
var ties =0;
var gameActive = false;
var enemyDefeats = 0;
var arrayHide = [0,false,false,false,false];
var winMessage1 = "";
var winMessage2 = "";

function resetGame()
{
	attackEnemy = 0;  
	currentHealthEnemy;
	currentAttackEnemy;
	enemySet = false;
	$("#attackButton").hide();
}


function chooseCharacter()
{
	character1;
	character2;
}

// function attackMain()
// {
//  attackMain = Object.values(gameCharacters)[0][2]; 
// }

// function attackEnemy()
// {
//  attackEnemy = Object.values(gameCharacters)[1][3];
// }

function mainPick(a)
{
	$(".jumbotron").show();
	originalMain = Object.values(gameCharacters)[a][1];
	currentHealthMain = Object.values(gameCharacters)[a][1];
	currentAttackMain = Object.values(gameCharacters)[a][2];
	counterAttack = currentAttackMain;
	winMessage1 = Object.values(gameCharacters)[a][0];
	mainSet = true;
	enemySet = false;
	$(".choice").html("You Chose " + Object.values(gameCharacters)[a][0] + " now Click the character you want to Fight");
	console.log("click main pick" );
	console.log("main health" , currentHealthMain);
	$("#mainButtonChar").attr("src", Object.values(gameCharacters)[a][4]);
	$("#mainButtonChar").attr("height", "500px");
	$("#mainButtonChar").show();
	$(".progress").hide();
}
function enemyPick(e)
{
	originalEnemy = Object.values(gameCharacters)[e][1];
	currentHealthEnemy =Object.values(gameCharacters)[e][1];
	currentAttackEnemy =Object.values(gameCharacters)[e][3];
	winMessage2 = Object.values(gameCharacters)[e][0];
	enemySet = true;
	console.log("click enemy pick");
	$("#enemyButtonChar").attr("src", Object.values(gameCharacters)[e][4]);
	$("#enemyButtonChar").attr("height", "500px");
	$("#enemyButtonChar").show();
	$("#mainButtonChar").show();
	$("#healthMain").show();
	$("#showAttack").show();
	$("#showCounterAttack").show();
	$("#healthEnemy").show();
	$(".progress").show();
	$("#enemyBar").attr("style", "width:100%"); // visually the enemy hp bar will be shown as 100% full instead of empty
	$(".jumbotron").hide();
}




function isWin()
{

	if (currentHealthMain < 1 && currentHealthEnemy < 1)
	{	
		$(".jumbotron").show();
		$(".choice").html("");
		$(".display-3").html("IT'S A TIE");
		$(".progress").hide();	
		$("#mainButtonChar").animate({ opacity: 1 });
		$("#enemyButtonChar").animate({ opacity: 1 });
		$("#mainButtonChar").hide();
		$("#enemyButtonChar").hide();
		$("#healthMain").hide();
		$("#showAttack").hide();
		$("#showCounterAttack").hide();
		$("#healthEnemy").hide();
		arrayHide = [0,false,false,false,false];
		currentHealthMain; // reset main health
		newAttack = 0;
		$("#character1").show();
		$("#character1").on("click");
		$("#character2").show();
		$("#character3").show();
		$("#character4").show();
		ties++;
		console.log("loses " + loses);
		gameActive = false; // this line will prevent some text from diaplay in the html
		mainSet = false;
		counterAttack = 0;			
		enemyDefeats = 0;
		resetGame(); // this will reset the game variables except win and lose counters
		$("#mainBar").attr("style", "width:100%"); // visually the main hp bar will be shown as 100% full instead of empty	
		//$("#winMessage").html("It's a tie, you both suck");
	}
	if (currentHealthMain < 1 && currentHealthEnemy > 0)
	{	
		$(".jumbotron").show();
		$(".choice").html("");
		$(".display-3").html("You lost against" + winMessage2);
		$(".progress").hide();	
		$("#mainButtonChar").animate({ opacity: 1 });
		$("#enemyButtonChar").animate({ opacity: 1 });
		$("#mainButtonChar").hide();
		$("#enemyButtonChar").hide();
		$("#healthMain").hide();
		$("#showAttack").hide();
		$("#showCounterAttack").hide();
		$("#healthEnemy").hide();
		arrayHide = [0,false,false,false,false];
		// currentHealthMain = "Main Character Loses";
		// currentHealthEnemy="Enemy Wins";
		//$("#winMessage").html("You " + winMessage1+ " lost to " +winMessage2);
		currentHealthMain; // reset main health
		newAttack = 0;
		$("#character1").show();
		$("#character1").on("click");
		$("#character2").show();
		$("#character3").show();
		$("#character4").show();
		loses++;
		console.log("loses " + loses);
		gameActive = false; // this line will prevent some text from diaplay in the html
		mainSet = false;
		counterAttack = 0;
		resetGame(); // this will reset the game variables except win and lose counters
		$("#mainBar").attr("style", "width:100%"); // visually the main hp bar will be shown as 100% full instead of empty

	}		
	if (currentHealthEnemy < 1 && currentHealthMain > 0)
	{ 
		setTimeout(waitfunct, 1000);
		$(".choice").html("You Defetead " + winMessage2);
		$(".jumbotron").show();
		$(".progress").hide();
		$("#mainButtonChar").hide();
		$("#enemyButtonChar").hide();
		$("#healthMain").hide();
		$("#showAttack").hide();
		$("#showCounterAttack").hide();
		$("#healthEnemy").hide();
		$("#enemyButtonChar").animate({ opacity: 1 });
		$("#enemyButtonChar").hide();
		$("#showCounterAttack").hide(); // this will hide the enemy health when 0
		//$("#winMessage").html("You " + winMessage1+ " won against " +winMessage2);
		enemyDefeats++;
		console.log("enemyDefeats ", enemyDefeats);
		for (var i=1; i<5;i++) // note this if starts at 1
		{
			if (arrayHide[i] === false)
			{
			$("#character"+i).show();	
			}
			if (i === arrayHide[0])
			{
			$("#character"+i).hide();	
			}
		}

		if (enemyDefeats === 3)
		{
			$("#mainButtonChar").hide();
			$(".jumbotron").show();
			$(".display-3").html("YOU WIN!!!");
			$(".choice").html("You Defetead " + winMessage2);
			setTimeout(waitfunct, 2000);
			$(".choice").html("Play again?");
			$(".progress").hide();
			$("#mainBar").attr("style", "width:100%"); // visually the main hp bar will be shown as 100% full instead of empty
			$("#enemyButtonChar").hide();
			$("#mainButtonChar").animate({ opacity: 1 });
			$("#enemyButtonChar").animate({ opacity: 1 });
			$("#enemyButtonChar").hide();
			// $("#winMessage").html("You " + winMessage1+ " are the Worst Politician, you beat them all ");
			currentHealthMain; // reset main health
			newAttack = 0; // reset main attack
			arrayHide = [0,false,false,false,false];
			$("#showCounterAttack").hide(); // this will hide the enemy health when 0
			currentHealthMain = "Main Character Wins";
			mainSet = false;
			$("#character1").show();
			$("#character2").show();
			$("#character3").show();
			$("#character4").show();
			enemyDefeats = 0;
			counterAttack = 0;
		}
		wins++;
		console.log("wins " + wins);
		resetGame(); // this will reset the game variables except win and lose counters
	}	
}

//==================================================================================
// This function will increase or decrease opacity depending on the character or enemy health

function charAnimation()
{
var mainOpacity = currentHealthMain/originalMain;
var enemyOpacity = currentHealthEnemy/originalEnemy;
var mainBar = (currentHealthMain/originalMain) * 100; //this will be used to set the enemy health bar in %
var enemyBar = (currentHealthEnemy/originalEnemy) * 100; //this will be used to set the enemy health bar in %
$("#mainButtonChar").animate({ opacity: mainOpacity });
$("#enemyButtonChar").animate({ opacity: enemyOpacity });
$("#mainBar").attr("style", "width:" + mainBar +"%"); // this lines will be used to edit the bootstrap progress bar representing HP
$("#enemyBar").attr("style", "width:" + enemyBar +"%");// this lines will be used to edit the bootstrap progress bar representing HP

}
function waitfunct()
{
$(".choice").html("");

}



//==================================================================================
// Main Game starts here
$(".progress").hide();
$("#attackButton").hide();
$("#mainButtonChar").hide();
$("#enemyButtonChar").hide();
$(document).ready(function() 
{





//===================================================================================//
// Main Character is going to be picked here
		$("#character1").on("dblclick", function()
		{
			if (mainSet === false)
			{
			console.log("dblclick" + mainSet);
			console.log("clicking character1");
			$("#winMessage").html(" "); // this will clear the winning message
			mainPick(0);//  0 represents the first character in the charcater's array
			//$("#character1").off("click");
			$("#character1").hide();
			arrayHide[0] = 1; //this value will be used to compare in isWin to prevent Main Character to be shown after hidden
			}
			event.stopImmediatePropagation();
		});  
		$("#character2").on("dblclick", function() 
		{
			if (mainSet === false)
			{
			console.log("clicking character2");
			$("#winMessage").html(" "); // this will clear the winning message
			mainPick(1); //  1 represents the second character in the charcater's array
			//$("#character2").off("click");
			$("#character2").hide();
			arrayHide[0] = 2;// this value will be used to compare in isWin to prevent Main Character to be shown after hidden
			}
		});  
		$("#character3").on("dblclick", function()
		{
			if (mainSet === false)
			{
			console.log("dblclick" + mainSet);
			console.log("clicking character3");
			$("#winMessage").html(" "); // this will clear the winning message
			mainPick(2);//  0 represents the first character in the charcater's array
			//$("#character1").off("click");
			$("#character3").hide();
			arrayHide[0] = 3;// this value will be used to compare in isWin to prevent Main Character to be shown after hidden
			}
		});  
		$("#character4").on("dblclick", function() 
		{
			if (mainSet === false)
			{
			console.log("clicking character4");
			$("#winMessage").html(" "); // this will clear the winning message
			mainPick(3); //  1 represents the second character in the charcater's array
			//$("#character2").off("click");
			$("#character4").hide();
			arrayHide[0] = 4;// this value will be used to compare in isWin to prevent Main Character to be shown after hidden
			}
		});  
	
		

//===================================================================================//
// Character mouseover animation

		$("#character1").mouseenter( function()
		{
		$("#character1").animate( {opacity: "0.5"}, 50);
		});	
		$("#character1").mouseleave( function()
		{
		$("#character1").animate( {opacity: "1"}, 50);
		});	
		$("#character2").mouseenter( function()
		{
		$("#character2").animate( {opacity: "0.5"}, 50);
		});	
		$("#character2").mouseleave( function()
		{
		$("#character2").animate( {opacity: "1"}, 50);
		});	
		$("#character3").mouseenter( function()
		{
		$("#character3").animate( {opacity: "0.5"}, 50);
		});	
		$("#character3").mouseleave( function()
		{
		$("#character3").animate( {opacity: "1"}, 50);
		});	
		$("#character4").mouseenter( function()
		{
		$("#character4").animate( {opacity: "0.5"}, 50);
		});	
		$("#character4").mouseleave( function()
		{
		$("#character4").animate( {opacity: "1"}, 50);
		});	
//===================================================================================//
// Enemy Character is going to be picked here

		$("#character1").on("click", function()
		{
			if (mainSet === true && enemySet === false)
			{
			console.log("is in the mainSet");
			console.log("clicking character1");
			enemyPick(0);//  0 represents the first character in the charcater's array
			gameActive = true;
			$("#character1").hide();
			$("#character2").hide();
			$("#character3").hide();
			$("#character4").hide();
			$("#attackButton").show();
			$("#enemyButtonChar").show();
			arrayHide[1] = true; // this will check which enemy is being fought to hide and unhide the right enemies after defeteating
			}
		});   
		$("#character2").on("click", function()
		{
			if (mainSet === true && enemySet === false)
			{
			console.log("clicking character2");
			enemyPick(1);//  1 represents the second character in the charcater's array
			gameActive = true;
			$("#character1").hide();
			$("#character2").hide();
			$("#character3").hide();
			$("#character4").hide();
			$("#attackButton").show();
			$("#enemyButtonChar").show();
			arrayHide[2] = true; // this will check which enemy is being fought to hide and unhide the right enemies after defeteating
			}
		}); 
		$("#character3").on("click", function()
		{
			if (mainSet === true && enemySet === false)
			{
			console.log("is in the mainSet");
			console.log("clicking character3");
			enemyPick(2);//  0 represents the first character in the charcater's array
			gameActive = true;
			$("#character1").hide();
			$("#character2").hide();
			$("#character3").hide();
			$("#character4").hide();
			$("#attackButton").show();
			$("#enemyButtonChar").show();
			arrayHide[3] = true; // this will check which enemy is being fought to hide and unhide the right enemies after defeteating
			}
		});   
		$("#character4").on("click", function()
		{
			if (mainSet === true && enemySet === false)
			{
			console.log("clicking character2");
			enemyPick(3);//  1 represents the second character in the charcater's array
			gameActive = true;
			$("#character1").hide();
			$("#character2").hide();
			$("#character3").hide();
			$("#character4").hide();
			$("#attackButton").show();
			$("#enemyButtonChar").show();
			arrayHide[4] = true; // this will check which enemy is being fought to hide and unhide the right enemies after defeteating
			}
		});  
	


        

		$("#attackButton").click(function()
		{
			$("#mainButtonChar").animate( {height: "+=50px", left: "+=400px"}, 200);
			$("#mainButtonChar").animate( {height: "-=50px", left: "-=400px"}, 200);
			$("#enemyButtonChar").animate( {height: "+=50px", left: "-=400px"}, 200);
			$("#enemyButtonChar").animate( {height: "-=50px", left: "+=400px"}, 200);
	//======================================================================================//
	// This will refresh health of both Main and Enemy  //
			if (gameActive == true) // this will check if the game is active 
			{
				//newAttack = newAttack + currentAttackMain;
				currentHealthMain=currentHealthMain - currentAttackEnemy;
				currentHealthEnemy=currentHealthEnemy - currentAttackMain;
				console.log("new Attack is" + currentAttackMain);
				console.log("new health is" + currentHealthMain)
				console.log("Conter Attack is " + counterAttack);
				console.log("Enemy Health is " + currentHealthEnemy);
				currentAttackMain += counterAttack;
				//$("#showCounterAttack").html(counterAttack);
				//$("#showAttack").html("changed");
			}
			charAnimation();
			isWin();
			$("#showAttack").html("Main Attack " + (currentAttackMain));
			$("#showCounterAttack").html("Enemy Attack " + currentAttackEnemy);
		});

});


	

	// $(document).ready(function() {

 //    $("#random-button").on("click", function()
 //    {
 //      // CREATE THE MISSING CODE HERE. Your code should add content to the random-number div.
 //      // ...
 //      var random = Math.floor( Math.random() *1000);
 //      $("#random-number").html(random);
 //      //$("#random-number").append(random);
 //      // ...

 //    });
 //  });