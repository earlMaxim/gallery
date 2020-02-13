// let picture = ["The_Lovers.jpg","Dance(II).jpg"]
// let names = ["Влюбленные", "Танец (II)"]
// let years = ["1928","1910"]

let masterpieces=[
    { picture:"The_Lovers.jpg", name:"Влюбленные", year:"1928", artist:"Рене Магритт", style:"Сюрреализм"},
    { picture:"Dance(II).jpg", name:"Танец (II)", year:"1928", artist:"Анри Матисс", style:"Экспрессионизм"},
    { picture:"The_man_in_the_bowler_hat.jpg", name:"Человек в котелке", year:" 1964", artist:"Рене Магритт", style:"Сюрреализм"},
    { picture:"Les_demoiselles_d'Avignon.jpg", name:"Авиньонские девицы", year:"1907", artist:"Пабло Пикассо", style:"Кубизм"},
    // { picture:"Smallworlds", name:"Маленькие миры 4", year:"1922", artist:"Василий Кандинский", style:"Абстракционизм"},
    { picture:"Walk.jpg", name:"Прогулка", year:"1918", artist:"Марк Шагал", style:" Экспрессионизм"},
    { picture:"Suprematist_composition.jpg", name:"Супрематическая композиция", year:"1916", artist:"Казимир Малевич", style:"Супрематизм"},
    { picture:"Cleaver.jpg", name:"Дровосек", year:"1913", artist:"Казимир Малевич", style:"Абстракционизм"},
    { picture:"Mahogany.jpg", name:"Красное дерево", year:"1910", artist:"Пит Мондриан", style:"Импрессионизм"},
    { picture:"Composition_No._3.jpg", name:"Композиция №3", year:"1935", artist:"Пит Мондриан", style:"Абстракционизм"},
    { picture:"Self_Portrait-The_Frame.jpg", name:"Автопортрет - Рамка", year:"1938", artist:"Фрида Кало", style:"Примитивизм"},
    { picture:"The_wedge_red_beat_white.jpg", name:"Клином красным бей белых", year:"1920", artist:"Эль Лисицкий", style:"Супрематизм"},
    { picture:"The_persistence_of_memory.jpg", name:"Постоянство памяти", year:"1931", artist:"Сальвадор Дали", style:"Сюрреализм"},
    { picture:"Crucifixion_Hypercubic_body.jpg", name:"Распятие. Гиперкубическое тело", year:"1954", artist:"Сальвадор Дали", style:"Сюрреализм"},
    { picture:"Lady_with_a_muff.jpg", name:"Дама с муфтой", year:"1916", artist:"Густав Климт", style:"Модерн"},
    { picture:"Goldfish.jpg", name:"Красные рыбки", year:"1912", artist:"Анри Матисс", style:"Экспрессионизм"},
    { picture:"TheTreachery_of_Images.jpg", name:"Вероломство образов (Это не трубка)", year:"1929", artist:"Рене Магритт", style:"Сюрреализм"},
    { picture:"I_and_my_village.jpg", name:"Я и моя деревня", year:"1911", artist:"Марк Шагал", style:"Экспрессионизм"},
    // { picture:"Nightwalks.jpg", name:"Полуночники", year:"1942", artist:"Эдвард Хоппер", style:"Реализм"},
    { picture:"Quiet.jpg", name:"Тихий", year:"1967", artist:"Алекс Колвилл", style:"Реализм"},
    { picture:"No_name.jpg", name:"Без названия", year:"1953", artist:"Марк Ротко", style:"Абстрактный экспрессионизм"},
    { picture:"Spatial_concept-expectation.jpg", name:"Пространственная концепция: ожидание", year:"1964", artist:"Лучо Фонтана", style:"Абстракционизм"},
    { picture:"In_the_car.jpg", name:"В машине", year:"1963", artist:"Рой Лихтенштейн", style:"Поп-арт"},
    { picture:"A_can_of_soup,_Campbells.jpg", name:"Банки с супом Кэмпбеллс", year:"1962", artist:"Энди Уорхол", style:"Поп-арт"},
    { picture:"Diptych_Marilyn.jpg", name:"Диптих Мэрилин", year:"1962", artist:"Энди Уорхол", style:"Поп-арт"},
    { picture:"\"Little men\".Like-minded_people.jpg", name:"\"Человечки\". Единомышленники", year:"1988", artist:"Кит Харинг", style:"Поп-арт"},
    // { picture:"", name:"", year:"", artist:"", style:""}
   
]

let btnRow =     document.querySelector(".row")
let btnTable =   document.querySelector(".table")
let gallery =    document.querySelector(".wrapper")


console.log(gallery)

let galleryRow = false;
let galleryTable = false;

btnRow.onclick = function(){
    let firstpage = 1
    makeRowGallery(firstpage)
}
btnTable.onclick = function(){
    let firstpage = 1
    makeTableGallery(firstpage)
}


function clearGallery(){
    if(typeof(gallery.children[1]) == 'object'){
        gallery.children[2].remove() //remove counter
        gallery.children[1].remove() //remove gallery
    }
}

function makeRowGallery(page) {

    //firstly we have to clear previous gallery if we have it
    clearGallery()

    //Gallery will be displayed as a row gallery
    let main = document.createElement("div");
    main.classList.add("mainRow");
    gallery.append(main);
    //insert pages
    makePageCounter();
    let i=0;
    //pagination
    console.log("page is " + page)
    let pageIs =     document.querySelector(".counter")
    pageIs.onclick = function(event){
        let page = event.target.innerHTML;
        makeRowGallery(page);
    }

    let record = (page-1)*8
    //Making maximum 8 pictures on one page
    while(i<8){
         //Making item of gallery
        let item = document.createElement("div");
        item.classList.add("itemRow");
        let img = document.createElement("div");
        img.classList.add("img");
        let text = document.createElement("div");
        text.classList.add("textRow");
        let pic = document.createElement("img");
        let test =masterpieces[record].picture
        let picAdress = test
        pic.setAttribute('src', `img/${picAdress}`);
        pic.setAttribute('alt',`${masterpieces[record].name}`)
        img.append(pic);
        let nameAndYear = document.createElement('div');
        nameAndYear.classList.add('nameAndYear')
        let picName = document.createElement('h2');
        picName.innerHTML = (`${masterpieces[record].name}`);
        let picYear = document.createElement('h2');
        picYear.innerHTML = (`${masterpieces[record].year}`)
        nameAndYear.append(picName);
        nameAndYear.append(picYear);
        let autorAndStyle = document.createElement('div');
        autorAndStyle.classList.add('autorAndStyle');
        let picArtist = document.createElement('h3')
        picArtist.innerHTML = (`${masterpieces[record].artist}`)
        let picStyle = document.createElement('h4');
        picStyle.innerHTML =(`${masterpieces[record].style}`)
        autorAndStyle.append(picArtist);
        autorAndStyle.append(picStyle);

        text.append(nameAndYear);
        text.append(autorAndStyle);
        item.append(img);
        item.append(text);
        main.append(item)
        i++  
        record++    
    }
}

function makeTableGallery(page){

    //firstly we have to clear previous gallery if we have it
    clearGallery()

    //Gallery will be display as a tabble gallery
    let main = document.createElement("div");
    main.classList.add("main");
    gallery.append(main);
    //insert pages
    makePageCounter();
    let i=0;
    //pagination
    console.log("page is " + page)
    let pageIs =     document.querySelector(".counter")
    pageIs.onclick = function(event){
        let page = event.target.innerHTML;
        makeTableGallery(page);
     }
     // from which record we will show paintings -> masterpieces[record]
     let record = (page-1)*8
    //Making maximum 8 pictures in one page
    while (i<8){
         //Making item of gallery
        let item = document.createElement("div");
        item.classList.add("item");
        let img = document.createElement("div");
        img.classList.add("img");
        let text = document.createElement("div");
        text.classList.add("text");
        let pic = document.createElement("img")
        pic.setAttribute('src', `img/${masterpieces[record].picture}`)
        pic.setAttribute('alt',`${masterpieces[record].name}`)
        img.append(pic);
        let nameAndYear = document.createElement('div');
        nameAndYear.classList.add('nameAndYear')
        let picName = document.createElement('h2');
        picName.innerHTML = (`${masterpieces[record].name}`);
        let picYear = document.createElement('h2');
        picYear.innerHTML = (`${masterpieces[record].year}`)
        nameAndYear.append(picName);
        nameAndYear.append(picYear);
        let autorAndStyle = document.createElement('div');
        autorAndStyle.classList.add('autorAndStyle');
        let picArtist = document.createElement('h3')
        picArtist.innerHTML = (`${masterpieces[record].artist}`)
        let picStyle = document.createElement('h4');
        picStyle.innerHTML =(`${masterpieces[record].style}`)
        autorAndStyle.append(picArtist);
        autorAndStyle.append(picStyle);

        text.append(nameAndYear);
        text.append(autorAndStyle);
        item.append(img);
        item.append(text);
        main.append(item)
        i++
        record++  
    }
}

function makePageCounter (){
    let counter = document.createElement("div");
    counter.classList.add("counter");

    gallery.append(counter);

    let i = 1 // i - number of page
    if(masterpieces.length > 8){ //each page has 8 pictures
       // Math.ceil(masterpieces.length/8)
        for(;i<=Math.ceil(masterpieces.length/8);){ //making pages
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