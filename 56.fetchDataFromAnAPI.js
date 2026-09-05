const resultField = document.getElementById("resultField");
const pokemonImage = document.getElementById("pokemonImage");

document.getElementById("inputField").addEventListener("keydown", event => {
    if (event.key === "Enter") {
        fetchPokemon();
    }
});

async function fetchPokemon() {
    pokemonImage.style.display = "none";
    const pokemonName = document.getElementById("inputField").value.trim().toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;


    try {
        const fetchResult = await fetch(url);
        console.log(fetchResult);
        if (!fetchResult.ok) {
            pokemonImage.src=""; //clear source here, otherwise it will keep point to the last fetch
            pokemonImage.alt = "Pokemon does not exist.";
            pokemonImage.style.display = "block";
            throw new Error("Pokemon does not exist.");
        }
        const data = await fetchResult.json();
        console.log(data);
        pokemonImage.src = data.sprites.front_default;

        pokemonImage.style.display = "block";

    } catch (error) {
        console.error(error);
    }
}