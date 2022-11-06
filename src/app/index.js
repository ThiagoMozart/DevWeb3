import "jquery/dist/jquery.min.js";
import $ from "jquery";

function Soldier(ranking, name, chapter, homePlace, battle, numberOfSoldiers, description, image) {
  this.ranking = ranking;
  this.name = name;
  this.chapter = chapter;
  this.homePlace = homePlace;
  this.battle = battle;
  this.numberOfSoldiers = numberOfSoldiers;
  this.description = description;
  this.image = image;
}

Soldier.prototype.formatName = function() {
  return this.name.substring(4, 10);
}

const honorablesSoldiers = [
  {
    ranking: 1,
    name: 'Cpt Price',
    chapter: 'Ultra Marines',
    homePlace: 'Earth',
    battle: 'The Battle of Macragge',
    numberOfSoldiers: 7,
    description: "In the battle we define who's willing to win, and who's willing to become a legend.",
    image: '/img/ultraMarines.jpg'
  },
  {
    ranking: 12, 
    name: 'Sgt Artion',
    chapter: 'Adeptus Mecanicus', 
    homePlace: 'Mars', 
    battle: 'The Machine War',
    numberOfSoldiers: 14,
    description: "We are one with the machines and we're better because of it",
    image: '/img/adeptusMecanicus.jpg'
  },
  {
    ranking: 7,
    name: 'Ger Blitz',
    chapter: 'Krieg',
    homePlace: 'Titan',
    battle: 'The Krieg Rebelion',
    numberOfSoldiers: 30,
    description: 'We will never surrender, we were born in battles and we shall parish in it.',
    image: '/img/krieg.jpg'
  }
];

const soldiersObjects = honorablesSoldiers.map(soldier => new Soldier(
  soldier.ranking, soldier.name, soldier.chapter,
  soldier.homePlace, soldier.battle, soldier.numberOfSoldiers,
  soldier.description ,soldier.image
));


$(function() {
  $(".a-dislike").on("click", function() {
    const aDislike = $(this);
    const aLike = $(aDislike.closest(".container").find(".a-like"));

    let dislikes = aDislike.data("dislike");
    let likes = aLike.data("like");

    if (aDislike.find(".i-dislike").hasClass("text-danger")) {
      aDislike.find(".i-dislike").removeClass("text-danger");
      aDislike.find(".i-dislike").addClass("text-warning");
      dislikes--;
    }

    else if (aLike.find(".i-like").hasClass("text-danger")) {
      aLike.find(".i-like").removeClass("text-danger");
      aLike.find(".i-like").addClass("text-warning");
      aDislike.find(".i-dislike").removeClass("text-warning");
      aDislike.find(".i-dislike").addClass("text-danger");
      dislikes += 1;
      likes -= 1;
    }

    else {
      aDislike.find(".i-dislike").removeClass("text-warning");
      aDislike.find(".i-dislike").addClass("text-danger");
      dislikes += 1;
    }

    aDislike.data("dislike", dislikes);
    aLike.data("like", likes);

    aDislike.find(".span-dislike").text(dislikes);
    aLike.find(".span-like").text(likes);
  });


  $(".a-like").on("click", function() {
    const aLike = $(this);
    const aDislike = $(aLike.closest(".container").find(".a-dislike"));
    
    let likes = aLike.data("like");
    let dislikes = aDislike.data("dislike");

    if (aLike.find(".i-like").hasClass("text-danger")) {
      aLike.find(".i-like").removeClass("text-danger");
      aLike.find(".i-like").addClass("text-warning");
      likes -= 1;
    }

    else if (aDislike.find(".i-dislike").hasClass("text-danger")) {
      aDislike.find(".i-dislike").removeClass("text-danger");
      aDislike.find(".i-dislike").addClass("text-warning");
      aLike.find(".i-like").removeClass("text-warning");
      aLike.find(".i-like").addClass("text-danger");
      dislikes -= 1;
      likes += 1; 
    }

    else {
      aLike.find(".i-like").removeClass("text-warning");
      aLike.find(".i-like").addClass("text-danger");
      likes += 1;
    }

    aLike.data("like", likes);
    aDislike.data("dislike", dislikes);

    aLike.find(".span-like").text(likes);
    aDislike.find(".span-dislike").text(dislikes);
  });
});


const htmlObjects = soldiersObjects.map(soldier => `
<div class="col-12 col-md-4 mb-2">
<div class="card bg-dark text-warning">
  <img src="${soldier.image}" class="card-img-top" alt="..." />
  <div class="card-body">
    <div class="container text-center">
      <a class="btn text-decoration-none a-like" data-like="22">
        <span class="span-like text-warning">22</span>
        <i class="fas fa-thumbs-up text-warning i-like"></i>
      </a>
      <a class="btn text-decoration-none a-dislike" data-dislike="13">
        <i class="fas fa-thumbs-down text-warning i-dislike"></i>
        <span class="span-dislike text-warning">13</span>
      </a>
    </div>
    <h5 class="card-title">${soldier.formatName()}</h5>
    <p class="card-text">${soldier.description}</p>
    <ul class="list-group list-group-flush">
    <li class="list-group-item list-group-item-dark">Chapter: ${soldier.chapter}</li>
    <li class="list-group-item list-group-item-dark">Home Place: ${soldier.homePlace}</li>
    <li class="list-group-item list-group-item-dark">Battle: ${soldier.battle}</li>
    <li class="list-group-item list-group-item-dark">Squad: ${soldier.numberOfSoldiers}</li>
  </ul>
  </div>
</div>
</div>
`);

for (const htmlObj of htmlObjects) {
  $("#rowID").append(htmlObj);
}
