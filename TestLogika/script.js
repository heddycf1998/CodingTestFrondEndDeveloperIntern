// Soal Nomor 1
// let arrayKosong = []

function processInputSoalSatu() {
    let inputNumber = document.getElementById("inputNumber").value
    let N = parseInt(inputNumber)

    let arrayKosong = []

    for (let i = 1; arrayKosong.length < N; i++) {
        if (i % 3 === 0 && i % 7 === 0) {
            const kelipatanTigaDanTujuh = 'Z'
            // console.log('Bilangan Cacah Kelipatan 3 dan 7 : ', kelipatanTigaDanTujuh)
            arrayKosong.push(kelipatanTigaDanTujuh)
        } else if (i % 3 === 0) {
            // console.log('Bilangan Cacah Kelipatan 3 : ', i)
            arrayKosong.push(i)
        } else if (i % 7 === 0) {
            // console.log('Bilangan Cacah Kelipatan 7 : ', i)
            arrayKosong.push(i)
        } else {
            continue
        }
    }

    // console.log(arrayKosong)
    menampilkanHasil(arrayKosong)

}

function menampilkanHasil(array) {
    let resultDiv = document.getElementById("result")
    resultDiv.textContent = "Hasil: " + array.join(", ")
}

// --- coretan ---
// script.js:4 ini adalah nomor 0 ubah 3
// script.js:4 ini adalah nomor 1 ubah 6
// script.js:4 ini adalah nomor 2 ubah 7
// script.js:4 ini adalah nomor 3 ubah 9
// script.js:4 ini adalah nomor 4 ubah 12





// Soal Nomor 2

function cariKata() {
    const btnSubmit = document.getElementById("btnSubmit")
    const inputKalimat = document.getElementById("inputKalimat")    
    const hasilKalimat = document.getElementById("hasilKalimat")

    btnSubmit.addEventListener("click", function() {
        let kalimat = inputKalimat.value.toLocaleLowerCase()
        let bersihkanTandaBaca = kalimat.replace(/[^\w\s]/g, "")
        
        let kataDicari = ["sang gajah", "serigala", "harimau"]
        let matches = []

        kataDicari.forEach(kata => {
            let pattern = "\\b" + kata.replace(/\s/g, "\\s") + "\\b"
            let kataMatches = bersihkanTandaBaca.match(new RegExp(pattern, "g"))
            // console.log(kataMatches)
            if(kataMatches) {
                matches = matches.concat(kataMatches)
                // console.log(matches)
            }
        })

        let hasilPencarian = matches.join(" - ")
        hasilKalimat.textContent = "Hasil : " + hasilPencarian
    })
}

document.addEventListener("DOMContentLoaded", cariKata)

// --- coretan ---
// let kalimatSoal = "Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah"
// let kalimat = kalimatSoal.toLocaleLowerCase()
// let bersihkanTandaBaca = kalimat.replace(/[^\w\s]/g, "")
// console.log(bersihkanTandaBaca)

// let kataDicari = ["sang gajah", "serigala", "harimau"]
// let matches = []
// console.log(matches)

// kataDicari.forEach(kata => {
//     let pattern = "\\b" + kata.replace(/\s/g, "\\s") + "\\b"
//     let kataMatches = bersihkanTandaBaca.match(new RegExp(pattern, "g"))
//     // console.log(kataMatches)
//     if(kataMatches) {
//         matches = matches.concat(kataMatches)
//         // console.log(matches)
//     }
// })

// console.log(matches)

// if (bersihkanTandaBaca.includes(kataDicari)) {
//     console.log(kataDicari)
// } else {
//     console.log('Tidak ditemukan')
// }

// let splitKalimat = bersihkanTandaBaca.split(" ")

// console.log(splitKalimat)



// Soal Nomor 3

function cekKataSandi() {

    const btnSubmitKataSandi = document.getElementById("btnSubmitKataSandi")
    const inputKataSandi = document.getElementById("inputKataSandi")
    const hasilKataSandi = document.getElementById("hasilKataSandi")

    btnSubmitKataSandi.addEventListener("click", function() {
        // const kataSandi = "sDndf3fffffsdddddddi"
        const kataSandi = inputKataSandi.value
        const panjangKataSandi = kataSandi.length
        const karakterAwal = kataSandi[0]
        const isAngka = isNaN(karakterAwal)
        const memilikiHurufKapital = kataSandi.match(/[a-z]/)
        const memilikiHurufKecil = kataSandi.match(/[A-Z]/)
        const hasil = "Hasil: "


        if (panjangKataSandi < 8) {
            // console.log('Kata sandi minimal 8 karakter')
            hasilKataSandi.textContent = hasil + "Kata sandi minimal 8 karakter"
        } else if (panjangKataSandi > 32) {
            // console.log('Kata sandi maksimal 32 karakter')
            hasilKataSandi.textContent = hasil + "Kata sandi maksimal 32 karakter"
        } else if (!isAngka) {
            // console.log('Karakter awal tidak boleh angka')
            hasilKataSandi.textContent = hasil + "Karakter awal tidak boleh angka"
        } else if (!kataSandi.match(/\d/)) {
            // console.log('Harus memiliki angka')
            hasilKataSandi.textContent = hasil + "Harus memiliki angka"
        } else if (!memilikiHurufKapital || !memilikiHurufKecil) {
            // console.log('Harus memiliki huruf kapital dan huruf kecil')
            hasilKataSandi.textContent = hasil + "Harus memiliki huruf kapital dan huruf kecil"
        } else {
            // console.log('Kata Sandi Valid')
            hasilKataSandi.textContent = hasil + "Kata Sandi Valid"
        }
    })   
}

document.addEventListener("DOMContentLoaded", cekKataSandi)


// Soal Nomor 4

function cariAngkaTerkecil(angkaSoal) {
    const ascendAngka = function(a, b) {
        return a - b
    }
    const urutkanAngka = angkaSoal.sort( ascendAngka)
    let angkaTerkecil = urutkanAngka[0]

    for (let i = 0; i < angkaSoal.length; i++) {
        if (urutkanAngka[i] === angkaTerkecil) {
            angkaTerkecil++
            // console.log(angkaTerkecil)
            
        } else if(urutkanAngka[i] > angkaTerkecil) {
            // console.log(angkaTerkecil)
            break
        }
        // console.log(angkaTerkecil)
    }
    return angkaTerkecil
}


const btnSubmitAngka = document.getElementById("btnSubmitAngka")
btnSubmitAngka.addEventListener("click", function() {
    const inputAngka = document.getElementById("inputAngka").value
    const angkaSoal = inputAngka.split(",").map(Number)
    const hasilAngka = document.getElementById("hasilAngka")
    const angkaTerkecil = cariAngkaTerkecil(angkaSoal)

    hasilAngka.textContent = "Hasil: " + angkaTerkecil
})

// --- coretan ---
// const angkaSoal = [5, 2, 1, 8, 4, 3, 10]
// const ascendAngka = function(a, b) {
//     return a - b
// }
// const urutkanAngka = angkaSoal.sort( ascendAngka)
// console.log("Urutan Angka Terkecil: " + urutkanAngka)

// let angkaTerkecil = urutkanAngka[0]

// for (let i = 0; i < angkaSoal.length; i++) {
//     if (urutkanAngka[i] === angkaTerkecil) {
//         angkaTerkecil++
//         // console.log(angkaTerkecil)
        
//     } else if(urutkanAngka[i] > angkaTerkecil) {
//         // console.log(angkaTerkecil)
//         break
//     }
//     // console.log(angkaTerkecil)
// }

// console.log(angkaTerkecil)


// Soal Nomor 5

function generatePola(bilanganSoal) {
    let outputXO = ''

    for (let i = 0; i < bilanganSoal; i++) {
        for (let j = 0; j < bilanganSoal; j++) {
            if (i === 0 || i === bilanganSoal - 1 || j === 0 || j === bilanganSoal - 1 || i + j === bilanganSoal - 1) {
                outputXO += 'X'
            } else {
                outputXO += 'O'
            }
        }
        outputXO += '\n'
    }
    return outputXO
}

const btnBilanganGanjil = document.getElementById("btnBilanganGanjil")
const inputBilanganGanjil = document.getElementById("inputBilanganGanjil")
const hasilBilanganGanjil = document.getElementById("hasilBilanganGanjil")

btnBilanganGanjil.addEventListener("click", function() {
    const bilanganSoalInt = parseInt(inputBilanganGanjil.value)

    if (bilanganSoalInt % 2 == 0) {
        hasilBilanganGanjil.textContent = "Hasil : " + "Harus bilangan ganjil"
    } else {
        const pola = generatePola(bilanganSoalInt)
        hasilBilanganGanjil.textContent = "Hasil : \n" + pola
    }
})

// --- coretan ---
// const bilanganSoal = 9

// if (bilanganSoal % 2 == 0) {
//     console.log("Harus bilangan ganjil")
// } else {
//     let outputXO = ''

//     for (let i = 0; i < bilanganSoal; i++) {
//         for (let j = 0; j < bilanganSoal; j++) {
//             if (i === 0 || i === bilanganSoal - 1 || j === 0 || j === bilanganSoal - 1 || i + j === bilanganSoal - 1) {
//                 outputXO += 'X'
//             } else {
//                 outputXO += 'O'
//             }
//         }
//         outputXO += '\n'
//     }
//     console.log(outputXO)
// }


