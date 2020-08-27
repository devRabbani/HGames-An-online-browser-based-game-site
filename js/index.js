var main = document.querySelector('.main');
var cursor;
var i = 0;
var yu;

let options = {
    root: null,
    rootMargins: '0px',
    threshold: 0.5

};
const observer = new IntersectionObserver(handleIntersect, options);
try{observer.observe(document.querySelector('.foot'));}
catch(err){console.log('observer error');}
getdata();

document.querySelector('.js-nav').addEventListener('click',()=>{
    document.querySelector('ul').classList.toggle('slide');
})

async function getdata(yu = 0) {
    const res = await fetch('/games.json')
        .catch(error => {
            console.log('Looks like there was a problem: \n', error);
        });
    const json = await res.json();
    try{
        while (i < 20 + yu) {
            const div = document.createElement('div');
            div.setAttribute('class', 'box');
            div.innerHTML = `<a href=/play.html?s=${json[i].link}><img src=${json[i].thumb}></a>
                <h2>${json[i].title}</h2><hr>
                <p>category :</p><a class=category href="category.html?cat=${json[i].category}">${json[i].category}</a><br>
                <a href=/play.html?s=${json[i].link}>Play</a>`
            main.append(div);
            i++;
            cursor = i;
        }
    }
    catch(err){
      console.log("no problem contact company",err)
    }
    
}

function handleIntersect(entries) {
    // if (entries[0].isIntersecting) {
    //     getdata(cursor);
    // }
    console.log('gud');
}

