// let picture = ["The_Lovers.jpg","Dance(II).jpg"]
// let names = ["Влюбленные", "Танец (II)"]
// let years = ["1928","1910"]

let masterpieces=[
    { picture:"The_Lovers.jpg", name:"Влюбленные", year:"1928", artist:"Рене Магритт", style:"Сюрреализм"},
    { picture:"Dance(II).jpg", name:"Танец (II)", year:"1928", artist:"Анри Матисс", style:"Экспрессионизм"},
    { picture:"", name:"", year:"", artist:"", style:""}
   
]

let btnRow =     document.querySelector(".row")
let btnTable =   document.querySelector(".table")
let gallery =    document.querySelector(".wrapper")

btnRow.onclick = function(){

}
btnTable.onclick = function(){

}

function makePictureRow(){

}
function makePictureTable(){
    //Gallery will be display as a tabble gallery
    let main = document.createElement("div");
    main.classList.add("main");
    gallery.append(main);

    //Making each item of gallery
    let i=0, page=0;
    while (i<masterpieces.length || i<8){

    }


}


makePageCounter();
function makePageCounter (){
    let counter = document.createElement("div");
    counter.classList.add("counter");
    gallery.append(counter);

    let i = 1 // i - number of page
    if(masterpieces.length > 8){ //each page has 8 pictures
        while(masterpieces.length - 8 > 0){ //making pages
            let page = document.createElement("div");
            page.classList.add("page");
            page.innerHTML= `${i}`
            counter.append(page);
            i++
        }
    }
    else{ //if its only 1 page
        let page = document.createElement("div");
        page.classList.add("page");
        page.innerHTML= `${i}`
        counter.append(page);
    }
}