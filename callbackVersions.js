function mowYard(name, callback) {
    
    setTimeout(() => {
        console.log(`${name} finished mowing the yard.`);
        callback(true);
    }, 2000);
}

function weedEat(name, callback) {
    const sleep_chance = Math.random();

    if (sleep_chance < 0.20) {
        console.log(`${name} fell asleep before finishing the weeds!`);
        callback(false);
    } 
    
    else {
        setTimeout(() => {
            console.log(`${name} finished eating the weeds.`);
            callback(true);
        }, 1500);
    }
}

function trimHedges(name, callback) {
    const sleep_chance = Math.random();

    if (sleep_chance < 0.30) {
        console.log(`${name} fell asleep before finishing the hedges!`);
        callback(false);
    } 
    
    else {
        setTimeout(() => {
            console.log(`${name} finished trimming the hedges.`);
            callback(true);
        }, 1000);
    }
}

function collectWood(name, callback) {
    const sleep_chance = Math.random();

    if (sleep_chance < 0.40) {
        console.log(`${name} fell asleep before finishing collecting wood!`);
        callback(false);
    } 
    
    else {
        setTimeout(() => {
            console.log(`${name} finished collecting wood.`);
            callback(true);
        }, 2500);
    }
}

function waterGarden(name, callback) {
    const sleep_chance = Math.random();

    if (sleep_chance < 0.50) {
        console.log(`${name} fell asleep before finishing watering the garden!`);
        callback(false );
    } 
    
    else {
        setTimeout(() => {
            console.log(`${name} finished watering the garden.`);
            callback(true);
        }, 500);
    }
}

function doYardWork(name) {
    mowYard(name, (ok) => {
        if (!ok) return;

        weedEat(name, (ok) => {
            if (!ok) return;

            trimHedges(name, (ok) => {
                if (!ok) return;

                collectWood(name, (ok) => {
                    if (!ok) return;

                    waterGarden(name, (ok) => {
                        if (!ok) return;

                        console.log(`${name} finished ALL yard work!`);
                    });
                });
            });
        });
    });
}

doYardWork("John");


