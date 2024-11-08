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

// -----------------------------------------------------------------------------------------------------------

// Prevent right-click context menu
document.getElementById('myVideo').addEventListener('contextmenu', function(event){
          event.preventDefault();
});

// Prevent keyboard shortcuts for saving
document.getElementById('myVideo').addEventListener('keydown', function(event) {
          if (event.ctrlKey && event.key === 's') {
                    event.preventDefault();
          }

          if (event.key === 'F12') {
                    event.preventDefault();
          }

          if (event.ctrlKey && event.shiftKey && event.key === 'I'){
                    event.preventDefault();
          }
});