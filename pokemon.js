class Pokemon {
    constructor(name, number, hp, str, def, skillList, sprite) {
        this.name = name;
        this.number = number;
        this.maxHP = hp;
        this.currentHP = hp;
        this.str = str;
        this.def = def;
        this.skills = skillList;
        this.status = "alive"
        this.sprite = sprite
    }

    takeDamage(damage){
        if(this.currentHP > damage)
            this.currentHP -= damage
        else{
            this.currentHP = 0
            this.status = "ko"
        }
    }

    getSkill(value){
        let skillReturn = undefined;
        this.skills.forEach(skill => {
            if(skill.trigger == value)
                skillReturn = skill
        });
        return skillReturn;
    }
}

class Skill{
    constructor(name, power, trigger){
        this.name = name;
        this.power = power;
        this.trigger = trigger
    }
}

class Trainer{
    constructor(name, listPkmn, hpBar, nameZone, hpValue, pkmnZone){
        this.name = name;
        this.team = listPkmn;
        this.hpBar = hpBar;
        this.nameZone = nameZone;
        this.hpValue = hpValue;
        this.currentPkmn = listPkmn[0]
        this.pkmnZone = pkmnZone
    }

    udpateInfoZone(){
        this.nameZone.innerHTML = this.currentPkmn.name    
        this.hpBar.style.width = `${(this.currentPkmn.currentHP/this.currentPkmn.maxHP)*200}px`   
        this.hpValue.innerHTML = `${this.currentPkmn.currentHP}/${this.currentPkmn.maxHP}`
    }
    updatePokemonZone(){
        this.pkmnZone.innerHTML = `<img src="assets/sprites/${this.currentPkmn.sprite}" alt="${this.name} pokemon">`
    }
    currentPokemonAttak(target,skill){
        target.takeDamage(skill.power)
    }
}