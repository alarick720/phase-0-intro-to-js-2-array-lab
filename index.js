const cats=["Milo", "Otis", "Garfield"
]

function destructivelyAppendCat(name){
cats.push(name)
}




function destructivelyPrependCat(name){
    cats.unshift(name)
}


function destructivelyRemoveLastCat(){
cats.pop()
}




function destructivelyRemoveFirstCat(name){
    cats.shift(name)


}


function appendCat(name){
   const copyOfCats=[...cats]
   copyOfCats.push(name)
   return copyOfCats


}

function prependCat(name){
    const daysOfCats=[...cats]
    daysOfCats.unshift(name)
    return daysOfCats
}
  
function removeLastCat(){

}

function removeFirstCat(){
    const daysOfCats=[...cats]
    daysOfCats.shift(name)
    return daysOfCats
} 

function removeLastCat(){
    const daysOfCats=[...cats]
    daysOfCats.pop(name)
    return daysOfCats

}












   












