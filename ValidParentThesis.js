function isOpening(char){
    return  "(" == char || "{" == char || "[" ==char;
}

function isMatching(a,b){
 return ( a==")" && b == "(") ||( a=="}" && b == "{") || ( a=="]" && b == "[");
}

function findvalid(input){
    let stack = [];
    for (let index = 0; index < input.length; index++) {
       if(isOpening(input[index])){
        stack.push(input[index]);
       }else{
        if(stack.length === 0) return false;
        if(!isMatching(input[index],stack[stack.length-1])){
            return false;
        }else{
          stack.pop();
        }
       }
        
    }
  
    return stack.length === 0;

}

console.log(findvalid("{{[[(())]]}}"));