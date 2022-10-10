
// 2) Generar una funcion que reciba como parametro el array de cervezas y 
// un valor de alcohol (numero). La funcion debe devolver un nuevo array con
// las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array
// debe ser un objeto que tenga sólo las propiedades name, (alcohol) abv y ("amargor") ibu
// para las 12:15 tiramos ruleta a ver hasta donde llegaron

function punto2(beers,num){
    let array = []
    for(let it in beers){
        if(beers[it].abv <= num){
            let obj = {name : beers[it].name, abv : beers[it].abv, ibu : beers[it].ibu}
            array.push(obj)
        }
    }
    return array
} 
function punto3(beers){
    let array = []
    for(let it in beers){
        if(it >= 10){
            if(beers[it].abv >= array[cervezaMenor(array)].abv){
                array[cervezaMenor(array)] = beers[it]
              
            }
        }
        else{
            array.push(beers[it])
        }
    }
    return array
}
function cervezaMenor(beers){
    let num = 100
    let y = 0
    for(let it in beers){
        if(beers[it].ibu <= num){
            num = beers[it].abv
            y = it
        }
    }
    return y
}
function cervezaMayor(beers){
    let num = 0
    let y = 0
    for(let it in beers){
        if(beers[it].ibu >= num){
            num = beers[it].ibu
            y = it
        }
    }
    return y
}
function punto4(beers){
    let array = []
    for(let it in beers){
        if(it >= 10){
            if(beers[it].ibu <= array[cervezaMayor(array)].ibu){
                array[cervezaMayor(array)] = beers[it]
              
            }
        }
        else{
            array.push(beers[it])
        }
    }
    return array
}

