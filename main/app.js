// Clicking arrow
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {

          const itemNumber = movieLists[i].querySelectorAll("img").length;
          let clickCounter = 0;
          arrow.addEventListener("click", () => {
                    const ratio = Math.floor(window.innerWidth / 360)
                    clickCounter++;
                    if (itemNumber - (3 + clickCounter) + (3 - ratio) >= 0) {
                              movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 390}px)`;
                    }
                    else {
                              movieLists[i].style.transform = "translateX(0)"
                              clickCounter = 0;
                    }

          })

          console.log(Math.floor(window.innerWidth / 270))
})


// Initialize Swiper

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiperEl = document.querySelector("swiper-container");
swiperEl.addEventListener("autoplaytimeleft", (e) => {
          const [swiper, time, progress] = e.detail;
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
});

// Login Button
function loginpage() {
           window.location="/Login_and_Sign-up/registration.html"
}


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
