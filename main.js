
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
function cervezaPropiedad(beers, propiedad){
    let num = 200000
    let y = 0
    for(let it in beers){
        if(beers[it][propiedad] <= num){
            num = beers[it][propiedad]
            y = it
        }
    }
    return y
}
function arrayPunto5(beers,propiedad){
    let array = []
    for(let it in beers){
        if(it >= 10){
            if(beers[it][propiedad] >= array[cervezaPropiedad(array,propiedad)][propiedad]){
                array[cervezaPropiedad(array,propiedad)] = beers[it]
              
            }
        }
        else{
            array.push(beers[it])
        }
    }
    return array
}
function arrayNum(beers,propiedad){
    let array = []
    for(let y of arrayPunto5(beers,propiedad)){
        array.push(y[propiedad])
    }
    return array
}


function swap(items, leftIndex, rightIndex){
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partitionAscendente(items, left, right, arry) {
    let pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            swap(arry, i ,j)
            i++;
            j--;
        }
    }
    return i;
}

function quickSortAscendenete(items, left, right, arry) {
    let index;
    if (items.length > 1) {
        index = partitionAscendente(items, left, right, arry); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSortAscendenete(items, left, index - 1, arry);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSortAscendenete(items, index, right, arry);
        }
    }
    return items;
}
function partitionDescendente(items, left, right, arry) {
    let pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] > pivot) {
            i++;
        }
        while (items[j] < pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            swap(arry, i ,j)
            i++;
            j--;
        }
    }
    return i;
}

function quickSortDescendenete(items, left, right, arry) {
    let index;
    if (items.length > 1) {
        index = partitionDescendente(items, left, right, arry); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSortDescendenete(items, left, index - 1, arry);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSortDescendenete(items, index, right, arry);
        }
    }
    return items;
}
// first call to quick sort
function punto5(beers,propiedad,bool){
    let items = (arrayNum(beers,propiedad))
    let arry = arrayPunto5(beers,propiedad)
    if(bool){
        let sortedArray = quickSortAscendenete(items, 0, items.length - 1, arry)
    }
    else{
        let sortedArray = quickSortDescendenete(items, 0, items.length - 1, arry)
    }
    return arry
}
for(let y of punto5(beers,"ph",true)){
    console.log(y.ph)
}