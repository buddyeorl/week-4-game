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
var gameActive = false;
var enemyDefeats = 0;
var arrayHide = [0,false,false,false,false];

function resetGame()
{
	counterAttack = 0;
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
	originalMain = Object.values(gameCharacters)[a][1];
	currentHealthMain = Object.values(gameCharacters)[a][1];
	currentAttackMain = Object.values(gameCharacters)[a][2];
	mainSet = true;
	enemySet = false;
	console.log("click main pick" );
	console.log("main health" , currentHealthMain);
}
function enemyPick(e)
{
	originalEnemy = Object.values(gameCharacters)[e][1];
	currentHealthEnemy =Object.values(gameCharacters)[e][1];
	currentAttackEnemy =Object.values(gameCharacters)[e][3];
	enemySet = true;
	console.log("click enemy pick");
	if (counterAttack != 0 )
	{
		$("#showCounterAttack").show();
	}
}




function isWin()
{
	currentHealthMain=currentHealthMain - counterAttack;
	if (currentHealthMain < 1)
	{
		$("#mainButtonChar").animate({ opacity: 1 });
		$("#enemyButtonChar").animate({ opacity: 1 });
		arrayHide = [0,false,false,false,false];
		currentHealthMain = "Main Character Loses";
		currentHealthEnemy="Enemy Wins";
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
		resetGame(); // this will reset the game variables except win and lose counters
	}	
	currentHealthEnemy=currentHealthEnemy - newAttack;	
	if (currentHealthEnemy < 1)
	{ 
		$("#enemyButtonChar").animate({ opacity: 1 });
		$("#enemyButtonChar").hide();
		$("#showCounterAttack").hide(); // this will hide the enemy health when 0
		enemyDefeats++;
		console.log("enemyDefeats ", enemyDefeats);
		currentHealthEnemy="Enemy Loses";
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
			$("#mainButtonChar").animate({ opacity: 1 });
			$("#enemyButtonChar").animate({ opacity: 1 });
			$("#enemyButtonChar").show();
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
$("#mainButtonChar").animate({ opacity: mainOpacity });
$("#enemyButtonChar").animate({ opacity: enemyOpacity });

}




//==================================================================================
// Main Game starts here


$("#attackButton").hide();

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
			mainPick(0);//  0 represents the first character in the charcater's array
			//$("#character1").off("click");
			$("#character1").hide();
			arrayHide[0] = 1; //this value will be used to compare in isWin to prevent Main Character to be shown after hidden
			}
		});  
		$("#character2").on("dblclick", function() 
		{
			if (mainSet === false)
			{
			console.log("clicking character2");
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
			mainPick(3); //  1 represents the second character in the charcater's array
			//$("#character2").off("click");
			$("#character4").hide();
			arrayHide[0] = 4;// this value will be used to compare in isWin to prevent Main Character to be shown after hidden
			}
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
	


		if (counterAttack === 0 )
		{
			$("#showCounterAttack").hide();
		}
        

		$("#attackButton").on("click", function()
		{
			newAttack = newAttack + currentAttackMain;
			console.log("new Attack is" + newAttack);
			console.log("new health is" + currentHealthMain)
			counterAttack=currentAttackEnemy;
			console.log("Conter Attack is " + counterAttack);
			console.log("Enemy Health is " + currentHealthEnemy);
		if (counterAttack != 0 )
		{
			$("#showCounterAttack").show();
		}

	//======================================================================================//
	// This will refresh health of both Main and Enemy  //
			if (gameActive == true) // this will check if the game is active 
			{
				$("#showAttack").html("Main Attack " + newAttack);
				$("#showCounterAttack").html("Enemy Attack " + counterAttack);
				$("#healthMain").html("Main HP " + currentHealthMain);
				$("#healthEnemy").html("Enemy HP " + currentHealthEnemy);
				if (counterAttack >= currentHealthMain )
				{
					currentHealthMain = 0;
					$("#healthMain").html("Main HP ");
				}
				if (newAttack >= currentHealthEnemy )
				{
				currentHealthEnemy = 0;
				$("#healthEnemy").html("Enemy HP ");
				}
				//$("#showCounterAttack").html(counterAttack);
				//$("#showAttack").html("changed");
				charAnimation();
				isWin();
			}
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