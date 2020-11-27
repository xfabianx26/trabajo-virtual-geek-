
 const job="developer";
 const objeto={};
 objeto.firstName="juan";
 objeto["lastName"]="fabian"
 objeto.age=25;
 objeto.job=job;
 console.log(objeto.firstName);
 console.log(objeto.lastName);
 console.log(objeto.age);
 console.log(objeto.job);

 objeto["firstName"]="maria";
 objeto.age=objeto.age+1;
 console.log("______________________")
 console.log(objeto.firstName);
 console.log(objeto.lastName);
 console.log(objeto.age);
 console.log(objeto.job);