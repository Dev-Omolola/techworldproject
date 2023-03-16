info = [
    {
        id: 1,
        img: 'https://cdn-icons-png.flaticon.com/128/2103/2103650.png',
        h5: 'Artificial Intelligence ',
        p: 'Be introduced to the world of AI'
    },
    {
        id: 2,
        img: 'https://cdn-icons-png.flaticon.com/128/2620/2620971.png',
        h5: 'Programming',
        p: 'Be introduced to the world of AI'
    },
    {
        id: 3,
        img: 'https://cdn-icons-png.flaticon.com/128/954/954574.png',
        h5: 'Web Design',
        p: 'Be introduced to the world of AI'
    },
    {
        id: 4,
        img: 'https://cdn-icons-png.flaticon.com/128/1071/1071928.png',
        h5: 'Graphics Design',
        p: 'Be introduced to the world of AI'
    }
]

infos =[
    
    {
        id1: 'a',
        img1: 'https://img.freepik.com/premium-photo/concept-people-with-young-man-yellow-background_185193-81811.jpg?size=626&ext=jpg&ga=GA1.2.1555084471.1677832965&semt=sph',
        h: 'John Doe',
        s: 'Artificial intelligence Specialist'
    },
    {
        id1:'b' ,
        img1: 'https://img.freepik.com/free-photo/african-american-business-woman-by-window_1303-10869.jpg?size=626&ext=jpg&ga=GA1.2.1555084471.1677832965&semt=sph',
        h: 'Programming',
        s: 'Be introduced to the world of AI'
    },
    {
        id1: 'c',
        img1: 'https://img.freepik.com/free-photo/stylish-black-girl_1157-15553.jpg?size=626&ext=jpg&ga=GA1.2.1555084471.1677832965&semt=sph',
        h: 'Web Design',
        s: 'Be introduced to the world of AI'
    },
    {
        id1: 'd',
        img1: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.1555084471.1677832965&semt=sph',
        h: 'Graphics Design',
        s: 'Be introduced to the world of AI'
    },
    {
        id1: 'e',
        img1: 'https://img.freepik.com/free-photo/shocked-astonished-monochrome-portrait-young-african-american-man-isolated-blue-wall-beautiful-male-model-human-emotions-facial-expression-sales-ad-concept-youth-culture_155003-39871.jpg?size=626&ext=jpg&ga=GA1.2.1555084471.1677832965&semt=sph',
        h: 'Graphics Design',
        s: 'Be introduced to the world of AI'
    },
    {
        id1: 'f',
        img1: 'https://img.freepik.com/free-photo/charismatic-cheerful-attractive-african-american-woman-curly-haircut-wearing-shirt-holding-hands-pockets-confident-outgoing-smiling-talking-pleasant-conversation-feeling-self-assured-relaxed_176420-35345.jpg?size=626&ext=jpg&ga=GA1.2.1555084471.1677832965&semt=sph',
        h: 'Graphics Design',
        s: 'Be introduced to the world of AI'
    }
]



for (let index = 0; index < info.length; index++) {
    const element = info[index];
    document.getElementById("screen").innerHTML += `
     <div class='mm d-flex'>
        <div>
        <img src='${element.img}'/> 
           <h5>${element.h5}</h5>
            <p>${element.p}</p>
            </div>
     </div>
    `
}

for (let index = 0; index < infos.length; index++) {
    const el = infos[index];

        document.getElementById("screen2").innerHTML += `
        <div class='mmm'>
           
          <div class='mmm-div1'> <img src='${el.img1}'/> </div>
            <div class='mmm-div'>  <h5>${el.h}</h5>
                
               <p>${el.s}</p> </div>
            
        </div>
       `
    
}

document.getElementById("close").style.display = "none"


function menu(){
    document.getElementById("close").style.display = "block"
    document.getElementById("open_menu").style.display = "none"
    document.getElementById("menu").style.left = "0"
    document.getElementById("menu").style.backgroundColor ="beige"
}
function closer(){
    document.getElementById("menu").style.left = "-150px"
    document.getElementById("open_menu").style.display = "block";
    document.getElementById("close").style.display = "none"
}

