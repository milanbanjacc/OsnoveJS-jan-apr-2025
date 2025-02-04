
// sand pretstavlja procenat zauzeca akvarijuma sa peskom, biljkama itd

function calculate(length, width, height, sand){
    // racunamo zapreminu akvarijuma
    let volume = length * width * height;
    // racunanje praznog prostora
    // kada unesemo procenat znamo da on mora da bude neki br izmedju 1 i 100
    // procenat zauzeca je 17
    // 1- 17 / 100; jedinica predstavlja 100 posto!
    // ostaje nam 83 posto slobodnog prostora u akvarijumu
    let freeVolume = volume * (1 - sand / 100);
    // pretvaranje zapremine u litre
    let liters = freeVolume * 0.001;
    console.log(liters);
}


calculate(85, 75, 47, 17);
