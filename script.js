// let pass=""

const generatePassword=(length,includeUC,includeNum,includeSym)=>{
    // console.log(LOWERCASER_CHAR_CODES)
    let currentPassword=[];
    // console.log(charCodes)
    // console.log(includeUC,includeNum,includeSym)
    let charCodes=LOWERCASE_CHAR_CODES;
    if(includeUC) charCodes=charCodes.concat(UPPERCASE_CHAR_CODES);
    if(includeNum) charCodes=charCodes.concat(NUMBER_CHAR_CODES);
    if(includeSym) charCodes=charCodes.concat(SYMBOL_CHAR_CODES);
    // let charCodes=LOWERCASE_CHAR_CODES.slice(0);   //--->pass by reference here so charCodes 
    // if(includeUC) charCodes.push(...UPPERCASE_CHAR_CODES);
    // if(includeNum) charCodes.push(...NUMBER_CHAR_CODES);
    // if(includeSym) charCodes.push(...SYMBOL_CHAR_CODES);
    // console.log(charCodes)
    for(let j=0;j<length;j++){
        let temp=Math.floor(Math.random()*charCodes.length)
        currentPassword.push(String.fromCharCode(charCodes[temp]))
    }
    arr=[]
    for(let j in charCodes){
        arr.push((String.fromCharCode(charCodes[j])))
    }
    console.log(arr)
    // charCodes.length;
    return currentPassword.join('')
}

const arrayFromLowToHigh=(low,high)=>{
    const arr=[];
    for(let i=low;i<=high;i++){
        arr.push(i)
    }
    return arr;
}
let UPPERCASE_CHAR_CODES=arrayFromLowToHigh(65,90);
let LOWERCASE_CHAR_CODES=arrayFromLowToHigh(97,122);
let NUMBER_CHAR_CODES=arrayFromLowToHigh(48,57);
let SYMBOL_CHAR_CODES=arrayFromLowToHigh(33,47).concat(
    arrayFromLowToHigh(58,64)).concat(
        arrayFromLowToHigh(91,96)).concat(
            arrayFromLowToHigh(123,126))

const syncCharacterAmount=(e)=>{
    let value=e.target.value;
    characterAmountNumber.value=value
    characterAmountRange.value=value
    
}

characterAmountNumber.addEventListener('input',syncCharacterAmount)
characterAmountRange.addEventListener('input',syncCharacterAmount)

generate.addEventListener('submit',e=>{
    e.preventDefault()
    let length=characterAmountNumber.value;
    let includeUC=upperCase.checked;
    let includeNum=numbers.checked;
    let includeSym=symbols.checked;
    let password=generatePassword(length,includeUC,includeNum,includeSym)
    document.getElementsByClassName('password-display')[0].innerText=password;
})