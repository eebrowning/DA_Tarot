
//base for class objects could make an object factory and extend it, but w/e
const Warrior = {
    class: 'Warrior',
    weapon: 'shield',
    cardURL: "https://i.imgur.com/BC39pMG.jpg",
    attack: 'melee',
    defense: 'ranged',
    general_class: 'Warrior: Weapon & Shield',
    base_class: 'Warrior',
    description: "Warriors are frontline combatants, able to withstand incredible punishment in heavy armor. They are proficient in the use of two-handed weapons like mauls and greatswords, but may combine a smaller weapon with a shield for added defense."

}
const Warrior2H = {
    class: 'Warrior2H',
    weapon: 'two_handed',
    cardURL: "https://i.imgur.com/sQ7b4uN.jpg",
    attack: 'melee',
    defense: 'melee',
    general_class: 'Warrior: Two Handed',
    base_class: 'Warrior',
    description: "Warriors are frontline combatants, able to withstand incredible punishment in heavy armor. They are proficient in the use of two-handed weapons like mauls and greatswords, but may combine a smaller weapon with a shield for added defense."

}

const Mage = {
    class: 'Mage',
    weapon: 'mage',
    cardURL: "https://i.imgur.com/snRpfxv.png",
    attack: 'ranged',
    defense: 'ranged',
    general_class: 'Mage',
    base_class: 'Mage',
    description: "Mages channel magical power into spells capable of a wide range of effects, from debiliatating opponents, protecting allies, or unleashing devastating elemental energy. Those who wield magic are widely feared for their abilities and their rebellion against chantry control has left the land in chaos."

}

const Rogue = {
    class: 'Rogue',
    weapon: 'daggers',
    cardURL: "https://i.imgur.com/g0P5oSS.png",
    attack: 'melee',
    defense: 'ranged',
    general_class: 'Rogue: Dual Wield',
    base_class: 'Rogue',
    description: "Rogues are fighters who rely on speed and agility rather than heavy armor, using skill and an advantageous position on the battlefield to deal incredible damage. They may get up close and personal with daggers or strike from a distance with arrows."


}
const RogueBow = {
    class: 'RogueBow',
    weapon: 'bow',
    cardURL: "https://i.imgur.com/94Eeg5C.png",
    attack: 'ranged',
    defense: 'melee',
    general_class: 'Rogue: Archer',
    base_class: 'Rogue',
    description: "Rogues are fighters who rely on speed and agility rather than heavy armor, using skill and an advantageous position on the battlefield to deal incredible damage. They may get up close and personal with daggers or strike from a distance with arrows."

}


module.exports = { Rogue, RogueBow, Warrior2H, Warrior, Mage, }



  // let sportsArr = [
    //     'Golf', 'Tennis', 'Cricket', 'Basketball', 'Baseball', 'American Football', 'Aquatics', 'Archery', 'Automobile Racing', 'Badminton', 'Beach Volleyball', 'Bobsleigh', 'Body Building', 'Boxing', 'Cross Country Running', 'Cross Country Skiing', 'Curling', 'Cycling', 'Darts', 'Decathlon', 'Down Hill Skiing', 'Equestrianism', 'eSports', 'Fencing', 'Field Hockey', 'Figure Skating', 'Gymnastics', 'Ice Hockey', 'Martial Arts', 'Mixed Martial Arts', 'Modern Pentathlon', 'Motorcycle Racing', 'Netball', 'Polo', 'Racquetball', 'Rowing', 'Rugby', 'Sailing', 'Softball', 'Shooting', 'Skateboarding', 'Skeet Shooting', 'Skeleton', 'Snow Boarding', 'Soccer (Football)', 'Squash', 'Surfing', 'Swimming', 'Track and Field'
    // ]
