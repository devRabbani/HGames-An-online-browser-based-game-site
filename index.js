console.log('linked');
var main=document.querySelector('.main');
async function apdate(){
    const res = await fetch('https://h5games.online/freegames.json');
    const json= await res.json();
    main.innerHTML=json.map(game=>{
        return `<div class=box>
        <a href=/play.html?s=${game.link}><img src=${game.thumb}></a>
        </div>`
    }).join('\n')
}
apdate()

