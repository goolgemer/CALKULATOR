let btn = document.getElementsByClassName('button');
let result = document.getElementById('resultt');
let calk = document.getElementById('calk');

function cleaner(){
  result.innerHTML='';
}

function ths(a){
  result.innerHTML=result.innerHTML+a;
  return result.innerHTML;
}


function final(b){
  result.innerHTML=eval(b);
}


function changer(){
  (calk).classList.toggle('change_back');
  for(i=0;i<20;i++){
    btn[i].classList.toggle('change_back');
  }
}


function del(){
result.innerHTML=result.innerHTML.substring(0, result.innerHTML.length-1); 
}