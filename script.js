var guessnumber=document.getElementById("number")
var result=document.getElementById("result")
var score=document.getElementById("score")
var randomnumber=Math.floor(Math.random()*10)+1
var totalscore=10
function check(){
    if(randomnumber == guessnumber.value){
        console.log("right")
        result.textContent="Congratulations"
        alert("!!! YOU WON !!!")
    }
    else{
        totalscore = totalscore - 1
        score.textContent = "Score : " + totalscore
        result.textContent="Try again"
    }
}