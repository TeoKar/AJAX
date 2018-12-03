'use strict';

const nappi = document.querySelector('#hakunappi');
let i;
const body = document.querySelector('body');
const node = document.querySelector('.loop');

nappi.addEventListener('click', (evt) => {
    i = 0;
    const hakuTulos = document.querySelector('#hakuteksti').value;
    fetch('http://api.tvmaze.com/search/shows?q=' + hakuTulos).then(function (vastaus) {
        return vastaus.json();
    }).then(function (json) {
        naytaKuva(json);
    }).catch(function (error) {
        console.log(error);
    });
});

function naytaKuva(haku) {

//Fixed this part of the code
  try {
    node.innerHTML = "";
  }
  catch (err){
    console.log(err);
  }
//end of fixed part


    let x = 0;
    let pituus = Object.keys(haku).length;
    console.log(haku);
    for (i; i < pituus; i++) {
        const d = document.createElement('div');
        const p = document.createElement('p');
        const i = document.createElement('img');
        const f = document.createElement('figcaption');
        const a = document.createElement('a');

        const nimi = haku[x].show.name;
        const kuvaus = haku[x].show.summary;
        const urli = haku[x].show.officialSite;

        try {
            const kuva = haku[x].show.image.medium;
            i.src = kuva;
        } catch (err) {
            console.log(err);
            i.src = "404kuva/not-found.png";
        }
        x++;

        d.classList.add("hakutulos");
        p.classList.add("otsikko");
        p.innerHTML = nimi;
        f.innerHTML = kuvaus;
        a.innerHTML = urli;
        a.href = urli;

        node.appendChild(d);
        d.appendChild(p);
        d.appendChild(i);
        d.appendChild(f);
        d.appendChild(a);


        /* document.querySelector('a').href = urli;
         document.querySelector('a').innerHTML = urli;
         document.querySelector('img').src = kuva;
         document.querySelector('img').alt = nimi;
         document.querySelector('figcaption').innerText = kuvaus;*/

    }
}
