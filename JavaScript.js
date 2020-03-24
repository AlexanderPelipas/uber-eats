/*﻿let imgs = document.querySelectorAll(".card-image > img");
imgs.forEach(function (img) {
    img.src = "img/Spin.gif";
})

let cardImage = document.querySelectorAll(".card-image");
let title = document.querySelectorAll(".title");
let typePrice = document.querySelectorAll(".item");
let colBtn = document.querySelector(".col-btn");
let showMoreBtn = document.querySelector(".showMore");
let divRow = document.querySelector("main .row:last-child");
let itemsArr;


function getContent(data) {
    for (i = 0; i < imgs.length; i++) {
        imgs[i].src = data.items[i].img;
        title[i].innerHTML = data.items[i].title;
        typePrice[i].innerHTML = `${data.items[i]["price"]} • ${data.items[i]["type"]}`;
        cardImage[i].style.overflow = "hidden";
    }
}


fetch("https://ubereats-demo-api.herokuapp.com/v1/places?offset=1&limit=11")
    .then(res => res.json())
    .then(data => {
        getContent(data);
        itemsArr = data.items;
    });



showMoreBtn.addEventListener("click", getNewContent);

function getNewContent() {
    colBtn.remove();
    for (i = imgs.length; i < itemsArr.length; i++) {
        let col = `
                    <div class="col">
                            <a href="#" class="card">
                                <div class="card-image">
                                    <img src="${itemsArr[i].img}" alt="Image" />
                                    <div class="card-image-heart">
                                        <img src="img/Heart.png" />
                                    </div>
                                </div>
                                <h3 class="title">${itemsArr[i].title}</h3>
                                <div class="item">${itemsArr[i]["price"]} • ${itemsArr[i]["type"]}</div>
                                <div class="minute">
                                    30 - 40 Мин.
                                    <span class="ins">
                                        4.9<img src="img/Star.svg" />(200+)
                                    </span>
                                </div>
                            </a>
                        </div>
        `
        let divCol = document.createRange().createContextualFragment(col);
        divRow.append(divCol);
        cardImage = document.querySelectorAll(".card-image");
        cardImage[i].style.overflow = "hidden";
    }
    
}
*/
