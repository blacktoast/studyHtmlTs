import { p } from "./print";
/* 문자열을 받아서
    대문자를 소문자로 치환한뒤
    2중포문으로 돌면서 검색?
*/
export function duplicateEncode(word: string){
    word=word.toLowerCase();
    let wordArr=word.split("");
    let wordArrNum=new Array();
    for(let a of wordArr){
        let t={
            str:a,
            value:0,
        }
        wordArrNum.push(t);
    }
    for(let i=0; i<wordArrNum.length-1; i++){
        for(let j=i+1;j<wordArrNum.length; j++){
            
            if(wordArrNum[i].str==wordArrNum[j].str){wordArrNum[i].value=1, wordArrNum[j].value=1};
            


        }
    }
    let result=new Array();
    for(let f of wordArrNum){
        f.value? result.push(")") : result.push("(");
    }
    return result.join("");
        
    
}

/*
명답..
return word
    .toLowerCase()
    .split('')
    .map((a, i, w) => {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('')
*/
  p(duplicateEncode("(  @ )"));