class Pokemon {
    constructor(name, number, hp, str, def, skillList, sprite, psize=1) {
        this.name = name;
        this.number = number;
        this.maxHP = hp;
        this.currentHP = hp;
        this.str = str;
        this.def = def;
        this.skills = skillList;
        this.status = "alive"
        this.sprite = sprite
        this.psize = psize
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
        let skillReturn = new Skill("Trempette", 0, 0);
        this.skills.forEach(skill => {
            if(skill.trigger <= value && skillReturn.trigger < skill.trigger)
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
        this.listPkmn = listPkmn
        this.pkmnZone = pkmnZone
        this.cast = []    
        this.initSize = this.pkmnZone.children[0].height //Pour le changement de taille
    }

    udpateInfoZone(){
        this.nameZone.innerHTML = this.currentPkmn.name    
        this.hpBar.style.width = `${(this.currentPkmn.currentHP/this.currentPkmn.maxHP)*300}px`   
        this.hpValue.innerHTML = `${this.currentPkmn.currentHP}/${this.currentPkmn.maxHP}`
    }
    updatePokemonZone(change = false){
        if(!change)
            this.pkmnZone.innerHTML = `<img src="assets/sprites/${this.currentPkmn.sprite}" alt="${this.name} pokemon">`
        else{
            this.pkmnZone.classList.add("disapear") 
            setTimeout(() => { 
                this.pkmnZone.innerHTML = `<img src="assets/sprites/${this.currentPkmn.sprite}" alt="${this.name} pokemon">`
                this.pkmnZone.children[0].style.transform = `scale(${this.currentPkmn.psize}, ${this.currentPkmn.psize})`
            }, 1000);
            setTimeout(() => { 
                
                this.pkmnZone.classList.remove("disapear")
                
            }, 2000);
        }
        this.pkmnZone.children[0].style.transform = `scale(${this.currentPkmn.psize}, ${this.currentPkmn.psize})`
        console.log(this.psize)
    }
    currentPokemonAttak(target,skill){
        target.takeDamage(skill.power)
    }
    addToCast(value){
        this.cast.push(value)
        if (this.cast.length == 4)
            return true;
        else
            return false;
    }

    getPowerOfCast(){
        let pow = this.cast.reduce((acc,val) => acc + val)
        this.cast = []
        return pow
    }

    switchPkmn(indexNewPkmn,){
        this.currentPkmn = this.listPkmn[indexNewPkmn]
        this.listPkmn.push(this.listPkmn[0])
        this.listPkmn.splice(indexNewPkmn,1)
        this.listPkmn[0] = this.currentPkmn
    }

    mainPkmnIsKO(){ 
        return this.currentPkmn.currentHP <=0 ? true:false
    }

    isTeamKO(){
        let yes = true
        this.listPkmn.forEach( pkmn => {
            if(pkmn.currentHP > 0)
                yes = false
        })
        return yes
    }

    nextToFight(){
        var index = 0;
        listPkmn.forEach(p => {
            if(p.status == "ko")
                index++
        })
        return index;
    }
    
}