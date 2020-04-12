
var playing =false;
var score;
var timeRemaining;
var action;
var correctAnswer;

document.getElementById("startreset").onclick =function(){
    
    if(playing==true){
        location.reload();
      
    }else{
        playing=true
             //set score to 0
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;
       
          //show countdown box
          show("timeremaining");
        timeRemaining = 60;
        document.getElementById("timeRemaining").innerHTML = timeRemaining;
        hide("gameover");
       
        document.getElementById("startreset").innerHTML = "Reset Game";
        countDown();
        generateQA();
        
    }
    }
//Clicking on the answer box
for(i=1; i<5; i++){
  document.getElementById("box"+i).onclick = function(){
        if(playing == true){
            //correct Answer
            if(this.innerHTML == correctAnswer){
                score ++;
                document.getElementById("scoreValue").innerHTML = score;
                show("correct");
                hide("wrong");
    
                setTimeout(function (){
                    hide("correct");
                },1000);
    
                generateQA();
            }else{ show("wrong");
            hide("correct");
            setTimeout(function (){
                hide("wrong");
            },1000);
                     
        }
    
            }
    
}
}


 function countDown(){
  action = setInterval(function(){
          timeRemaining -=1;
          document.getElementById("timeRemaining").innerHTML = timeRemaining;
        if(timeRemaining ==0){
        
            stopCountdown();
            show("gameover");
        hide("timeremaining");
        document.getElementById("gameover").innerHTML = "<p>Game over.<p><p>Your score is "+score+"</p>";
          hide("correct");
          hide("wrong");
          playing = false;
          document.getElementById("startreset").innerHTML = "Start Game";
        }

      }
    
    
    , 1000);   
 }


 function stopCountdown(){
     clearInterval(action);
 }

 function show(Id){
     document.getElementById(Id).style.display = "block";
 }
 
 function hide(Id){
    document.getElementById(Id).style.display = "none";
}

function generateQA(){
    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());
    correctAnswer = x*y ;
    document.getElementById("question").innerHTML = x +"x" + y;
var correctPosition = 1 + Math.round(3*Math.random());
document.getElementById("box"+correctPosition).innerHTML=correctAnswer; 
var answers = [correctAnswer];


//wrongAnswer
for( i=1; i<5; i++){
if (i != correctPosition){

    var wrongAnswer;
    do{wrongAnswer = (1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random()))
        ;
     }while(answers.indexOf(wrongAnswer) > -1)
    
     
document.getElementById("box" + i).innerHTML = wrongAnswer;
        answers.push(wrongAnswer);
    }
    }
    
}
 
    //if we are playing
        //reload page
        
    //if we are not playing
        //set score to 0
        //show countdown box
        //reduce time by 1 sec in loops
            //timeleft?
                //yes -> continue
                //no -> gameover
        //change button to reset
        //generate new Q&A
        
//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score
                //show correct box for 1 sec
                //generte new Q&A
            //no
                //show try again box for 1 sec