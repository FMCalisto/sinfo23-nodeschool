

var v=0;

for (i in process.argv){
    if (i <= 1) continue;
    v+=parseInt(process.argv[i], 10);

}

console.log(v);
   
