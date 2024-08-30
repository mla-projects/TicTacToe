let turn="x";
let box=document.getElementsByClassName("x")
let resetButton=document.getElementById("reset")
gameover=false
// console.log(box)
Array.from(box).forEach((e)=>{
    e.addEventListener("click",(event)=>{
        // console.log(event)
        if(event.target.childNodes[0].innerText==="")
        {
            if (turn==="x")
            {
                event.target.childNodes[0].innerText="X"
            }
            else{
                event.target.childNodes[0].innerText="0"
            }
            checkWin()
            if(!gameover)
            {
                
                changeTurn()
                document.getElementsByClassName("info")[0].innerText="turn for " + turn
            }

        }
        else{
            alert("this box is already filled")
        }

    })
})

function changeTurn()
{
    if(turn==="x")
    {
        turn="y"
    }
    else{
        turn="x"
    }
}

function checkWin()
{
   let wins=[
    [0, 1, 2, 5, 5, 0],  // row 1
    [3, 4, 5, 5, 15, 0], // row 2
    [6, 7, 8, 5, 25, 0], // row 3
    [0, 3, 6, -5, 15, 90], // col 1
    [1, 4, 7, 5, 15, 90], // col 2
    [2, 5, 8, 15, 15, 90], // col 3
    [0, 4, 8, 5, 15, 45], // diag 1
    [2, 4, 6, 5, 15, 135] // diag 2
   ]
   let boxspan=document.getElementsByClassName("boxtext")
   wins.forEach(e=>{
    {
        if((boxspan[e[0]].innerText===boxspan[e[1]].innerText) && (boxspan[e[2]].innerText===boxspan[e[1]].innerText) && boxspan[e[0]].innerText!="")
        {
            document.getElementsByClassName("info")[0].innerText=turn +" " +"won"
            document.getElementsByTagName("img")[0].style.width="200px"
            let line = document.getElementsByClassName("line")[0];
            line.style.width="20vw"
            line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            // console.log(document.getElementsByTagName[0])
            gameover=true
        }   
       }
   })

}
resetButton.addEventListener("click",()=>{
    Array.from(document.getElementsByClassName("boxtext")).forEach((e)=>{e.innerText=""})
    turn="x"
    gameover=false
    document.getElementsByTagName("img")[0].style.width="0px"
    document.getElementsByClassName("info")[0].innerText="turn for " + turn
    let line = document.getElementsByClassName("line")[0];
    line.style.width="0"

})