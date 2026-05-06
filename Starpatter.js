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
function diamond(n) {
  // upper part
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i; j++) row += " ";
    for (let j = 1; j <= 2 * i - 1; j++) row += "*";

    console.log(row);
  }

  // lower part
  for (let i = n - 1; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= n - i; j++) row += " ";
    for (let j = 1; j <= 2 * i - 1; j++) row += "*";

    console.log(row);
  }
}

diamond(5);

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
// function hollowDiamond(n) {
//   // upper part
//   for (let i = 1; i <= n; i++) {
//     let row = "";

//     // spaces
//     for (let j = 1; j <= n - i; j++) {
//       row += " ";
//     }

//     // stars + inner spaces
//     for (let j = 1; j <= 2 * i - 1; j++) {
//       if (j === 1 || j === 2 * i - 1) {
//         row += "*"; // border
//       } else {
//         row += " "; // hollow
//       }
//     }

//     console.log(row);
//   }

//   // lower part
//   for (let i = n - 1; i >= 1; i--) {
//     let row = "";

//     for (let j = 1; j <= n - i; j++) {
//       row += " ";
//     }

//     for (let j = 1; j <= 2 * i - 1; j++) {
//       if (j === 1 || j === 2 * i - 1) {
//         row += "*";
//       } else {
//         row += " ";
//       }
//     }

//     console.log(row);
//   }
// }

// hollowDiamond(5);


// for(let i = 0; i<5 ; i++){
//     let row = "";
//     for(let j=0; j<n-1 ; j++){
//       row = row + ""
//     }

//     console.log(row)
// }

// Online Java Compiler
// Use this editor to write, compile and run your Java code online

// class Main {
//     public static void main(String[] args) {
//         int n = 3;
//         for(int i=0;i<=n;i++){
//                 System.out.println("*");
//             }
//             for(int i=0;i<=n+1;i++){
//                 System.out.print("*");
//             }
//         for(int i=0;i<=n;i++){
//             for(int j=1;j<=n-i+2;j++){
//                 System.out.print(" ");
//             }
//             for(int k=1;k<=i;k++){
//                 System.out.print("*");
//             }
//             System.out.println();
//         }

//     }
// }

// *
// *
// *
// *
// *****     
//     *
//    **
//   ***


// Online Java Compiler
// Use this editor to write, compile and run your Java code online

// class Main {
//     public static void main(String[] args) {
//         int n = 9;
//         for(int i=1;i<=n;i++){
//             for(int j=1;j<=n-i;j++){
//                 System.out.print(" ");
//             }
//             for(int k=1;k<=(2*i-n);k++){
//                 System.out.print("*");
//             }
//             System.out.println();
//         }
//         for(int i=0;i<n;i++){
//                 for(int j =0; j<n/2;j++){
//                    System.out.print(" ");
//                 }
//                     System.out.println("*");
//             }
//     }
// }

//     *
//    ***
//   *****
//  *******
// *********
//     *
//     *
//     *
//     *
//     *
//     *
//     *
//     *
//     *


// Online Java Compiler
// Use this editor to write, compile and run your Java code online

// class Main {
//   public static void main(String[] args) {
//         int n = 7;
//     for (int i = 1; i <= n; i++) {
//       for (int j = 1; j <= n - i + (n / 2) + 1; j++) {
//         System.out.print(" ");
//       }
//       for (int k = 1; k <= (2 * i - n); k++) {
//         System.out.print("*");
//       }
//       System.out.println();
//     }
//     for (int i = 0; i < n; i++) {
//       for (int j = 0; j < (n / 2) + 1; j++) {
//         if (j >= n / 2 - i && j >= i - n / 2) {
//           System.out.print("*");
//         } else {
//           System.out.print(" ");
//         }
//       }
//       for (int k = 0; k < n; k++) {
//         if (i == n / 2) {
//           System.out.print("*");
//         } else {
//           System.out.print(" ");
//         }
//       }
//       for (int j = 0; j < (n / 2) + 1; j++) {
//         if (j >= n / 2 - i && j >= i - n / 2) {
//           System.out.print("*");
//         }
//       }
//       System.out.println();
//     }
//   }
// }

//        *
//       ***
//      *****
//     *******
//    *       *
//   **       **
//  ***       ***
// ***************
//  ***       ***
//   **       **
//    *       *