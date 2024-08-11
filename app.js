// Clicking arrow
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {

          const itemNumber = movieLists[i].querySelectorAll("img").length;
          let clickCounter = 0;
          arrow.addEventListener("click", () => {
                    const ratio = Math.floor(window.innerWidth / 270)
                    clickCounter++;
                    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
                              movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
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


// read-more and read-less 
function changeReadMore() {
          const mycontent =
                    document.getElementById('mybox1id');
          const mybutton =
                    document.getElementById('mybuttonid');
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

