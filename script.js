// meghívja a pageLoaded függvényt
function pageLoaded() {
  //létrehozza a root divből a rootE változót
  let rootE = document.getElementById("root");
// definiálja a tömböt és elemeit
  let aTextArray = ["szeder", "alma", "cseresznye", "eper", "egres", "meggy", "dinnye", "datolya", "barack", "kiwi", "citrom"];

  // console.log(aTextArray[2]);

  // console.log(aTextArray.length);
  
// for ciklussal bejárja a tömb elemeit egyesével
  for (let index = 0; index < aTextArray.length; index++) {
// a rootE DOM elem végére hozzáad egy fruit classt a tömb minden eleméhez
    rootE.insertAdjacentHTML("beforeend", `
      <div class="fruit">${aTextArray[index]}</div>
    `);

  }
  // megkeresi a fruit classzal rendelkező rootE-ket és változóba rakja
  let fruitDivs = rootE.querySelectorAll(".fruit");
  
  // console.log(fruitDivs[2]);
// for ciklussal bejárja a fruitDivs elemeit
  for (let index = 0; index < fruitDivs.length; index++) {
    
    // console.log(index === 1);
    // console.log(index % 2);
    // ha 2-vel maradék nélkül osztható a sorszáma
    if (index % 2 === 0){
      // akkor trueClass classt ad neki
      fruitDivs[index].classList.add("trueClass");
      // ha nem, akkor megnézi h 5-tel maradék nélkül osztható-e, és ha igen, akkor
    } else if (index % 5 === 0) {
      // anotherClass classt ad hozzá
      fruitDivs[index].classList.add("anotherClass");
      // ha egyik előbbi feltétel se teljesül, akkor 
    } else {
      //falseClass classt ad hozzá
      fruitDivs[index].classList.add("falseClass");

    }
    
  }
}
// oldalbetöltéskor létrehozza a pageLoaded függvényt
window.addEventListener("load", pageLoaded);
