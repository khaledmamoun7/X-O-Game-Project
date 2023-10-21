let turn = 'x';
let title = document.getElementById('title');
let squares = [];
let xResNum = 0;
let oResNum = 0;
if(sessionStorage.xRes != null ){
    xResNum = parseInt(`${xResNum = sessionStorage.getItem('xRes')}`)
    document.getElementById('xResult').innerHTML = xResNum
}
if(sessionStorage.oRes != null ){
    oResNum = parseInt(`${oResNum = sessionStorage.getItem('oRes')}`)
    document.getElementById('oResult').innerHTML = oResNum
}
function aftWin(num1,num2,num3){
    document.getElementById('item'+num1).style.background = 'rgb(42, 17, 21)'
        document.getElementById('item'+num2).style.background = 'rgb(42, 17, 21)'
        document.getElementById('item'+num3).style.background = 'rgb(42, 17, 21)'
        title.innerHTML = `${document.getElementById('item'+num2).innerHTML} Winner`
        setInterval(function(){title.innerHTML += '.'},1000)
        setTimeout(function(){location.reload()},3000)
        if(document.getElementById('item'+num2).innerHTML == 'X'){
            xResNum += 1
            document.getElementById('xResult').innerHTML = xResNum
            sessionStorage.setItem('xRes',document.getElementById('xResult').innerHTML)
        }else if(document.getElementById('item'+num2).innerHTML == 'O'){
            oResNum += 1
            document.getElementById('oResult').innerHTML = oResNum
            sessionStorage.setItem('oRes',document.getElementById('oResult').innerHTML)
        }
}
function win(){
    for(let i = 1 ;i < 10 ;i++ ){
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[2] != ''){
        aftWin(1,2,3);
    }
    if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != ''){
        aftWin(4,5,6);
    }
    if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != ''){
        aftWin(7,8,9);
    }
    if(squares[1] == squares[4] && squares[4] == squares[7] && squares[4] != ''){
        aftWin(1,4,7);
    }
    if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != ''){
        aftWin(2,5,8);
    }
    if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != ''){
        aftWin(3,6,9);
    }
    if(squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != ''){
        aftWin(1,5,9);
    }
    if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != ''){
        aftWin(3,5,7);
    }
}

function game (id){
    let element = document.getElementById(id)
    if(turn == 'x' && element.innerHTML == '' ){
        element.innerHTML = 'X'
        turn = 'o'
        title.innerHTML = 'O turn'
    }else if(turn == 'o' && element.innerHTML == ''){
        element.innerHTML = 'O'
        turn = 'x'
        title.innerHTML = 'X turn'
    }
    win();
}
document.getElementById('reset').onclick = function(){
    document.getElementById('xResult').innerHTML = 0;
    document.getElementById('oResult').innerHTML = 0;
    sessionStorage.clear();
}
