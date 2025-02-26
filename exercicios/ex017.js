//OBJETO
//permite que eu guarde valores, como o array, mas também funções
let amigo = {
  nome: "José",
  sexo: "M",
  peso: 85.4,

  //função
  engordar(p = 0) {
    console.log("Engordou");
    this.peso += p;
    //'this' se referencia ao próprio objeto
  },
};

//amigo engordou 2kg
amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`);
