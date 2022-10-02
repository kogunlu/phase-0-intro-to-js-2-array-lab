// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function arraysFunction(){
        cats.length = 0;
  
        cats.push('Milo', 'Otis', 'Garfield');
}

function destructivelyAppendCat(name){
    cats.push(name)
    console.log(cats)
}

console.log(cats)
destructivelyAppendCat('Ralph')


function destructivelyPrependCat(name){
    cats.unshift(name)
    console.log(cats)
}

arraysFunction()
destructivelyPrependCat('Bob')

function destructivelyRemoveLastCat(){
    cats.pop()
    console.log(cats)
}

arraysFunction()
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
    cats.shift()
    console.log(cats)
}

arraysFunction()
destructivelyRemoveFirstCat()

function appendCat(name){
    const newCats = [
        ...cats.slice(0),
        name
    ]    
    console.log(cats)
    console.log(newCats)
    return newCats
}
arraysFunction()
appendCat('Broom')

function prependCat(name){
    const copyOfCats = [...cats]
    copyOfCats.unshift(name)
    console.log(copyOfCats)
    console.log(cats)

    return copyOfCats
}

arraysFunction()
prependCat('Arnold')

function removeLastCat(){
    const copyOfCats = [...cats]
    copyOfCats.pop()
    console.log(copyOfCats)
    console.log(cats)

    return copyOfCats
}

arraysFunction()
removeLastCat()

function removeFirstCat(){
    const copyOfCats = [...cats]
    copyOfCats.shift()
    console.log(copyOfCats)
    console.log(cats)

    return copyOfCats
}

arraysFunction()
removeFirstCat()
