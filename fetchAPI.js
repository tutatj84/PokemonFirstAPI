window.addEventListener('load', getData);

let getPokemonById = async id => {
    try {
        document.getElementById("pokeImg").removeEventListener("click", getData) //not allow user to click when loading
        document.getElementById("pokeImg").src = "https://cdn.dribbble.com/users/621155/screenshots/2835314/simple_pokeball.gif";
        let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
        let resJson = response.json();
        let data = await resJson;

        resJson.then(() => { //check when load data success to allow user to click
            document.getElementById("pokeImg").src = "https://pokeres.bastionbot.org/images/pokemon/" + id + ".png"
            setTimeout(() => {
                document.getElementById("pokeImg").addEventListener("click", getData);
            }, 0);
            document.getElementById("pokeName").innerText = data.name;
            console.log(data);
        })



    } catch (e) {
        console.log(e);
    }
}

function getData() {
    let idPokemon = Math.floor(Math.random() * 100 + 1);
    getPokemonById(idPokemon);
}