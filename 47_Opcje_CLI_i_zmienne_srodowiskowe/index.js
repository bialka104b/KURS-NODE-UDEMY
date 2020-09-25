//console.log(process.env);//wypisze nam wszystkie zmienne środowiskowe

//"DeprecationWarning" informacja o tym że używamy kodu który jest przestarzały
sum = (a, b)=> {
    process.emitWarning("This function is deprecated, use calc instead.", "DeprecationWarning");
    return a + b;
}

console.log( sum(3, 5) );

//node --no-deprecation index ta komenda wywołana w terminalu uruchomi plik index ale bez warninga który ustawiliśmy jako "DeprecationWarning"