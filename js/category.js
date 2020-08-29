var main = document.querySelector('.main');
var g = location.search;
if(g==''){
    document.querySelector('.cathide').style.display="none";
}
if(g.split('=')[0]=='?cat'){
    catupdate();
}
if(g.split('=')[0]=='?tag'){
    tagupdate();
}
document.querySelector('.js-nav').addEventListener('click',()=>{
    document.querySelector('ul').classList.toggle('slide');
})

var cats=["Physics", "Kids", "Brain", "Boys", "Highscore", "Endless Runner", "Christmas", "Avoid", "Animals", "Arcade", "Matching", "Cars", "Card", "Timing", "Platformer", "Skill", "Simulation", "Adventure", "Zombie", "Puzzle", "Bubble Shooter", "Educational", "Cooking", "Action", "Fun", "Family", "Cartoon", "Basketball", "Football", "Driving", "Sports", "Cute", "Painting", "Strategy", "Box2D", "Halloween", "Tower Defense", "Surgery", "Celebrity", "Mahjong", "Princess", "Dress Up", "Doll", "Decorating", "Makeover", "Make Up", "Brai", "Cognitive", "Hidden Objects", "Shooting", "Rapunzel", "Avoi", "Angela", "Winx", "Minions", "Avo", "Sofia", "Cut", "Wedding", "Love", "Job", "Baby", "Pou", "Monster high", "Animal", "Dog", "Barbie", "Pregnant"];
document.querySelector('.catbox').innerHTML=cats.map(e=>{
    return `<a href=?tag=${e}>${e}</a>`
})

function sero(element){
    var tags=element.tags.split(',');
    for (let index = 0; index < tags.length; index++) {
        if(g.split('=')[1].toUpperCase == tags[index].toUpperCase){
            return true;
        }       
    }
}

async function tagupdate() {
    const res = await fetch('/games.json');
    const json = await res.json();
    const result = json.filter(sero);
    main.innerHTML = result.map(game => {
        return `<div class=box>
                 <img src=${game.thumb}>
                 <h2>${game.title}</h2><hr>
                 <p>category :</p><a class=category href="#">${game.category}</a><br>
                 <a href=/play.html?s=${game.link}>Play</a>
                 </div>`
    }).join('\n')
    document.querySelector('.headlineCa').scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
    console.log('tagupdate done');
}


async function catupdate() {
    const res = await fetch('/games.json');
    const json = await res.json();
    const result = json.filter(json => json.category == g.split('=')[1]);
    main.innerHTML = result.map(game => {
        return `<div class=box>
                 <img src=${game.thumb}>
                 <h2>${game.title}</h2><hr>
                 <p>category :</p><a class=category href="#">${game.category}</a><br>
                 <a href=/play.html?s=${game.link}>Play</a>
                 </div>`
    }).join('\n')
    document.querySelector('.headlineCa').scrollIntoView({
        block: "start",
        behavior: "smooth",
    });
    console.log('catupdate done');
}

