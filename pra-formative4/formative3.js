const arrBuah = ["mangga", "nanas", "pepaya", "pisang", "alpukat"];


console.log("=== For Loop ===");
for (let i = 0; i < arrBuah.length; i++){
    console.log(arrBuah[i]);
}

console.log("=== For In ===");
for (let i in arrBuah){
    console.log(arrBuah[i]);
}

console.log("=== For Each ===");
arrBuah.forEach((buah) => console.log(buah));

/* 
output:

=== For Loop ===
mangga
nanas
pepaya
pisang
alpukat
=== For In ===
mangga
nanas
pepaya
pisang
alpukat
=== For Each ===
mangga
nanas
pepaya
pisang
alpukat
*/