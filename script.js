// 1->rock
// 2->paper
// 3->scissors

let hasUserScores=localStorage.getItem("userScore");
if(!hasUserScores){
    localStorage.setItem("userScore",0);
}
let hasPCScore=localStorage.getItem("pcScore");
if(!hasPCScore){
    localStorage.setItem("pcScore",0);
}

document.getElementById('userScore').innerHTML=localStorage.getItem("userScore");
document.getElementById('pcScore').innerHTML=localStorage.getItem("pcScore");

let mappingOfImages={
    1:'rock',
    2:'paper',
    3:'scissor'
}
let mappingOfColors={
    1:'#0074B6',
    3:'#BD00FF',
    2:'#FFA943'
}

function handleUserPlayed(userPicked){
    userPicked = parseInt(userPicked);
    let pcPicked = Math.random() * 3;
    pcPicked = Math.floor(pcPicked) + 1;
    document.getElementById("userPickedImage").src=`./images/${mappingOfImages[userPicked]}.png`;
    document.getElementById("pcPickedImage").src=`./images/${mappingOfImages[pcPicked]}.png`;

    document.getElementById('userPickedElement').style.border=`16px solid ${mappingOfColors[userPicked]}`;
    document.getElementById('pcPickedElement').style.border=`16px solid ${mappingOfColors[pcPicked]}`;

    document.getElementById('userPickedImage').style.cursor='default';
    document.getElementById('pcPickedImage').style.cursor='default';

    

    document.getElementById('userPickedImage').classList.remove(...document.getElementById('userPickedImage').classList);
    document.getElementById('pcPickedImage').classList.remove(...document.getElementById('pcPickedImage').classList);

    document.getElementById("userPickedImage").classList.add(`${mappingOfImages[userPicked]}Image`);
    document.getElementById("pcPickedImage").classList.add(`${mappingOfImages[pcPicked]}Image`);
    document.getElementById("wonStatusContainer").classList.toggle('hidden');
    document.getElementById("playContainer").classList.add('hidden');

    document.getElementById("choiceContainer").style.paddingLeft='20vw';
    document.getElementById("choiceContainer").style.paddingRight='25vw';

    document.getElementById('green1').style.visibility='hidden';
    document.getElementById('green2').style.visibility='hidden';
    document.getElementById('green3').style.visibility='hidden';
    document.getElementById('green4').style.visibility='hidden';
    document.getElementById('green5').style.visibility='hidden';
    document.getElementById('green6').style.visibility='hidden';

    if(userPicked===pcPicked){
        // console.log("MATH TIE");
        document.getElementById('wonMessage').innerHTML='TIE UP';
        document.getElementById('againstPCText').innerHTML='';
        document.getElementById('playAgainButton').innerText = 'REPLAY';
        document.getElementById("nextButton").style.display='none';
    }
    else{
        if((userPicked===1 && pcPicked===3) || (userPicked===2 && pcPicked===1) || (userPicked===3 && pcPicked===2)){
            // console.log("USER WON");
            let prevUserScore=localStorage.getItem("userScore");
            prevUserScore=parseInt(prevUserScore);
            localStorage.setItem('userScore',prevUserScore+1);

            document.getElementById('userScore').innerHTML=localStorage.getItem("userScore");
            document.getElementById('wonMessage').innerHTML='YOU WON';

            document.getElementById("nextButton").style.display='block';

            setTimeout(()=>{
                document.getElementById('green1').style.visibility='visible';
            },800)
            setTimeout(()=>{
                document.getElementById('green2').style.visibility='visible';
            },1600)
            setTimeout(()=>{
                document.getElementById('green3').style.visibility='visible';
            },2400)
        }
        else{
            // console.log("PC WON");
            let prevPcScore=localStorage.getItem("pcScore");
            prevPcScore=parseInt(prevPcScore);
            localStorage.setItem('pcScore',prevPcScore+1);

            document.getElementById('pcScore').innerHTML=localStorage.getItem("pcScore");
            document.getElementById('wonMessage').innerHTML='YOU LOST';

            document.getElementById("nextButton").style.display='none';
            
            setTimeout(()=>{
                document.getElementById('green4').style.visibility='visible';
            },800)
            setTimeout(()=>{
                document.getElementById('green5').style.visibility='visible';
            },1600)
            setTimeout(()=>{
                document.getElementById('green6').style.visibility='visible';
            },2400)
        }
        document.getElementById('againstPCText').innerHTML='AGAINST PC';
        document.getElementById('playAgainButton').innerText = 'PLAY AGAIN';
    }
}

function handlePlayAgain(){
    document.getElementById("nextButton").style.display='none';
    document.getElementById("wonStatusContainer").classList.add('hidden');
    document.getElementById("playContainer").classList.toggle('hidden');
    document.getElementById("choiceContainer").style.paddingLeft='40vw';
}

function handleToggleRules(val) {
    const container = document.getElementById("rulesContainer");
    if (val) {
        container.classList.add('hidden');
    } else {
        container.classList.remove('hidden');
    }
}
