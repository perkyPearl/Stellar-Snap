cardsData = [
  {
    image_src: "Homepage Images/Image (1).jpg",
    caption: "Mountains🗻🗻",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (1).png",
    caption: "Porshe in Forze Horizan",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (11).jpg",
    caption: "Be Creative",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (12).jpg",
    caption: "Weird as Hell 💀",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (13).jpg",
    caption: "Mountains🗻🗻",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (14).jpg",
    caption: "",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (15).jpg",
    caption: "Spider Verse 🕷️🕸️",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (16).jpg",
    caption: "Never Settle",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (17).jpg",
    caption: "",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (2).jpg",
    caption: "Hustle HARD 💪🏻",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (3).jpeg",
    caption: "Interstellar 🛰️",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (3).jpg",
    caption: "",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (4).jpeg",
    caption: "Hope for the Best!",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (4).jpg",
    caption: "Airplane ✈️",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (5).jpeg",
    caption: "Nature ❣️",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (5).jpg",
    caption: "Airplane 🌍",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (6).jpg",
    caption: "Aesthetic Wallpaper",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (7).jpg",
    caption: "",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (8).jpg",
    caption: "Aesthetic Wallpaper",
    username: "perkyPearl",
  },
  {
    image_src: "Homepage Images/Image (9).jpg",
    caption: "Pixel Sky Night",
    username: "perkyPearl",
  },
];

const container = document.querySelector(".container");

function Randomizer(n) {
  if (n <= 0) {
    return [];
  }

  var indecies = [];
  var set = new Set();

  while (set.size < n) {
    var randomNumber = Math.floor(Math.random() * n) + 1;
    if (!set.has(randomNumber)) {
      set.add(randomNumber);
      indecies.push(randomNumber);
    }
  }

  return indecies;
}

function generateCards() {
  var cardsContainer = document.querySelector(".container");

  indecies = Randomizer(cardsData.length);

  for (var i = 0; i < indecies.length; i++) {
    var cardData = cardsData[indecies[i]];
    console.log(cardsData[indecies[i]] + " Loaded");

    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    var img = document.createElement("img");
    img.src = cardData.image_src;
    cardDiv.appendChild(img);

    var captionDiv = document.createElement("div");
    captionDiv.classList.add("caption");
    captionDiv.textContent = cardData.caption;
    cardDiv.appendChild(captionDiv);

    var userDiv = document.createElement("div");
    userDiv.classList.add("user");

    var userImg = document.createElement("img");
    userImg.src = "images/user.jpg"; // Assuming user image URL
    userDiv.appendChild(userImg);

    var usernameH5 = document.createElement("h5");
    usernameH5.textContent = cardData.username;
    userDiv.appendChild(usernameH5);

    cardDiv.appendChild(userDiv);

    cardsContainer.appendChild(cardDiv);
  }
}

generateCards();

