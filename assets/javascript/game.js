
$(document).ready(function(){
    
	var randomNumber=20;
	var wins =0;
	var losses=0;
	var score =0;
    var btn1=0;
    var btn2=0;
    var btn3=0;
    var btn4=0;

    function restart(){
		//reset variables
		// randomNumber=20;
		// wins =0;
		// losses=0;
		score = 0;

		randomNumber = Math.round(Math.random()*100);
		randomNumber = randomNumber>50?Math.round(randomNumber/2):randomNumber;
    	//get random number for crystals
    	btn1 = Math.floor(Math.random()*10 +1);
    	btn2 = Math.floor(Math.random()*10 +1);
    	btn3 = Math.floor(Math.random()*10 +1);
    	btn4 = Math.floor(Math.random()*10 +1);

    	// assign values to elements
    	$("#btn1").data("val",btn1);
    	$("#btn2").data("val",btn2);
    	$("#btn3").data("val",btn3);
    	$("#btn4").data("val",btn4);

    	//display random number
    	$(".random-number").text(randomNumber);
    	//display number of wins
    	$("#wins").html("<strong>Wins: " + wins + "</strong>");

    	//display number of losses
    	$("#losses").html("<strong>Losses: " + losses + "</strong>");

    	//display score
    	$("#score").text("Your Total Score: " + score);

    }

    restart();

    $(document).on("click",".button",function(){
        //get crystal value
         score += $(this).data("val"); 
        
        //add to total score
        
        if (score > randomNumber) {
        	//update UI with Lose message
        	$("#result").html("<h2>You lose!!!</h2>");
        	//increment losses by 1
        	losses++;
        	//update UI losses
	    	$("#losses").html("<strong>Losses: " + losses + "</strong>");
        	//set score=0
        	restart();
        }	
        else if (score < randomNumber){
        	//update UI with new score value
    		$("#score").text("Your Total Score: " + score);
        }
        else{
        	//update win/lose message to winner
        	$("#result").html("<h2>You win!!!</h2>");
        	//increment wins by 1
        	wins++;
        	//display number of wins
    		$("#wins").html("<strong>Wins: " + wins + "</strong>");
    		restart();
        }
    })
});//document.ready
  
