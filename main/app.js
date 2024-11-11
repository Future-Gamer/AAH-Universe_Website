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
// Popular-Page Button
function popularpage() {
          window.location = "/main/index_popular.html"
}
// Trends-Page Button
function trendpage() {
          window.location = "/main/index_trend.html"
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

                    function playVideo(){
                              video.play();
                    }

                    function pauseVideo(){
                              video.pause();
                    }

                    videoContainer.addEventListener('mouseenter', playVideo);
                    videoContainer.addEventListener('mouseleave', pauseVideo);
          })
})


// read-more and read-less 
function changeReadMore1() {
          const mycontent = document.getElementById('mybox1id');
          const mybutton = document.getElementById('mybuttonid1');
          const span1 = document.getElementById("span1")

          if (mycontent.style.display === 'none'
                    || mycontent.style.display === '') {
                    mycontent.style.display = 'inline';
                    span1.style.display = "none";
                    mybutton.textContent = 'read less';
          } else {
                    mycontent.style.display = 'none';
                    mybutton.textContent = 'read more';
                    span1.style.display = "inline";
          }
}
function changeReadMore2() {
          const mycontent = document.getElementById('mybox2id');
          const mybutton = document.getElementById('mybuttonid2');
          const span1 = document.getElementById("span2")

          if (mycontent.style.display === 'none'
                    || mycontent.style.display === '') {
                    mycontent.style.display = 'inline';
                    span1.style.display = "none";
                    mybutton.textContent = 'read less';
          } else {
                    mycontent.style.display = 'none';
                    mybutton.textContent = 'read more';
                    span1.style.display = "inline";
          }
}
function changeReadMore3() {
          const mycontent = document.getElementById('mybox3id');
          const mybutton = document.getElementById('mybuttonid3');
          const span1 = document.getElementById("span3")

          if (mycontent.style.display === 'none'
                    || mycontent.style.display === '') {
                    mycontent.style.display = 'inline';
                    span1.style.display = "none";
                    mybutton.textContent = 'read less';
          } else {
                    mycontent.style.display = 'none';
                    mybutton.textContent = 'read more';
                    span1.style.display = "inline";
          }
}
function changeReadMore4() {
          const mycontent = document.getElementById('mybox4id');
          const mybutton = document.getElementById('mybuttonid4');
          const span1 = document.getElementById("span4")

          if (mycontent.style.display === 'none'
                    || mycontent.style.display === '') {
                    mycontent.style.display = 'inline';
                    span1.style.display = "none";
                    mybutton.textContent = 'read less';
          } else {
                    mycontent.style.display = 'none';
                    mybutton.textContent = 'read more';
                    span1.style.display = "inline";
          }
}
function changeReadMore5() {
          const mycontent = document.getElementById('mybox5id');
          const mybutton = document.getElementById('mybuttonid5');
          const span1 = document.getElementById("span5")

          if (mycontent.style.display === 'none'
                    || mycontent.style.display === '') {
                    mycontent.style.display = 'inline';
                    span1.style.display = "none";
                    mybutton.textContent = 'read less';
          } else {
                    mycontent.style.display = 'none';
                    mybutton.textContent = 'read more';
                    span1.style.display = "inline";
          }
}
function changeReadMore6() {
          const mycontent = document.getElementById('mybox6id');
          const mybutton = document.getElementById('mybuttonid6');
          const span1 = document.getElementById("span6")

          if (mycontent.style.display === 'none'
                    || mycontent.style.display === '') {
                    mycontent.style.display = 'inline';
                    span1.style.display = "none";
                    mybutton.textContent = 'read less';
          } else {
                    mycontent.style.display = 'none';
                    mybutton.textContent = 'read more';
                    span1.style.display = "inline";
          }
}
function changeReadMore7() {
          const mycontent = document.getElementById('mybox7id');
          const mybutton = document.getElementById('mybuttonid7');
          const span1 = document.getElementById("span7")

          if (mycontent.style.display === 'none'
                    || mycontent.style.display === '') {
                    mycontent.style.display = 'inline';
                    span1.style.display = "none";
                    mybutton.textContent = 'read less';
          } else {
                    mycontent.style.display = 'none';
                    mybutton.textContent = 'read more';
                    span1.style.display = "inline";
          }
}
function changeReadMore8() {
          const mycontent = document.getElementById('mybox8id');
          const mybutton = document.getElementById('mybuttonid8');
          const span1 = document.getElementById("span8")

          if (mycontent.style.display === 'none'
                    || mycontent.style.display === '') {
                    mycontent.style.display = 'inline';
                    span1.style.display = "none";
                    mybutton.textContent = 'read less';
          } else {
                    mycontent.style.display = 'none';
                    mybutton.textContent = 'read more';
                    span1.style.display = "inline";
          }
}
function changeReadMore9() {
          const mycontent = document.getElementById('mybox9id');
          const mybutton = document.getElementById('mybuttonid9');
          const span1 = document.getElementById("span9")

          if (mycontent.style.display === 'none'
                    || mycontent.style.display === '') {
                    mycontent.style.display = 'inline';
                    span1.style.display = "none";
                    mybutton.textContent = 'read less';
          } else {
                    mycontent.style.display = 'none';
                    mybutton.textContent = 'read more';
                    span1.style.display = "inline";
          }
}
function changeReadMore10() {
          const mycontent = document.getElementById('mybox10id');
          const mybutton = document.getElementById('mybuttonid10');
          const span1 = document.getElementById("span10")

          if (mycontent.style.display === 'none'
                    || mycontent.style.display === '') {
                    mycontent.style.display = 'inline';
                    span1.style.display = "none";
                    mybutton.textContent = 'read less';
          } else {
                    mycontent.style.display = 'none';
                    mybutton.textContent = 'read more';
                    span1.style.display = "inline";
          }
}


// function changeReadMore(contentId, buttonId, spanId) {
//           const mycontent = document.getElementById(contentId);
//           const mybutton = document.getElementById(buttonId);
//           const span1 = document.getElementById(spanId);

//           if (mycontent.style.display === 'none' || mycontent.style.display === '') {
//                     mycontent.style.display = 'inline';
//                     span1.style.display = "none";
//                     mybutton.textContent = 'read less';
//           } else {
//                     mycontent.style.display = 'none';
//                     mybutton.textContent = 'read more';
//                     span1.style.display = "inline";
//           }
// }

// const readmorebtn = document.querySelectorAll('.read-more-btn');
// for (let i = 0; i < readmorebtn.length; i++) {
//           readmorebtn[i].addEventListener('click', () => {
//                     const contentId = readmorebtn[i].getAttribute('mybox1id');
//                     const buttonId = readmorebtn[i].getAttribute('mybuttonid');
//                     const spanId = readmorebtn[i].getAttribute('span1');
//                     readmorebtn[i].parentNode.classList.toggle('active');
//                     changeReadMore(contentId, buttonId, spanId);
//           });
// }


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


// Anime Content Button Action