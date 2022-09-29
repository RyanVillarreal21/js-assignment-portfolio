const myAvatar = document.getElementById("myself");
const bio = document.getElementById("opening");
const hireStat = document.getElementById("hireable");

function render(response) {
  const foundAvatar = response.avatar_url;
  myAvatar.src = foundAvatar;

  const foundBio = response.bio;
  bio.innerText = foundBio;

  //   const foundHireStat = response.hireable;
  //   console.log(foundHireStat);
  //   if (foundHireStat === null) {
  //     foundHireStat === "Work Status: Hireable";
  //   }
  //   hireStat.innerText = foundHireStat;
}

fetch("https://api.github.com/users/RyanVillarreal21")
  .then((response) => response.json())
  .then((response) => render(response));
