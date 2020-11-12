const moduloPokemonAtt = require('./pokemonAtt.js');

const libreria = {
    generatePokemon: function generatePokemon() {
        const max = 4;
        const min = 0;
        const names = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon'];
        const name = names[Math.floor(Math.random() * (max - min + 1) + min)];
        const lifeAttack = moduloPokemonAtt.randomLifeAttack();
        return {
            name: name,
            life: lifeAttack.life,
            attack: lifeAttack.attack
        };
    }
};

module.exports = libreria;