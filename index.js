var main=document.querySelector('.main');
window.addEventListener('load', async () => {
console.log('linked');
await apdate();
});

async function apdate(){
    const res = await fetch('/games.json')
    .catch(error=> {
    console.log('Looks like there was a problem: \n', error);
   });
    const json= await res.json();
    main.innerHTML=json.map((game,i)=>{
        if (i<50){
            return `<div class=box>
                  <a href=/play.html?s=${game.link}><img src=${game.thumb}></a>
                   </div>`
        }            
    }).join('\n')
     
};

