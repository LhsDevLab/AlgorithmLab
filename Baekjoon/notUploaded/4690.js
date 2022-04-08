const size = 100;
let cubes = Array.from({length:size+1}, (_,i)=>i**3);
for (let a=6; a<=size; a++){
    for (let b=2; b<=size-2; b++){
        for (let c=b; c<=size-1; c++){
            for (let d=c; d<=size; d++)
                if (cubes[a] == cubes[b]+cubes[c]+cubes[d])
                    console.log(`Cube = ${a}, Triple = (${b},${c},${d})`);
        }
    }
}