// If/Else Statement
    const isRaining = false;

    console.log("Persiapan sebelum berangkat kegiatan.");
    if (isRaining) {
        console.log("Hari ini hujan. Bawa payung.");
    }
    console.log("Berangkat kegiatan.");
    console.log();

    /* output:
    Persiapan sebelum berangkat kegiatan.
    Hari ini hujan. Bawa payung.
    Berangkat kegiatan.
    */

    let x = 80;

    if(x > 70) {
        console.log(x);
    } else {
        console.log("Nilai kurang dari 70");
    }
    console.log();

    /* output
    Nilai kurang dari 70
    */

    let language = "Indonesia";
    let greeting = "Selamat Pagi"

    if(language === "English") {
        greeting = "Good Morning!";
    } else if(language === "French") {
        greeting = "Bonjour!";
    } else if(language === "Japanese") {
        greeting = "Ohayou Gozaimasu!";
    } else {
        greeting = "Selamat Siang!";
    }

    console.log(greeting);
    console.log();

    /* output
    Bonjour!
    */

// Ternary operator atau conditional expressions
    // condition ? true expression : false expression

    const isMember = false;
    const discount = isMember ? 0.1 : 0;
    console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);
    console.log();

    /* output
    Anda mendapatkan diskon sebesar 0%
    */
  
// Truthy & Falsy
    let name = "";

    if (name) {
        console.log(`Halo, ${name}`);
    } else {
        console.log("Nama masih kosong");
    }

    /* output:
    Nama masih kosong
    */