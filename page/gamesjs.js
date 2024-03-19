//os
//game func os
// function get_ele(id){
//   return document.getElementById(id)
// }

function print(code){
  console.log(code)
}

function print_f(code){
  alert(code)
}

function random(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function _ready(){

}
_ready()

//game color#1


let i1_1= 0
function enter1(){
  let cv  = document.getElementById("color_visible")
  let sel = document.getElementById("sel")
  let i1 = document.getElementById("i1")
  let rand= random(1,3)
  let color_G="not"

  if (rand == 1){
    color_G = "красный"
  }
  if (rand == 2){
    color_G = "желтый"
  }
  if (rand == 3){
    color_G = "синий"
  }
  if (sel.value == color_G){
    i1_1+=1
  }
  else{
    i1_1=0
  }
  i1.innerHTML = i1_1
  cv.innerHTML = color_G
  if(i1_1 == 5){
    print_f("ВЫ Выйграли")
  }
  //print_f(sel.value)
  //print_f(rand)
  //if(sel)
}
let m = 0
let healpoint = 3
let oi=0
// games_number
function enter2(){
  let hp     = document.getElementById("hp")
  let om     = document.getElementById("os")
  let i2     = document.getElementById("i2")
  let sel2   = document.getElementById("sel_number")
  let numb_v = document.getElementById("number_visible")
  let randomize = random(1,5)
  if(sel2.value == randomize){
    m+=1
    oi+=1
  }
  else{
    healpoint -=1
  }
  if(healpoint == 0){
    alert("вы проиграли")
    location.reload()
  }
  if(oi == 5){
    print_f("вы выйграли")
  }
  //print_f(randomize)
  hp.innerHTML = healpoint
  numb_v.innerHTML = String(randomize)
  om.innerHTML = m
  i2.innerHTML = oi
}

function hp_p(){
  let om     = document.getElementById("os")
  let hp     = document.getElementById("hp")
  if (Number(om.innerHTML) != 0){
    healpoint+=1
    m-=1
  }
  hp.innerHTML = healpoint
  om.innerHTML = m
}

function i2_p(){
  let i2     = document.getElementById("i2")
  let om     = document.getElementById("os")
  if (Number(om.innerHTML) != 0){
      m-=1
      oi+=1
  }
  if(oi == 5){
    print_f("вы выйграли")
  }
  om.innerHTML = m
  i2.innerHTML = oi
}
