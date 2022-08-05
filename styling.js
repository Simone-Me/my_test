const characterDom = document.getElementById('character');

let url = "https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json";

const fetchAll = url => {
    fetch(url) 
    .then((res) => res.json())
    .then( data => {
        const result = data;
        console.log(result)
        document.getElementById("myBtn").addEventListener("click", displayName);
        function displayName() {
            document.getElementById('input').innerHTML = `${result[0].name}`;
            for (let actor of result) {
              if (actor.name === document.getElementById('input').value) {
                console.log(actor);
                document.getElementById('character').innerHTML = `${actor.actor} <br> House of ${actor.house}`;
              }
            }
          }})
    .catch((error) => {
        console.error(error);
      });
}

fetchAll(url)
