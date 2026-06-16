function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} finished mowing the yard.`); 
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
                resolve(`${name} finished eating the weeds.`);
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
                resolve(`${name} finished trimming the hedges.`);
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
                resolve(`${name} finished collecting wood.`);
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
                resolve(`${name} finished watering the garden.`);
            }, 500);
        }
    });
}

async function doChores(name) {
    try {
    const mowYardResults = await mowYard(name);
    console.log(mowYardResults);
    const weedEatResults = await weedEat(name);
    console.log(weedEatResults);
    const trimHedgesResults = await trimHedges(name);
    console.log(trimHedgesResults);
    const collectWoodResults = await collectWood(name);
    console.log(collectWoodResults);
    const waterGardenResults = await waterGarden(name);
    console.log(waterGardenResults);

    console.log("All chores completed.");
    } catch (error) {
        console.error(error);
    }
} 

doChores("Alice");