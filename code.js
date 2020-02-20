let plants =[
    { photo:"Aloe-Vera5_1",name:"Pilea Peperomioides",description:"In Mini Prospect Planter",price:"20",amount:"5", extra:["Aloe-Vera5_2","Aloe-Vera5_3"]},
    { photo:"cactus-1",name:"Cactus",description:"Sharp as your humor",price:"30",amount:"0"},
    { photo:"Aloe-Vera5_1",name:"Aloe-Vera",description:"Great small flower for your house",price:"15",amount:"3",extra:["Aloe-Vera5_2","Aloe-Vera5_3"]},
    { photo:"airplant3",name:"Airplant",description:"Composition of three beautiful plants",price:"45",amount:"2"},
    { photo:"gorshok-1",name:"Gorshok",description:"Simple and cheap flowerpot",price:"3",amount:"4"},
    { photo:"is3",name:"Orhideya",description:"Perfect choice for ypur teacher",price:"17",amount:"4"},
    { photo:"th4",name:"Office",description:"The best choice for office",price:"14",amount:"0"},
    { photo:"the-sill_1",name:"Sill",description:"For your girlfriend",price:"20",amount:"2"},
    { photo:"the-sill_2",name:"Another sill",description:"For your boyfriend",price:"25",amount:"1"},
    // { photo:"Aloe-Vera5_1",name:"Pilea Peperomioides",description:"In Mini Prospect Planter",price:"43",amount:"2"},
    // { photo:"Aloe-Vera5_1",name:"Pilea Peperomioides",description:"In Mini Prospect Planter",price:"32",amount:"4"},
    // { photo:"Aloe-Vera5_1",name:"Pilea Peperomioides",description:"In Mini Prospect Planter",price:"43",amount:"2"},
    // { photo:"Aloe-Vera5_1",name:"Pilea Peperomioides",description:"In Mini Prospect Planter",price:"15",amount:"4"},
    // { photo:"Aloe-Vera5_1",name:"Pilea Peperomioides",description:"In Mini Prospect Planter",price:"24",amount:"1"},
    // { photo:"Aloe-Vera5_1",name:"Pilea Peperomioides",description:"In Mini Prospect Planter",price:"43",amount:"0"},
    // { photo:"Aloe-Vera5_1",name:"Pilea Peperomioides",description:"In Mini Prospect Planter",price:"22",amount:"3"},
    // { photo:"Aloe-Vera5_1",name:"Pilea Peperomioides",description:"In Mini Prospect Planter",price:"33",amount:"5"},
    // { photo:"Aloe-Vera5_1",name:"Pilea Peperomioides",description:"In Mini Prospect Planter",price:"31",amount:"3"},
]

let ballColor = ["red", "green", "grey"];

let btnRow =     document.querySelector(".row")
let btnTable =   document.querySelector(".table")
let gallery =    document.querySelector(".wrapper")
let shoppingCart=document.querySelector(".fa-shopping-cart")
let btnAddNew =  document.querySelector('.addnew')
let b_popup =    document.querySelector('.b-popup_marker')

let galleryRow = false;
let galleryTable = false;
let firstTime = false;

//b_popup.classList.toggle('b-popup_show')
//btnAddNew.addEventListener('click', addNewItem)

checkLocalStorge()
// let btnDeleteAll = document.querySelector('.clean_btn');
// btnDeleteAll.addEventListener('click', cleanAll )

if (document.querySelector('.main-cart')!=null){
    makeCartPage()
    let btnDeleteAll = document.querySelector('.clean_btn');
    btnDeleteAll.addEventListener('click', cleanAll )

}

if(btnAddNew!= null){
    btnAddNew.addEventListener('click', addNewItem)
}

if(btnRow != null)
{
    btnRow.onclick = function(){
        let firstpage = 1
        makeRowGallery(firstpage)
    }
    
}

if(btnTable != null)
{
    btnTable.onclick = function(){
        let firstpage = 1
        makeTableGallery(firstpage, plants)
    }    
}

function clearGallery(){
    if(typeof(gallery.children[2]) == 'object'){
        gallery.children[3].remove() //remove counter
        gallery.children[2].remove() //remove gallery
        gallery.children[1].remove() //remove filtration
    }
}

function makeRowGallery(page) {

    galleryRow = true;
    galleryTable = false;

    //firstly we have to clear previous gallery if we have it
    clearGallery()

    //Gallery will be displayed as a row gallery
    let main = document.createElement("div");
    main.classList.add("mainRow");
    gallery.append(main);

     //filtration
     makeFiltration(main)

    //insert pages
    makePageCounter(plants);
    let i=0;
    //pagination
    let pageIs =     document.querySelector(".counter")
    pageIs.onclick = function(event){
        let page = event.target.innerHTML;
        makeRowGallery(page);
    }

    // from which record we will show paintings -> masterpieces[record]
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
        pic.setAttribute('src', `img/MyPlants/${plants[record].photo}.jpg`);
        pic.setAttribute('alt',`${plants[record].name}`)
        img.append(pic);
        let nameAndPrice = document.createElement('div');
        nameAndPrice.classList.add('nameAndYear')
        let picName = document.createElement('h2');
        picName.innerHTML = (`${plants[record].name}`);
        text.addEventListener('click',addToCart)          //Adding to cart
        let picYear = document.createElement('h2');
        picYear.innerHTML = (`$${plants[record].price}`)
        nameAndPrice.append(picName);
        nameAndPrice.append(picYear);
        let autorAndStyle = document.createElement('div');
        autorAndStyle.classList.add('autorAndStyle');
        let picArtist = document.createElement('h3')
        picArtist.innerHTML = (`${plants[record].description}`)
        autorAndStyle.append(picArtist);

        text.append(nameAndPrice);
        text.append(autorAndStyle);
        item.append(img);
        item.append(text);

         //adding uniq id to each object
         if(plants[record].hasOwnProperty('record')==true)
         {
         //plants[record].record = record;
         let id = document.createElement("span")
         id.classList.add("id")
         id.innerHTML = (`${plants[record].record}`)
         item.prepend(id)
         }
        if(plants[record].hasOwnProperty('record')==false)
        {
        plants[record].record = record;
        let id = document.createElement("span")
        id.classList.add("id")
        id.innerHTML = (`${plants[record].record}`)
        item.prepend(id)
        }

        //how many
        checkLocalStorge()
        let amount = document.createElement("span");
        amount.classList.add("amount")
        if(plants[record].amount>0){
            amount.innerHTML=`In stock: ${plants[record].amount}`
        }
        else{amount.innerHTML=`Sold out`}
        item.append(amount)
 
          //If more than one photo
         if(plants[record].extra){
             let switcher = document.createElement('div');
             switcher.classList.add('switcher')
             for(let i=0;i<plants[record].extra.length +1; i++){
                 let ball = document.createElement('div');
                 ball.classList.add('ball');
                 ball.style.backgroundColor = ballColor[i];
                 ball.addEventListener('click', changePhoto)
                 switcher.append(ball)
             }
             switcher.firstChild.classList.add('ball_active')
             item.append(switcher)
         }
        main.append(item)
        i++  
        record++ 
    }
}

function makeTableGallery(page, plants){

    galleryRow = false;
    galleryTable = true;


    //firstly we have to clear previous gallery if we have it
    clearGallery()

    //Gallery will be display as a tabble gallery
    let main = document.createElement("div");
    main.classList.add("main");
    gallery.append(main);

    //filtration
    makeFiltration(main)

    //insert pages
    makePageCounter(plants);
    let i=0;
    //pagination
    let pageIs =     document.querySelector(".counter")
    pageIs.onclick = function(event){
        let page = event.target.innerHTML;
        makeTableGallery(page, plants);
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
         pic.setAttribute('src', `img/MyPlants/${plants[record].photo}.jpg`)
         pic.setAttribute('alt',`${plants[record].name}`)
         img.append(pic);
         let nameAndYear = document.createElement('div');
         nameAndYear.classList.add('nameAndYear')
         let picName = document.createElement('h2');
         picName.innerHTML = (`${plants[record].name}`);
         text.addEventListener('click',addToCart)          //Adding to cart
         let picYear = document.createElement('h2');
         picYear.innerHTML = (`$${plants[record].price}`)
         nameAndYear.append(picName);
         nameAndYear.append(picYear);
         let autorAndStyle = document.createElement('div');
         autorAndStyle.classList.add('autorAndStyle');
         let picArtist = document.createElement('h3')
         picArtist.innerHTML = (`${plants[record].description}`)
         autorAndStyle.append(picArtist);
 
         text.append(nameAndYear);
         text.append(autorAndStyle);
         item.append(img);
         item.append(text);

        //adding uniq id to each object
        if(plants[record].hasOwnProperty('record')==true)
        {
        //plants[record].record = record;
        let id = document.createElement("span")
        id.classList.add("id")
        id.innerHTML = (`${plants[record].record}`)
        item.prepend(id)
        }
        if(plants[record].hasOwnProperty('record')==false){
              plants[record].record = record;
        let id = document.createElement("span")
        id.classList.add("id")
        id.innerHTML = (`${plants[record].record}`)
        item.prepend(id)
        }
        

        //how many
        checkLocalStorge()
        let amount = document.createElement("span");
        amount.classList.add("amount")
        if(plants[record].amount>0){
            amount.innerHTML=`In stock: ${plants[record].amount}`
        }
        else{amount.innerHTML=`Sold out`}
        item.append(amount)

         //If more than one photo
        if(plants[record].extra){
            let switcher = document.createElement('div');
            switcher.classList.add('switcher')
            for(let i=0;i<plants[record].extra.length +1; i++){
                let ball = document.createElement('div');
                ball.classList.add('ball');
                ball.style.backgroundColor = ballColor[i];
                ball.addEventListener('click', changePhoto)
                switcher.append(ball)
            }
            switcher.firstChild.classList.add('ball_active')
            item.append(switcher)
        }
 

         main.append(item)
         i++
         record++  

         console.log(plants)
         console.log(record)
    }
}

function changePhoto(event){
    let target = event.target;
    //firstly remove ball_active
    for (let i=0;i<target.parentNode.childNodes.length;i++){
        target.parentNode.childNodes[i].classList.remove("ball_active")
    }
    //then add ball_active to new choice
    target.classList.add("ball_active")
    //now we changing photo
    let photoNumber = -1;
    for(let i=0;i<target.parentNode.childNodes.length;i++){
        if(target.parentNode.childNodes[i].classList.contains("ball_active")){
            photoNumber=i;
            break;
        }
    }
    let id = target.parentNode.parentNode.firstChild.innerHTML
    console.log(id)
    if(photoNumber==0){
        target.parentNode.parentNode.children[1].firstChild.setAttribute('src', `img/MyPlants/${plants[id].photo}.jpg`)
    }
    else{
        target.parentNode.parentNode.children[1].firstChild.setAttribute('src', `img/MyPlants/${plants[id].extra[photoNumber-1]}.jpg`)
    }
    console.log(photoNumber)
    // console.log(target.parentNode.childNodes)
     console.log(target.parentNode.parentNode.children[1])


}

function addToCart(event){
    let target = event.target
    let id = target.parentNode.parentNode.parentNode.firstChild.innerHTML
    console.log(id)
    if(plants[id].amount==0){
        alert(`Sorry we out of ${plants[id].name}`)
    }
    else{
        addToLocalStorage(id)
    }
    let InStock = target.parentNode.parentNode.parentNode.childNodes[3];
    let changeAmount = parseInt(target.parentNode.parentNode.parentNode.childNodes[3].innerHTML.slice(9)) - 1;
    if(changeAmount>0){
        InStock.innerHTML =`In stock ${changeAmount}`
    }
    else{
        InStock.innerHTML = "Sold out"
    }
    // console.log(InStock)
}

function addToLocalStorage(id){
    let counter = parseInt(shoppingCart.firstChild.innerHTML)
    shoppingCart.firstChild.innerHTML = counter+1;
    plants[id].amount=plants[id].amount-1

    if(localStorage.getItem(id) != undefined){
        localStorage.setItem(id,  +(localStorage.getItem(id)) +1 )
    }
    else{
        localStorage.setItem(id, 1);
    }
}

function makePageCounter (plants){
    let counter = document.createElement("div");
    counter.classList.add("counter");

    gallery.append(counter);

    let i = 1 // i - number of page
    if(plants.length > 8){ //each page has 8 pictures
       // Math.ceil(masterpieces.length/8)
        for(;i<=Math.ceil(plants.length/8);){ //making pages
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

function makeFiltration(main){
    let filtration =    document.createElement('div');
    filtration.classList.add("filtration")
    let filtrPrice =    document.createElement('div');
    filtrPrice.classList.add('filtrPrice')
    filtrPrice.innerHTML="Price ↑"
    let availability =  document.createElement('div');
    availability.classList.add('availability')
    availability.innerHTML="Available"
    let stick =         document.createElement('span');
    stick.classList.add('stick')
    stick.innerHTML=" ↓ "
    filtration.append(filtrPrice);
    filtration.append(stick)
    filtration.append(availability);
    main.before(filtration)
    filtrPrice.addEventListener('click', sortByPriceLow)
    stick.addEventListener('click', sortByPriceHigh)
    availability.addEventListener('click',sortByAvailibility)
}

function sortByPriceLow(){
    plants.sort((a,b)=>a.price>b.price? 1 : -1)
    console.log(plants)
    if(document.querySelector('.wrapper').children[2].className == 'main'){
         makeTableGallery(1, plants)
    }
    else{
        makeRowGallery(1, plants)
    }
}

function sortByPriceHigh(){
    plants.sort((a,b)=>a.price<b.price? 1 : -1)
    if(document.querySelector('.wrapper').children[2].className == 'main'){
        makeTableGallery(1, plants)
   }
   else{
       makeRowGallery(1, plants)
   }
}

function sortByAvailibility(){
    plants = plants.filter(element => element.amount>0);
    if(document.querySelector('.wrapper').children[2].className == 'main'){
        makeTableGallery(1, plants)
   }
   else{
       makeRowGallery(1, plants)
   }
}

function checkLocalStorge(){
    if(localStorage.length>0){
        let totalInCart = 0;
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            let quantity = localStorage.getItem(key);
            totalInCart += parseInt(quantity)
            plants.forEach(element=>{
                if (element.record == key ){
                    element.amount = parseInt(element.amount) - parseInt(quantity)
                }
            })
          }
        shoppingCart.firstChild.innerHTML = totalInCart;
    }
}

function makeCartPage (){
    let content = document.querySelector('.content')
    let totalPriceElement = document.querySelector('.totalPrice')
    let totalPrice = 0;
   // document.querySelector('.amountOfPurcases').innerHTML = localStorage.length
    let totalquantity= 0
    for(let i=0;i<localStorage.length;i++){
        console.log('hey')
        let key = localStorage.key(i);
        console.log(plants)
        console.log(key)
        console.log(plants[key])
        let quantity = localStorage.getItem(key);
                let itemCart    = document.createElement('div')  
                itemCart.classList.add('item-cart')
                let imgCart     = document.createElement('div')
                imgCart.classList.add('img')
                let img         = document.createElement('img')
                img.classList.add('img-cart');
                img.setAttribute('src', `img/MyPlants/${plants[key].photo}.jpg`)
                imgCart.append(img)
                let text        = document.createElement('div')
                text.classList.add('text-cart')
                text.innerHTML = `${plants[key].name}`
                let price       = document.createElement('div');
                price.classList.add('price-cart')
                price.innerHTML = `${plants[key].price}$`
                let amount      = document.createElement('div');
                amount.classList.add('amount-cart');
                amount.innerHTML = `${quantity}`
                itemCart.append(imgCart);
                itemCart.append(text);
                itemCart.append(price);
                itemCart.append(amount)
                content.append(itemCart)
                totalPrice = totalPrice + parseInt(plants[key].price) * quantity
                totalquantity = totalquantity +quantity
    }
    totalPriceElement.innerHTML = `You have to pay ${totalPrice} $`

}

function cleanAll(){
    localStorage.clear();
    let content = document.querySelector('.content')
    console.log(content.children[8])
    while(content.children[0]!=undefined){
        content.lastChild.remove()
    }
    document.querySelector('.amountOfPurcases').innerHTML = '0'
    makeCartPage ()
    
}

function addNewItem(){

    let footer          = document.querySelector('footer')
    let popup           = document.createElement('div')
    popup.classList.add("b-popup")
    let popup_content   = document.createElement('div')
    popup_content.classList.add("b-popup-content")
    let textPU          = document.createElement('div')
    textPU.classList.add('textPU')
    textPU.innerHTML    = 'You can add item'
    let closeBtn        = document.createElement('div')
    closeBtn.classList.add('closeBtn')
    closeBtn.innerHTML  = '<i class="fas fa-times-circle"></i>'
    let form            = document.createElement('form')
    form.classList.add('formAdd')
    form.innerHTML      = '<div class="namePU">Input name</div> <input type="text" class="newName" size="40"> <div class="aboutPU">Description</div> <textarea name="descriptionNew" class="descriptionNew" cols="40" rows="10"></textarea> <div class="pricePU">Price</div> <input type="text" class="priceNewPU"> <div class="amountPU">Amount</div> <input type="text" class="amountNewPU"> <div class="photoPU">Put name of photo. Photo must be in root folder with all other photos</div> <input type="text" class="photoNewPU"><div class="btnAddNewItem">Add</div>'
    textPU.append(closeBtn)
    popup_content.append(textPU)
    popup_content.append(form)
    popup.append(popup_content)
    footer.after(popup)

    closeBtn.firstChild.onclick = function(){
        footer.nextSibling.remove()
    }
    let btnAddNewItem  = document.querySelector(".btnAddNewItem")

    btnAddNewItem.onclick = function(){
        let newName        = document.querySelector('.newName').value 
        let descriptionNew = document.querySelector('.descriptionNew').value 
        let priceNewPU     = document.querySelector('.priceNewPU').value 
        let amountNewPU    = document.querySelector('.amountNewPU').value 
        let photoPU        = document.querySelector('.photoNewPU').value 

        let newItem = new function(){
            this.photo = photoPU;
            this.name  = newName;
            this.description = descriptionNew;
            this.price = priceNewPU;
            this.amount = amountNewPU;
        }
    
        plants.push(newItem)
        console.log(plants)
        //close popup
        footer.nextSibling.remove()
    }
    
}
