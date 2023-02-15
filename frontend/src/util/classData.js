
//base for class objects could make an object factory and extend it, but w/e
const Warrior = {
    class: 'Warrior',
    weapon: 'shield',
    cardURL: "https://i.imgur.com/BC39pMG.jpg",
    attack: 'melee',
    defense: 'ranged',
    general_class: 'Warrior'
}
const Warrior2H = {
    class: 'Warrior2H',
    weapon: 'two_handed',
    cardURL: "https://i.imgur.com/sQ7b4uN.jpg",
    attack: 'melee',
    defense: 'melee',
    general_class: 'Warrior'

}

const Mage = {
    class: 'Mage',
    weapon: 'mage',
    cardURL: "https://i.imgur.com/snRpfxv.png",
    attack: 'ranged',
    defense: 'ranged',
    general_class: 'Mage'

}

const Rogue = {
    class: 'Rogue',
    weapon: 'daggers',
    cardURL: "https://i.imgur.com/g0P5oSS.png",
    attack: 'melee',
    defense: 'ranged',
    general_class: 'Rogue'


}
const RogueBow = {
    class: 'RogueBow',
    weapon: 'bow',
    cardURL: "https://i.imgur.com/94Eeg5C.png",
    attack: 'ranged',
    defense: 'melee',
    general_class: 'Rogue'

}


module.exports = { Rogue, RogueBow, Warrior2H, Warrior, Mage, }



  // let sportsArr = [
    //     'Golf', 'Tennis', 'Cricket', 'Basketball', 'Baseball', 'American Football', 'Aquatics', 'Archery', 'Automobile Racing', 'Badminton', 'Beach Volleyball', 'Bobsleigh', 'Body Building', 'Boxing', 'Cross Country Running', 'Cross Country Skiing', 'Curling', 'Cycling', 'Darts', 'Decathlon', 'Down Hill Skiing', 'Equestrianism', 'eSports', 'Fencing', 'Field Hockey', 'Figure Skating', 'Gymnastics', 'Ice Hockey', 'Martial Arts', 'Mixed Martial Arts', 'Modern Pentathlon', 'Motorcycle Racing', 'Netball', 'Polo', 'Racquetball', 'Rowing', 'Rugby', 'Sailing', 'Softball', 'Shooting', 'Skateboarding', 'Skeet Shooting', 'Skeleton', 'Snow Boarding', 'Soccer (Football)', 'Squash', 'Surfing', 'Swimming', 'Track and Field'
    // ]
