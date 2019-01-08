let dragoniteSkill = [
    new Skill("Ultralaser", 60, 8),
    new Skill("Fatal Foudre", 50, 7),
    new Skill("Colere", 40, 6),
    new Skill("Dracogriffe", 30, 4)
]
let dragonite = new Pokemon("Dracolosse", 149, 200, 15,15 ,dragoniteSkill, "dragonite.gif")
let florizzarSkill = [
    new Skill("Ultralaser", 60, 8),
    new Skill("Fatal Foudre", 50, 7),
    new Skill("Colere", 40, 6),
    new Skill("Dracogriffe", 30, 4)
]
let florizzare = new Pokemon("Florizzare", 003, 200, 15,15 ,florizzarSkill, "003b.gif")


const enPkmnZoneImg = document.getElementById("en-pokemon-zone")
const eninfoZone = document.getElementById(`en-info-zone`)
const enhpValue = eninfoZone.getElementsByClassName("hp-value")[0]
const enhpBar = eninfoZone.getElementsByClassName("hp-bar")[0]
const enpkmnName = eninfoZone.getElementsByClassName("pkmn-name")[0]

const plPkmnZoneImg = document.getElementById("pl-pokemon-zone")
const plinfoZone = document.getElementById(`pl-info-zone`)
const plhpValue = plinfoZone.getElementsByClassName("hp-value")[0]
const plhpBar = plinfoZone.getElementsByClassName("hp-bar")[0]
const plpkmnName = plinfoZone.getElementsByClassName("pkmn-name")[0]


const teamRed = [florizzare]
const teamBlue = [dragonite]
let red = new Trainer("Red", teamRed, plhpBar, plpkmnName, plhpValue, plPkmnZoneImg)
let blue = new Trainer("Blue", teamBlue, enhpBar, enpkmnName, enhpValue, enPkmnZoneImg)

red.updatePokemonZone()
red.udpateInfoZone()
blue.updatePokemonZone()
blue.udpateInfoZone()

// updateTextZone(blue.currentPkmn, blue.currentPkmn.getSkill(8))
// blue.currentPokemonAttak(red.currentPkmn, blue.currentPkmn.getSkill(8))
// red.udpateInfoZone()


function updateTextZone(pkmn, skill){
    const zone = document.getElementById("text-zone").children[0]
    zone.textContent = `${pkmn.name.toUpperCase()} lance ${skill.name.toUpperCase()}`
    setTimeout(function(){ zone.textContent = "En attente de connexion ..." }, 5000);
}

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    switch(key){
        case 65:
        updateTextZone(blue.currentPkmn, blue.currentPkmn.getSkill(8))
        blue.currentPokemonAttak(red.currentPkmn, blue.currentPkmn.getSkill(8))
        red.udpateInfoZone()
        break
    }
 }