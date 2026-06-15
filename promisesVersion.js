function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} finished mowing the yard.`);
            resolve(); 
        }, 2000);
    });
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
        const sleep_chance = Math.random();

        if (sleep_chance < 0.20) {
            reject(`${name} fell asleep before finishing the weeds!`);
        } else {
            setTimeout(() => {
                console.log(`${name} finished eating the weeds.`);
                resolve();
            }, 1500);
        }
    });
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
        const sleep_chance = Math.random();

        if (sleep_chance < 0.30) {
            reject(`${name} fell asleep before finishing the hedges!`);
        } else {
            setTimeout(() => {
                console.log(`${name} finished trimming the hedges.`);
                resolve();
            }, 1000);
        }
    });
}

function collectWood(name) {
    return new Promise((resolve, reject) => {
        const sleep_chance = Math.random();

        if (sleep_chance < 0.40) {
            reject(`${name} fell asleep before collecting wood!`);
        } else {
            setTimeout(() => {
                console.log(`${name} finished collecting wood.`);
                resolve();
            }, 2500);
        }
    });
}

function waterGarden(name) {
    return new Promise((resolve, reject) => {
        const sleep_chance = Math.random();

        if (sleep_chance < 0.50) {
            reject(`${name} fell asleep before watering the garden!`);
        } else {
            setTimeout(() => {
                console.log(`${name} finished watering the garden.`);
                resolve();
            }, 500);
        }
    });
}

function doYardWork(name) {
    mowYard(name)
        .then(() => weedEat(name))
        .then(() => trimHedges(name))
        .then(() => collectWood(name))
        .then(() => waterGarden(name))
        .then(() => {
            console.log(`${name} finished ALL yard work!`);
        })
        .catch((message) => {
            console.log(message);
            console.log(`${name} did NOT finish all the chores.`);
        });
}

doYardWork("John");
