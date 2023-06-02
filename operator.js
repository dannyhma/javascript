// Assignment Operator
    let x = 10;
    let y = 5

    x += y; //x = x + y

    console.log(x);

    /* output
    15
    */

    let j = 10;
    let k = 5;
    
    j += k; // artinya -> j = j + k;
    j -= k; // artinya -> j = j - k;
    j *= k; // artinya -> j = j * k;
    j /= k; // artinya -> j = j / k;
    j %= k; // artinya -> j = j % k;
    console.log();

// Comparison Operator
    let l = 10;
    let m = 12;

    console.log(l < m);
    console.log(l > m);
    console.log();

    /* output
    true
    false
    */

    const aString = '10';
    const aNumber = 10
    
    console.log(aString == aNumber) // true, karena nilainya sama-sama 10
    console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda
    
    /* output
    true
    false
    */

// Logical Operator
    let a = 10;
    let b = 12;

    /* AND operator */
    console.log(a < 15 && b > 10); // (true && true) -> true
    console.log(a > 15 && b > 10); // (false && true) -> false

    /* OR operator */
    console.log(a < 15 || b > 10); // (true || true) -> true
    console.log(a > 15 || b > 10); // (false || true) -> true

    /* NOT operator */
    console.log(!(a < 15)); // !(true) -> false
    console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false

    /* output
    true
    false
    true
    true
    false
    false
    */