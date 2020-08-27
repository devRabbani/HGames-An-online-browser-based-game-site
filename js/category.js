var main = document.querySelector('.main');
var g = location.search;
console.log(g);
if(g==''){
    document.querySelector('.cathide').style.display="none";
}
else{
    apdate();
}

var cats=['other','shooters','puzzles','adventures','racing','sports','girls','strategy',];
document.querySelector('.catbox').innerHTML=cats.map(e=>{
    return `<a href=?cat=${e}>${e}</a>`
})


async function apdate(gener) {
    console.log(gener);
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
}
