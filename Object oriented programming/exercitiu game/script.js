
// in clasa hero se salveaza parametrii name si hp folosind this, se creaza metoda atac functia attack are un parametru damage, trebuie sa creati un if care daca eroul poate zbura sunt 50%sanse sa evite atacul, folositi mat.random. console.log cu numele eroului plus a zburat si parametrul damage sa fie 0 daca a zburat. un alt if in care damage-ul trebuie redus cu 20% si un console.log plus numele eroul are shield. iar apoi separate de if trebuie hp-ul eroului sa fie scazut cu damage-ul final. console.log in care sa scrie numele eroului a fost atacat si hp-ul lui a fost redus cu "parametrul de damage", iar hp-ul a ramas.


class Hero{
    constructor(name, hp) {
        this.name=name;
        this.hp=hp;
    }
    
    attacked = function(damage) {
        if(this.canFly){
            var a = Math.random();
            if( a >= 0.5){
                damage = 0;
                console.log(`${this.name} flew away hasn't taken any damage`);
            }
        }
        if(this.hasShield) {
            damage *= 0.8;
            console.log(`${this.name} has shielded 20% of the damage`);
        }
        this.hp -= damage;
        console.log(`${this.name}'s hp is:${this.hp} and it was damaged with ${damage}`);
    }
}

// se creaza 3 clase cu 3 tipuri de eroi care fac extend la clasa hero. toti eroii o sa aiba proprietatile de name si hp si inca 2 proprietati de fly si shield, setate la fiecare dupa plac daca pot zbura sau daca au shield. numele si hp-ul sunt parametrii pe care ii primeste. toti eroii o sa aiba o method attack care o sa primeasca ca param other hero. metoda o sa aiba o var damage o sa se faca un console.log care o zica numele eroului a atacat cu damage-ul: nr damage(parametrul de other hero o sa foloseasca metoda attack). otherHero.attach(damage)



class Bruiser extends Hero{
    constructor(name, hp){
        super(name, hp);
        this.canFly = false;
        this.hasShield = true;
    }
    attack = function(otherHero) {
        let damage = 15;
        console.log(`${this.name} attacked with ${damage}`);
        otherHero.attacked(damage);
    }
}

class Mage extends Hero{
    constructor(name, hp){
        super(name, hp);
        this.canFly = true;
        this.hasShield = false;
    }
    attack = function(otherHero) {
        let damage = 20;
        console.log(`${this.name} attacked with ${damage}`);
        otherHero.attacked(damage);
    }
}

class Assassin extends Hero{
    constructor(name, hp){
        super(name, hp);
        this.canFly = true;
        this.hasShield = false;
    }
    attack = function(otherHero) {
        let damage = 10;
        console.log(`${this.name} attacked with ${damage}`);
        otherHero.attacked(damage);
    }
}


// se creaza o clasa fight care va avea 2 param, hero1 hero2, va avea o var turn care initial va fii egala cu 0, iar apoi se creaza o metoda performAttack, care va verifica al cui turn este si in functie de tura in care se afla va face ca eroul1 sa atace eroul2 si vice versa
// se creaza o metoda change turn. 
// se creaza o metoda find winner, in care se va verifica hp-ul fiecarui erou daca este egal cu 0, pentru fiecare caz se creaza un console log hero1 name a castigat cu atata hp, hero 2 name a castigat cu atata hp, sau ambii eroi sunt morti. 
// se creaza o alta metoda go, se foloseste un do while, in interiorul ei se foloseste perform attack si change turn, iar conditia pentru do while este ca hp-ul celor 2 eroi este mai mare ca 0. iar apoi in metoda go dupa bucla while se apeleaza metoda winner. se creaza o instanta pentru fiecare erou si pt fight si se de fight go


class Fight{
    constructor(hero1, hero2) {
        this.hero1 = hero1;
        this.hero2 = hero2;

        this.turn = 0;
    }
    performAttack = function() {
        if(this.turn===0) {
            this.hero1.attack(this.hero2);
        } else {
            this.hero2.attack(this.hero1);
        }
    }
    changeTurn = function() {
        this.turn = 1 - this.turn;
    }

    findWinner = function() {
        if(this.hero1.hp > 0){
            console.log(`${this.hero1.name} has won the battle with ${this.hero1.hp} hp`);
        } else if (this.hero2.hp > 0) {
            console.log(`${this.hero2.name} has won the battle with ${this.hero2.hp} hp`);
        } else {
            console.log(`Both heroes lost the battle`);
        }
    }

    go = function() {
        do{
            this.performAttack(); 
            this.changeTurn()
        } while (this.hero1.hp > 0 && this.hero2.hp > 0)
        this.findWinner()
    }
}

var bruiser = new Bruiser ('Leona', 120);
var mage = new Mage('Janna', 100);
var assassin = new Assassin('Tristana', 100);
var fight1 =  new Fight(bruiser,assassin);
// fight1.go();
var fight2 = new Fight(mage,assassin);
// fight2.go()
var fight3 = new Fight(bruiser,mage);
// fight3.go();




