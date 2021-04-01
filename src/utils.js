import { v4 as uuidv4 } from "uuid";

const songList = () => {
  return [
    {
      name: "Sunrise Hike",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/453b13ae3c0e2eec280fcc6357800b825239806e-300x300.jpg",
      artist: "Ruck P",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12133",
      color: ["#41A79A", "#0B0B0B"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Desire",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/b879702e76f573e03ce60da9237ded86b4a3ebd7-300x300.jpg",
      artist: "Psalm Trees, Guillaume Muschalle ",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10550",
      color: ["#FBF4E4", "#F2DCBC"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "fiveyearsago",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/05/861564cb8a53229de4e63541a44f507c8b0da6ec-300x300.jpg",
      artist: "Psalm Trees",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=6000",
      color: ["#154528", "#C22928"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cascade",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-300x300.jpg",
      artist: "Knowmadic",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13091",
      color: ["#84d8a7", "#DC9747"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sugarless",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      artist: "The Field Tpaes, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11236",
      color: ["#513328", "#F9F9F9"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Roses n Flames",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-300x300.jpg",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14984",
      color: ["#DC8AE3", "#43486F"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Belly Breathing",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e-300x300.jpg",
      artist: "Birocratic",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=2060",
      color: ["#425373", "#438176"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Sunrise Hike",
      cover: "",
      artist: "Ruck P",
      audio: "",
      color: [],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Tell Me",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/97781364b9aa2c2896642b5f896761e07fd9894e-300x300.jpg",
      artist: "Tesk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=1737",
      color: ["#B0B0AE", "#84817B"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Hidden Structure",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-300x300.jpg",
      artist: " Leavv, Flitz&Suppe ",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9912",
      color: ["#D49465", "#A6CAAB"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Zenith",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-300x300.jpg",
      artist: " Leavv ",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9926",
      color: ["#D49465", "#A6CAAB"],
      id: uuidv4(),
      active: false,
    },
  ];
};

export default songList;
