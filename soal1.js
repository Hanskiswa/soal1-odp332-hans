// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne = 0
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]
    if (element % 2 === 0) {
      resultOne = resultOne + element
    }
  }
  
  console.log(resultOne)

const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo = 0

for (let index = 0; index < numbersTwo.length; index++) {
  const element = numbersTwo[index]
  if (element % 2 !== 0) {
    resultTwo = resultTwo + element
  }
}

console.log(resultTwo)


// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let resultThree = []

for (let index = 0; index < students.length; index++) {
  const name = students[index]
  resultThree.push(name.toUpperCase())
}

console.log(resultThree) 


// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];
let resultPeople = []

for (let index = 0; index < people.length; index++) {
  const person = people[index]
  if (person.age > 18 && person.name.length > 5) {
    resultPeople.push(person.name)
  }
}

console.log(resultPeople)


// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];
let totalPrice = 0

for (let index = 0; index < items.length; index++) {
  const item = items[index]
  totalPrice = totalPrice + item.price
}

console.log(totalPrice)

  

//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = []

for (let index = 0; index < numbersThree.length; index++) {
  const number = numbersThree[index]
  if (!uniqueNumbers.includes(number)) {
    uniqueNumbers.push(number)
  }
}

console.log(uniqueNumbers)


// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];

let mostExpensive = products[0]

for (let index = 1; index < products.length; index++) {
  const product = products[index]
  if (product.price > mostExpensive.price) {
    mostExpensive = product
  }
}

console.log(mostExpensive.name)


// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];
let sentence = ''

for (let index = 0; index < words.length; index++) {
  const word = words[index]
  if (index === 0) {
    sentence = word
  } else {
    sentence = sentence + ' ' + word
  }
}

console.log(sentence)


// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];
let namesWithA = []

for (let index = 0; index < names.length; index++) {
  const name = names[index]
  if (name.toLowerCase().includes('a')) {
    namesWithA.push(name)
  }
  if (namesWithA.length === 3) {
    break
  }
}

console.log(namesWithA)

// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter
let totalCharacters = 0

for (let index = 0; index < namesTwo.length; index++) {
  const name = namesTwo[index]
  totalCharacters = totalCharacters + name.length
}

console.log(totalCharacters) 

// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];
let formattedPeople = []

for (let index = 0; index < peopleTwo.length; index++) {
  const person = peopleTwo[index]
  if (person.age > 21) {
    formattedPeople.push(`${person.name} (${person.age})`)
  }
}

console.log(formattedPeople) 

