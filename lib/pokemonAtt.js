var libreria = {
    randomLifeAttack: function randomLifeAttack() {
        let max = 100;
        let min = 1;
        const randomLife = Math.floor(Math.random() * (max - min + 1) + min);
        const randomAttack = Math.floor(Math.random() * (max - min + 1) + min);

        return {
            life: randomLife,
            attack: randomAttack
        };
    }
};

module.exports = libreria;