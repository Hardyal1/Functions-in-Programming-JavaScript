let damage = 0;
let fireDamage = 3;
let iceDamage = 1;
let poisonDamage = 4;
function myFunction(ele) {
    let x = ele.id;
    if (x === '1') {
        damage = damage + fireDamage;
    } else if (x === '2') {
        damage = damage + iceDamage;
    } else if (x === "3") {
        damage = damage + poisonDamage;
    }
    document. getElementById("dragon"). innerHTML = "Dragons Damage : "+damage;
    if(damage>=10){
        document. getElementById("user"). innerHTML = "Game Over: You Win !";
    }
}