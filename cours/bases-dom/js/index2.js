const technos = [
    "Java",
    "Go",
    "Symfony",
    "Spring",
    "Python",
    "C",
    "C++",
    "Ruby On Rails",
    "PHP"
  ];
  
  const listeTechnosFrontend = document.querySelector("#liste");
  // console.log(listeTechnosFrontend);
  
  // Afficher tout le HTML contenu dans `listeTechnosFrontend`
  // console.log(listeTechnosFrontend.innerHTML);
  // listeTechnosFrontend.innerHTML += "<li>Soprasteria</li>";
  // listeTechnosFrontend.innerHTML += "<li>M2i</li>";
  
  for (let techno of technos) {
    listeTechnosFrontend.innerHTML += `<li>${techno}</li>`;
  }
  