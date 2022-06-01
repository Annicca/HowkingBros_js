const lottery = async() => {
  console.log("Вы начали игру");
  try{
      let promise = new Promise(function (resolve, reject) {
      Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
    });
  await promise;
  console.log("Вы выиграли");
  console.log("Вам заплатили");
  }catch(e){
    console.log("Вы проиграли");
  }finally {
    console.log("Игра закончена");
  }
}

lottery();
