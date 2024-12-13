// Clicking arrow
const arrows = document.querySelectorAll(".arrow-right");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {

   const itemNumber = movieLists[i].querySelectorAll("img").length;
   let clickCounter = 0;
   arrow.addEventListener("click", () => {
      const ratio = Math.floor(window.innerWidth / 360)
      clickCounter++;
      if (itemNumber - (3 + clickCounter) + (3 - ratio) >= 0) {
         movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 380}px)`;
      }
      else {
         movieLists[i].style.transform = "translateX(0)"
         clickCounter = 0;
      }

   })

   console.log(Math.floor(window.innerWidth / 360))
})



// Initialize Swiper

// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");

// const swiperEl = document.querySelector("swiper-container");
// swiperEl.addEventListener("autoplaytimeleft", (e) => {
//           const [swiper, time, progress] = e.detail;
//           progressCircle.style.setProperty("--progress", 1 - progress);
//           progressContent.textContent = `${Math.ceil(time / 1000)}s`;
// });

// Login Button
function loginpage() {
   window.location = "/Login/registration.html"
}

// Home-Page Button
function homepage() {
   window.location = "/main/index.html"
}
// Movie-Page Button
function moviepage() {
   window.location = "/main/index_movie.html"
}
// Series-Page Button
function seriespage() {
   window.location = "/main/index_series.html"
}
// Anime-Page Button
function animepage() {
   window.location = "/main/index_anime.html"
}

// Video-Play when hover-in and Video-Pause when hover-out
// document.addEventListener('DOMContentLoaded', () =>
// {
//           const videoContainer = document.querySelector('.movie-list-item');
//           const video = document.querySelector('.movie-list-item-trailer');

//           function playVideo() {
//                     video.play();
//           }

//           function pauseVideo() {
//                     video.pause();
//           }

// videoContainer.addEventListener('mouseenter', playVideo);
// videoContainer.addEventListener('mouseleave', pauseVideo);



// })

document.addEventListener('DOMContentLoaded', () => {
   const videoContainers = document.querySelectorAll('.movie-list-item');
   const videos = document.querySelectorAll('.movie-list-item-trailer');

   videoContainers.forEach((videoContainer, i) => {
      const video = videos[i];

      function playVideo() {
         video.play();
      }

      function pauseVideo() {
         video.pause();
      }

      videoContainer.addEventListener('mouseenter', playVideo);
      videoContainer.addEventListener('mouseleave', pauseVideo);
   })
})


// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

// Movies Content Button Action
function badboysrideordie() {
   window.location = "/main/Video_playback/movies/bad_boys_ride_or_die.html"
}

function code8part2() {
   window.location = "/main/Video_playback/movies/code-8_part-2.html"
}

function avatar2() {
   window.location = "/main/Video_playback/movies/avatar_the_way_of_water.html"
}

function harrypotter1() {
   window.location = "/main/Video_playback/movies/harrypotter1.html"
}

function harrypotter2() {
   window.location = "/main/Video_playback/movies/harrypotter2.html"
}

function harrypotter3() {
   window.location = "/main/Video_playback/movies/harrypotter3.html"
}

function harrypotter4() {
   window.location = "/main/Video_playback/movies/harrypotter4.html"
}

function harrypotter5() {
   window.location = "/main/Video_playback/movies/harrypotter5.html"
}

function harrypotter6() {
   window.location = "/main/Video_playback/movies/harrypotter6.html"
}

function harrypotter7_1() {
   window.location = "/main/Video_playback/movies/harrypotter7-1.html"
}

function harrypotter7_2() {
   window.location = "/main/Video_playback/movies/harrypotter7-2.html"
}

function joker() {
   window.location = "/main/Video_playback/movies/joker.html"
}

function pirates_of_the_carribean_5() {
   window.location = "/main/Video_playback/movies/pirates_of_the_carribean-5.html"
}

function teenwolf_themovie() {
   window.location = "/main/Video_playback/movies/teen_wolf_the_movie.html"
}

function venom_lettherebechange() {
   window.location = "/main/Video_playback/movies/venom_let_there_be_change.html"
}

function venom_thelastdance() {
   window.location = "/main/Video_playback/movies/venom_the_last_dance.html"
}

function kingdomoftheplanetoftheapes() {
   window.location = "/main/Video_playback/movies/kingdom_of_the_planet_of_the_apes.html"
}

function myspy_theeternalcity() {
   window.location = "/main/Video_playback/movies/my_spy_the_eternal_city.html"
}

function dune2() {
   window.location = "/main/Video_playback/movies/dune2.html"
}

function rebel_moon_2() {
   window.location = "/main/Video_playback/movies/rebel_moon-2.html"
}

function diehart2() {
   window.location = "/main/Video_playback/movies/die_hart-2.html"
}


// Web-Series Content Button Action
function vampire_diaries() {
   window.location = "/main/Video_playback/web-series/vampire_diaries.html"
}

function lucifer() {
   window.location = "/main/Video_playback/web-series/lucifer.html"
}

function shogun() {
   window.location = "main/Video_playback/web-series/shogun.html"
}


// Anime Content Button Action

function solo_leveling() {
   window.location = "/main/Video_playback/anime/solo-leveling.html"
}

// +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

// search bar
// document.getElementById('search_input').addEventListener('focus', function () {
//    document.querySelectorAll('.card').forEach(function (card) {
//       card.style.opacity = '1';
//       card.style.display = '';
//    });
// });

// document.getElementById('search_input').addEventListener('blur', function () {
//    document.querySelectorAll('.card').forEach(function (card) {
//       card.style.opacity = '0';
//       card.style.display = 'none';
//    });
// });

document.addEventListener('DOMContentLoaded', function () {
   var searchInput = document.getElementById('search_input');
   if (searchInput) {
      searchInput.addEventListener('focus', function () {
         document.querySelectorAll('.card').forEach(function (card) {
            card.style.opacity = '1';
         });
      });

      searchInput.addEventListener('blur', function () {
         document.querySelectorAll('.card').forEach(function (card) {
            card.style.opacity = '0';
         });
      });
   }
});