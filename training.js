class pkmn{
    constructor(starter,evol,final, DOMelem, evolLevel = [31 ,51]){
        this.exp = 0
        this.step = 1
        this.level = 1
        this.starter = starter
        this.evol = evol
        this.final = final        
        this.dom = DOMelem
        this.evolLevel = evolLevel
        this.totalExp = 0
        this.winPoint = 50
    }

    getPkmn(step = this.step){
        switch(step){
            case 1 : 
                return this.starter
            case 2 :
                return this.evol
            case 3 : 
                return this.final
        }
    }

    earnXP(value){
        var change = false
        this.exp += value
        this.totalExp += value
        while(this.exp >= 1){
            this.exp -= 1
            this.level++
          
        }
        change = this.evolve()
        this.updateAll(change)
    }

    evolve(){
        if(this.level >= this.evolLevel[1] && this.step == 2){
            this.step = 3
            return true
        }
        else if (this.level >= this.evolLevel[0] && this.step == 1){
            this.step = 2
            return true
        }
        return false
    }

    updateAll(evolution, start = false){
        const pokemon = this.dom.children[0].children[0]
        const name = this.dom.children[1].children[0]
        const lvl = this.dom.children[1].children[1]
        const bar = this.dom.getElementsByClassName("hp-bar")[0]
        pokemon.className = `pkmn-level-${this.step}`
        if(evolution){
            this.evolutionVisu()
        }
        if(start)
            pokemon.src = `assets/sprites/${this.getPkmn().img}.gif`
        name.textContent = this.getPkmn().name
        bar.style.width = `${(this.totalExp/this.winPoint)*300}px`
        lvl.textContent = `:L${this.level}`
    }


    evolutionVisu(){
        const pokemon = this.dom.children[0].children[0]
        const pkmnminus = this.getPkmn(this.step-1)
        const pkmn = this.getPkmn()
        const text = document.getElementById('text-zone')

       var value = 500
       setTimeout(() => { 
            pokemon.className = `pkmn-level-${this.step-1}`
            pokemon.src = `assets/sprites/${pkmnminus.img}.gif`
            text.style.display = "block"
            text.children[0].textContent = `Nani ??!!  ${pkmnminus.name} evolue !!`
        }, 10);
       setTimeout(() => { 
            pokemon.className = `pkmn-level-${this.step}`
            pokemon.src = `assets/sprites/${pkmn.img}.gif`
       }, value*1);
        setTimeout(() => { 
            pokemon.className = `pkmn-level-${this.step-1}`
            pokemon.src = `assets/sprites/${pkmnminus.img}.gif`
        }, value*2);
       setTimeout(() => { 
            pokemon.className = `pkmn-level-${this.step}`
            pokemon.src = `assets/sprites/${pkmn.img}.gif`
        }, value*3);
        setTimeout(() => { 
            pokemon.className = `pkmn-level-${this.step-1}`
            pokemon.src = `assets/sprites/${pkmnminus.img}.gif`
        }, value*4);
       setTimeout(() => { 
            pokemon.className = `pkmn-level-${this.step}`
            pokemon.src = `assets/sprites/${pkmn.img}.gif`
        }, value*5);
        setTimeout(() => { 
            pokemon.className = `pkmn-level-${this.step-1}`
            pokemon.src = `assets/sprites/${pkmnminus.img}.gif`
        }, value*6);
       setTimeout(() => { 
            pokemon.className = `pkmn-level-${this.step}`
            pokemon.src = `assets/sprites/${pkmn.img}.gif`
        }, value*7);
        setTimeout(() => { 
            pokemon.className = `pkmn-level-${this.step-1}`
            pokemon.src = `assets/sprites/${pkmnminus.img}.gif`
        }, value*8);
       setTimeout(() => { 
            pokemon.className = `pkmn-level-${this.step}`
            pokemon.src = `assets/sprites/${pkmn.img}.gif`
            text.style.display = "none"
        }, value*9);

        
    }
}

const trainb = document.getElementById("train-blue")
const trainr = document.getElementById("train-red")

var carapuce = {name : "Minidraco", img: "Dratini"}
var carabaffe = {name : "Draco", img: "Dragonair"}
var tortank = {name : "Dracolosse", img: "Dragonite"}

var blue = new pkmn(carapuce,carabaffe,tortank, trainb)

var salameche = {name : "Salameche", img: "Charmander"}
var reptincel = {name : "Reptincel", img: "Charmeleon"}
var dracofeu = {name : "Dracofeu", img: "Charizard"}

var red = new pkmn(salameche,reptincel,dracofeu, trainr)

blue.updateAll(false,true)
red.updateAll(false,true)



window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    keyStr = String.fromCharCode(key)
    switch(keyStr){
        case 'A':
            red.earnXP(1)
            break
        case 'Z':
            red.earnXP(2)
            break
        case 'E':
            red.earnXP(5)
            break
        case 'R':
            red.earnXP(10)
            break
        case 'U':           
            blue.earnXP(1)
            break 
        case 'I':           
            blue.earnXP(2)
            break 
        case 'O':
            blue.earnXP(5)
            break
        case 'P':
            blue.earnXP(10)
            break
    }
}