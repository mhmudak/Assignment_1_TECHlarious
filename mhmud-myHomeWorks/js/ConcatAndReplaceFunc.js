//myConcat Function
function myConcat(a,b,c){
    return a + " " + b + " " + c;
}


//myReplace Function
function myReplace(text,newText,sentence){
    var result = sentence.includes(text);
    
    if(result==true){
        text=newText;
        return text;
    }
}

