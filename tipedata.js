// Undefined
    let x = 10;
    console.log(typeof(x));
    /* output: number */

    let y = 17.25;
    console.log(typeof(y));
    console.log();
    /* output: number */

// Numbers
    let a = 12;
    let b = 9;

    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
    console.log(a % b);
    console.log();
    /* output:
    21
    3
    108
    1.3333333333333333
    3
    */

/* Increment dan Decrement */
    let postfix = 5;
    console.log(postfix++);
    /* output: 5 */
    console.log(postfix);
    /* output: 6 */

    let prefix = 5;
    console.log(++prefix);
    console.log();

// BigInt
    const bigNumber = 1234567890123456789012345678901234567890n;
    const myInt = 1234567890123456789012345678901234567890;

    console.log(bigNumber);
    console.log(myInt);
    console.log();
    /* output
    1234567890123456789012345678901234567890n
    1.2345678901234568e+39
    */

// BigIntButSmall
    const bigIntButSmall = 7n;

    console.log(bigIntButSmall);
    console.log(typeof(5n + 2n));
    console.log(5n - 2n);
    console.log(5n * 2n);
    console.log(5n / 2n);
    console.log(5n % 2n);
    console.log();
    /* output
    7n
    3n
    10n
    2n; Bukan 2.5n
    1n
    */

// Strings
    let greet = "Hello";
    console.log(greet);
    console.log(typeof(greet));
    console.log();

    /* output: string */

    const question = '"What do you think of JavaScript?" I asked';

    console.log(question);
    console.log();

    /* output: "What do you think of JavaScript?" I asked */

    const answer = '"I think it\'s awesome!" he answered confidently';

    console.log(answer);
    console.log();

    // 9
    let greets = "Hello";
    let moreGreet = greets + greets;
    console.log(moreGreet);
    console.log();

    /* output: HelloHello */

    const myName = "Luke";
    console.log(`Hello, my name is ${myName}.`);
    console.log();

    /* output: Hello, my name is Luke. */

// Boolean
    let i = true;
    let j = false;

    console.log(typeof(i));
    console.log(typeof(j));
    console.log();

    /* output: 
    boolean
    boolean
    */

    const l = 10;
    const m = 12;

    let isGreater = l > m;
    let isLess = l < m;

    console.log(isGreater);
    console.log(isLess);
    console.log();

    /* output:
    false
    true
    */

// Null
    let someLaterData = null;
    console.log(someLaterData);
    console.log();

    /* output:
    null
    */

// Symbol
    const id = Symbol("id");

    console.log(id);
    console.log();

    /* output
    Symbol(id)
    */

    const id1 = Symbol("id");
    const id2 = Symbol("id");

    console.log(id1 == id2);
    console.log();

    /* output
    false
    */