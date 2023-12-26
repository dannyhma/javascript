// Foor Loop
    // for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {
    // // do something
    // }   

    for(let a = 0; a < 5; a++) {
        console.log(a);
    }
    console.log();
    
    /* output
    0
    1
    2
    3
    4
    */

// Foor of Loop
    // for(arrayItem of myArray) {
    //     // do something
    // }

    let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

    for(const arrayItem of myArray) {
        console.log(arrayItem)
    }
    console.log();

    /* output
    Luke
    Han
    Chewbacca
    */

// While and do-while
    let i = 1;

    while (i <= 10) {
        console.log(i);
        i++;
    }
    console.log();

    let j = 1;

    do {
        console.log(j);
        j++;
    } while (j <= 10);

// Infinite loops
    // let k = 1;
    
    // while (k <= 5) {
    //     console.log(k);
    // }

    // for(let l = 1; l <= 5; l=1) {
    //     console.log(l);
    // }
