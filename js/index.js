const main = document.querySelector('.main');
const a2hs = document.querySelector('.promo');
const a2hsbtn = document.querySelector('.bt');
const loader = document.querySelector('.loader');
const headlinein = document.querySelector('.headlineIn');
let deferredPrompt;
var cursor;
var i = 0;
var yu;
let options = {
  root: null,
  rootMargins: '0px',
  threshold: 0.5

};

window.addEventListener('load', async () => {
  const observer = new IntersectionObserver(handleIntersect, options);
  try {
    observer.observe(document.querySelector('.foot'));
  } catch (err) {
    console.log('observer error');
  }
  document.querySelector('.js-nav').addEventListener('click', () => {
    document.querySelector('ul').classList.toggle('slide');
  });
  await getdata();
  loader.style.display = 'none';
  document.querySelector('.indexbody').style.overflowY = 'auto';



  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    showAddToHomeScreen();
  });

});







async function getdata(yu = 0) {
  const res = await fetch('/games.json')
    .catch(error => {
      console.log('Looks like there was a problem: \n', error);
    });
  const json = await res.json();
  try {
    while (i < 20 + yu) {
      const div = document.createElement('div');
      div.setAttribute('class', 'box');
      div.innerHTML = `<a href=/pages/play.html?s=${json[i].link}><img src=${json[i].thumb} alt=${json[i].title}_logo></a>
                <h2>${json[i].title}</h2><hr>
                <p>category :</p><a class=category href="/pages/category.html?cat=${json[i].category}">${json[i].category}</a><br>
                <a href=/pages/play.html?s=${json[i].link}>Play</a>`
      main.append(div);
      i++;
      cursor = i;
    }
  } catch (err) {
    console.log("no problem contact company", err)
  }

}

function handleIntersect(entries) {
  if (entries[0].isIntersecting) {
    getdata(cursor);
  }
}

function showAddToHomeScreen() {
  a2hs.style.display = 'block';
  loader.style.top = '50%';
  headlinein.style.marginTop = '0px';
  a2hsbtn.addEventListener('click', addToHomeScreen);
}

function addToHomeScreen() {
  a2hs.style.display = 'none';
  loader.style.top = '40%';
  headlinein.style.marginTop = '140px';
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(function (choiceResult) {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    deferredPrompt = null;
  });
}
