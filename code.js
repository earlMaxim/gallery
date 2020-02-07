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

function makeRowGallery(){

}

makeTableGallery()

function makeTableGallery(){
    //Gallery will be display as a tabble gallery
    let main = document.createElement("div");
    main.classList.add("main");
    gallery.append(main);

    let i=0, page=0;
    //Making maximum 8 pictures on one page
    while (i<masterpieces.length || i<8){
         //Making item of gallery
        let item = document.createElement("div");
        item.classList.add("item");
        let img = document.createElement("div");
        img.classList.add("img");
        let text = document.createElement("div");
        text.classList.add("text");
        let pic = document.createElement("img")
        pic.setAttribute("src", `img/${masterpieces[i].picture}`)
        pic.setAttribute('alt',`${masterpieces[i].name}`)
        img.append(pic);
        let nameAndYear = document.createElement('div');
        item.classList.add('nameAndYear')
        let picName = document.createElement('h2');
        picName.innerHTML = (`${masterpieces[i].name}`);
        let picYear = document.createElement('h2');
        picYear.innerHTML = (`${masterpieces[i].year}`)
        nameAndYear.append(picName);
        nameAndYear.append(picYear);
        let autorAndStyle = document.createElement('div');
        autorAndStyle.classList.add('autorAndStyle');
        let picArtist = document.createElement('h3')
        picArtist.innerHTML = (`${masterpieces[i].artist}`)
        let picStyle = document.createElement('h4');
        picStyle.innerHTML =(`${masterpieces[i].style}`)
        autorAndStyle.append(picArtist);
        autorAndStyle.append(picStyle);

        text.append(nameAndYear);
        text.append(autorAndStyle);
        item.append(img);
        item.append(text);
        main.append(item)
        i++
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