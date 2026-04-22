// // for basic square pattern
// for(let i = 0 ; i<5 ; i++){
//     let pattern= ""
//     for(let j= 0 ; j<5 ; j++){
//         pattern = pattern + "*"
//     }
//     console.log(pattern)
// }

// // for basic triangle pattern

// for(let i = 0 ; i<5 ; i++){
//     let pattern = "";
//     for(let j= 0 ; j<=i ; j++){
//         pattern = pattern + "*"
//     }
//     console.log(pattern)
// }


// for mirror triangle pattern

// for(let i = 0 ; i<5 ; i++){
//     let row= ""
// for(let j=0; j<5-i ; j++){
//     row = row +" "
// }
// for (let k= 0; k<=i ;k++){
//     row = row + "*"
// }
//     console.log(row)
// }


// for(let i = 0 ; i<5 ; i++){
//     let row= ""
// for(let j=0; j<5-i ; j++){
//     row = row +"*"
// }
// console.log(row)
// }


// for(let i=0; i<5 ; i++){
//     let row = ""
//     for(let j=0; j<i; j++){
//         row = row + " "
//     }
//     for(let k=0; k<5-i ; k++){
//         row = row + "*"
//     }
//     console.log(row)
// }

// for printing pyramid pattern

// for(let i = 0; i<5 ; i++){
//     let row = "";
//     for(let j=0; j<5-i ; j++){
//         row = row+" "
//     }
//     for(let k=0; k<2*i-1; k++){
//         row = row+ "*"
//     }
//     console.log(row)
// }


// for diamond pattern
// function diamond(n) {
//   // upper part
//   for (let i = 1; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= n - i; j++) row += " ";
//     for (let j = 1; j <= 2 * i - 1; j++) row += "*";

//     console.log(row);
//   }

//   // lower part
//   for (let i = n - 1; i >= 1; i--) {
//     let row = "";

//     for (let j = 1; j <= n - i; j++) row += " ";
//     for (let j = 1; j <= 2 * i - 1; j++) row += "*";

//     console.log(row);
//   }
// }

// diamond(5);

// hollow square pattern
// for(let i = 0; i<5 ; i++){
//     let row = "";
//     for(let j=0; j<5 ; j++){
//         if(i==0 || i==4 || j==0 || j==4){
//             row = row + "*"
//         }
//         else{
//             row = row + " "
//         }
//     }
//     console.log(row)
// }

// hollow triangle pattern
// for(let i = 0; i<5 ; i++){
//     let row = "";
//     for(let j=0; j<=i ; j++){
//         if(i==0 || j==0 || i==j || i==4){
//             row = row + "*"      
//         }
//         else{
//             row = row + " "  
//         }
//     }
//     console.log(row)
// }

// hollow diamond pattern
function hollowDiamond(n) {
  // upper part
  for (let i = 1; i <= n; i++) {
    let row = "";

    // spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // stars + inner spaces
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1) {
        row += "*"; // border
      } else {
        row += " "; // hollow
      }
    }

    console.log(row);
  }

  // lower part
  for (let i = n - 1; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }

    console.log(row);
  }
}

hollowDiamond(5);