var main = document.querySelector('.main');
var cursor;
var i = 0;
var yu;
// window.addEventListener('load', async () => {
// console.log('linked');
// await getdata();
// });

// async function getdata(){
//     const res = await fetch('/games.json')
//     .catch(error=> {
//     console.log('Looks like there was a problem: \n', error);
//    });
//     const json= await res.json();
//     main.innerHTML=json.map((game,i)=>{
//         if (i<50){
//             return `<div class=box>
//                   <a href=/play.html?s=${game.link}><img src=${game.thumb}></a>
//                    </div>`
//         }            
//     }).join('\n')

// };

async function getdata(yu = 0) {
    const res = await fetch('/games.json')
        .catch(error => {
            console.log('Looks like there was a problem: \n', error);
        });
    const json = await res.json();
    while (i < 20 + yu) {
        const div = document.createElement('div');
        div.setAttribute('class', 'box');
        div.innerHTML = `<a href=/play.html?s=${json[i].link}><img src=${json[i].thumb}></a>
            <h2>${json[i].title}</h2>
            <a href="#">${json[i].category}</a><br>
            <a href=/play.html?s=${json[i].link}>Play</a>`
        main.append(div);
        i++;
        cursor = i;
    }
}

getdata();
console.log(cursor, i);
function scrollHandle(){
    const {scrollTop,scrollHeight,clientHeight}=document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight-5) {
        getdata(cursor);
    }
}
window.addEventListener('scroll', () => {
    scrollHandle();
window.addEventListener('touchmove', () => {
    scrollHandle();
})
