// REST PARAMETER
// function myFunc(...myArgs) {
//   //   return `a = ${a}, b=${b}, myArgs =${myArgs}`;
//   return myArgs;
//   //   return arguments;
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   // reduce
//   //   return angka.reduce((acc, cur) => acc + cur);

//   // for of
//   let TOTAL = 0;
//   for (const i of angka) {
//     TOTAL += i;
//   }
//   return TOTAL;
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// array distructuring
// const KELOMPOK1 = [`galih`, `arizza`, `candra`, `aditya`, `dimas`];
// const [KETUA, WAKIL_KETUA, ...ANGGOTA] = KELOMPOK1;
// console.log(ANGGOTA);

// object destructuring
// const TEAM = {
//   pm: `galih`,
//   fe1: `arizza`,
//   fe2: `candra`,
//   be: `aditya`,
//   ux: `dimas`,
//   devops: `fatoni`,
// };

// const { pm, ...myTeam } = TEAM;
// console.log(myTeam);

// filter pada parameneter
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy("number", 1, 2, "galih", false, 10, true, "arizza"));
