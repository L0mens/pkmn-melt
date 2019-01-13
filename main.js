//Team Blue
let dragoniteSkill = [
    new Skill("Colere", 120, 8),
    new Skill("Fatal Foudre", 110, 7),
    new Skill("Dracogriffe", 80, 6),
    new Skill("Ouragan", 40, 4)
]
let dragonite = new Pokemon("Dracolosse", 149, 200, 15,15 ,dragoniteSkill, "dragonite.gif")
let gyaradosSkill = [
    new Skill("Ultralaser", 150, 8),
    new Skill("Hydrocanon", 110, 7),
    new Skill("Ebullition", 80, 6),
    new Skill("Crocs givre", 65, 5)
]
let gyarados = new Pokemon("Leviator", 149, 200, 15,15 ,gyaradosSkill, "gyarados.gif")
//Team Red (back sprites)
let florizzarSkill = [
    new Skill("Lance Soleil", 120, 7),
    new Skill("Tranch'Herbe", 55, 4),
    new Skill("Bomb-Beurk", 90, 6),
    new Skill("Force", 80, 5)
]
let florizzareR = new Pokemon("Florizzare", 003, 200, 15,15 ,florizzarSkill, "003b.gif")
let pikachuSkill = [
    new Skill("Fatal Foudre", 110, 7),
    new Skill("Tonnerre", 60, 5),
    new Skill("Queue de fer", 100, 6),
    new Skill("Vive Attaque", 40, 4)
]
let pikachuR = new Pokemon("Pikachu", 003, 200, 15,15 ,pikachuSkill, "025b.gif")


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


const teamRed = [florizzareR , pikachuR]
const teamBlue = [dragonite, gyarados]
let red = new Trainer("Red", teamRed, plhpBar, plpkmnName, plhpValue, plPkmnZoneImg)
let blue = new Trainer("Blue", teamBlue, enhpBar, enpkmnName, enhpValue, enPkmnZoneImg)

red.updatePokemonZone()
red.udpateInfoZone()
blue.updatePokemonZone()
blue.udpateInfoZone()

// updateTextZone(blue.currentPkmn, blue.currentPkmn.getSkill(8))
// blue.currentPokemonAttak(red.currentPkmn, blue.currentPkmn.getSkill(8))
// red.udpateInfoZone()


function updateTextZoneAtk(pkmn, skill){
    const zone = document.getElementById("text-zone").children[0]
    zone.textContent = `${pkmn.name.toUpperCase()} lance ${skill.name.toUpperCase()}`
    setTimeout(function(){ zone.textContent = "En attente de connexion ..." }, 5000);
}

function launchAttak(atk, def, power){
    updateTextZoneAtk(atk.currentPkmn, atk.currentPkmn.getSkill(power))
    atk.currentPokemonAttak(def.currentPkmn, atk.currentPkmn.getSkill(power))
    def.udpateInfoZone()
    if(def.mainPkmnIsKO())  
        if (!def.isTeamKO())     
            switchPkmn(def)
        else
            manageVictory(atk,def)
}

function manageVictory(winner, looser){
    
}

function switchPkmn(trainer){
    trainer.switchPkmn(1)
    trainer.updatePokemonZone(true)
    trainer.udpateInfoZone()
}

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    keyStr = String.fromCharCode(key)
    switch(keyStr){
        case 'A':      
            if(blue.addToCast(1)){
                launchAttak(blue, red, blue.getPowerOfCast())
            }
            break
        case 'Z':
            if(blue.addToCast(1.5)){
                launchAttak(blue, red, blue.getPowerOfCast())
            }
            break
        case 'E':
            if(blue.addToCast(2)){
                launchAttak(blue, red, blue.getPowerOfCast())
            }
            break
        case 'I':
            if(red.addToCast(1)){
                launchAttak(red, blue, red.getPowerOfCast())
            }
            break 
        case 'O':
            if(red.addToCast(1.5)){
                launchAttak(red, blue, red.getPowerOfCast())
            }
            break
        case 'P':
            if(red.addToCast(2)){
                launchAttak(red, blue, red.getPowerOfCast())
            }
            break
    }


 }