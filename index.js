/*
function renverserTableau(tab) {
    let reversedArray = [1:];
    for (let i = tab.length - 1; i >= 0; i--) {
      reversedArray.push(tab[i]);
    }
    return reversedArray;
  }
  
  let monTableau = [1, 2, 3, 4, 5];
  let tableauRenverse = renverserTableau(monTableau);
  console.log(tableauRenverse); // Affichera [5, 4, 3, 2, 1]
  */
  
  
  
  function estPalindrome(mot) {
    mot = mot.toLowerCase();
    
    for (let i = 0; i < Math.floor(mot.length / 2); i++) {
      if (mot[i] !== mot[mot.length - 1 - i]) {
        return false;
      }
    }
    
    return true;
  }
  
  let motTest = "radar";
  if (estPalindrome(motTest)) {
    console.log($motTest ("est un palindrome."));
  } else {
    console.log($motTest("n'est pas un palindrome."));
  }
