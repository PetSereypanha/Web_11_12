// add active to left button
const ative = document.querySelectorAll(".left__button span")
for(let i = 0; i < ative.length; i++){
    ative[i].addEventListener("click", function(){
        const atgl = document.querySelector(".active__gl")
        atgl.className = atgl.className.replace("active__gl","")
        ative[i].className = "active__gl";
        // console.log(ative[i])
    })
}

const content = document.querySelector(".content");

ative[1].addEventListener("click", function(){
    content.classList.add("list");
})

ative[0].addEventListener("click", function(){
    content.classList.remove("list");
})

// add active to right button
const right = document.querySelectorAll(".right__button a")
for(let i = 0; i < right.length; i++){
    right[i].addEventListener("click", function(){
        const atgr = document.querySelector(".active__bt")
        atgr.className = atgr.className.replace("active__bt","")
        right[i].className = "active__bt";
        // console.log(right[i])
    })
}

const cards = document.querySelectorAll(".card");

// console.log(cards);

right[0].addEventListener("click", function(){
    for(let i = 0; i < cards.length; i++){
      if(
        cards[i].getAttribute("name") === "Nature" ||
        cards[i].getAttribute("name") === "Temple" ||
        cards[i].getAttribute("name") === "People" ||
        cards[i].getAttribute("name") === "Animal" ||
        cards[i].getAttribute("name") === "Food"
      ){
        cards[i].style.display = 'flex';
      }else{
        cards[i].style.display = 'none';
      }
    }
  });

right[1].addEventListener("click", function(){
for(let i = 0; i < cards.length; i++){
    if(cards[i].getAttribute("name") === "Nature"){
    cards[i].style.display = 'flex';
    }else{
    cards[i].style.display = 'none';
    }
}
});

right[2].addEventListener("click", function(){
    for(let i = 0; i < cards.length; i++){
        if(cards[i].getAttribute("name") === "Temple"){
        cards[i].style.display = 'flex';
        }else{
        cards[i].style.display = 'none';
        }
    }
});

right[3].addEventListener("click", function(){
    for(let i = 0; i < cards.length; i++){
        if(cards[i].getAttribute("name") === "People"){
        cards[i].style.display = 'flex';
        }else{
        cards[i].style.display = 'none';
        }
    }
});

right[4].addEventListener("click", function(){
    for(let i = 0; i < cards.length; i++){
        if(cards[i].getAttribute("name") === "Animal"){
        cards[i].style.display = 'flex';
        }else{
        cards[i].style.display = 'none';
        }
    }
});

right[5].addEventListener("click", function(){
    for(let i = 0; i < cards.length; i++){
        if(cards[i].getAttribute("name") === "Food"){
        cards[i].style.display = 'flex';
        }else{
        cards[i].style.display = 'none';
        }
    }
});