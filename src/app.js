let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us"];

function randomDomain() {
  let domains = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          let domain = pronoun[i] + adj[j] + noun[k] + extensions[l];
          domains.push(domain);
        }
      }
    }
  }
  return domains;
}

let allDomains = randomDomain();
console.log(allDomains);
