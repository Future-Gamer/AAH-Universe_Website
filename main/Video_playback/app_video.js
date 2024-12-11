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

// -----------------------------------------------------------------------------------------------------------

// Prevent right-click context menu
document.getElementById('video-player').addEventListener('contextmenu', function (event) {
  event.preventDefault();
});

// Prevent keyboard shortcuts for saving
document.getElementById('video-player').addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key === 's') {
    event.preventDefault();
  }

  if (event.key === 'F12') {
    event.preventDefault();
  }

  if (event.ctrlKey && event.shiftKey && event.key === 'I') {
    event.preventDefault();
  }
});

// Drop Down list for Episodes
document.getElementById('season-dropdown').addEventListener('change', function () {
  var selectedSeason = this.value;
  document.querySelectorAll('.episode-list').forEach(function (list) {
    list.style.display = list.id === selectedSeason ? 'block' : 'none';
  });
});

// one function containging others
function clickEpisode(element) {
  changeVideo(videoFile, textElement);
  updateActiveText(textElement);
  showText(element);
}


// change video on click
// function changeVideo(videoFile, textElement) {
// var videoPlayer = document.getElementById('video-player');
// var videoSource = document.getElementById('video-source');

// pause the video
// videoPlayer.pause();

// change the source
// videoSource.src = videoFile;

// load the new video
// videoPlayer.load();

// play the new video
// videoPlayer.play();

// save the video file to localStorage
// localStorage.setItem('currentVideo', videoFile);
// localStorage.setItem('activeText', textElement.innerText);

// update active text state
// updateActiveText(textElement);
// }

// function updateActiveText(textElement) {
// document.querySelectorAll('video-text').forEach(function(text) {
//           text.classList.remove('active_episode');
// });
// textElement.classList.add('active_episode');

// Load the video file from localStorage if it exists
// window.addEventListener('load', function() {
//           var currentVideo = localStorage.getItem('currentVideo');
//           var activeText = localStorage.getItem('activeText');
//           if (currentVideo) {
//                     var videoPlayer = document.getElementById('video-player');
//                     var videoSource = document.getElementById('video-source');
//                     videoSource.src = currentVideo;
//                     videoPlayer.load();
//           }
//           if (activeText) {
//                     document.querySelectorAll('.video-text').forEach(function(text) {
//                               if (text.innerText === activeText) {
//                                         text.classList.add('active_episode');
//                               }
//                     });
//           }
// });

// On clicking the episode it will show below the video
// function showText(element) {
//           var clickedText = element.textContent;
//           document.getElementById('output').textContent = clickedText;

// }


// This function will show text when clicked on episode
// function fetchText(event) {
// Get the text content of the clicked element
// var text = event.target.textContent;
// Display the text in the designated area 
// document.getElementById('displayArea').textContent = "Currently Playing " + text; 
// }

// window.onload = function() {
// Get all clickable elements
// var elements = document.querySelectorAll('.clickable');
// Add event listeners to all clickable elements
// elements.forEach(function(element) {
// element.addEventListener('click', fetchText);
// });
// };


// Combine function of text and video
function changeVideoOnClick(event, videoFile) {
  var textElement = event.target;

  // Get the video file from the onclick attributte
  var videoFile = event.currentTarget.getAttribute('onclick').match(/'(.*?)'/)[1];

  // Get the text content of the clicked element
  var text = textElement.textContent;
  // Display the text in the designated area
  document.getElementById('displayArea').textContent = "Currently Playing " + text;

  // change the video
  var videoPlayer = document.getElementById('video-player');
  var videoSource = document.getElementById('video-source');

  // pause the video
  videoPlayer.pause();

  // change the source
  videoSource.src = videoFile;

  // load the new video
  videoPlayer.load();

  // play the new video
  videoPlayer.play();

  // save the video file and text file to localStorage
  localStorage.setItem('currentVideo', videoFile);
  localStorage.setItem('activeText', text);

  // update the active text state
  updateActiveText(textElement);
}

function updateActiveText(textElement) {
  document.querySelectorAll('.video-text').forEach(function (text) {
    text.classList.remove('active_episode');
  });
  textElement.classList.add('active_episode');
}

window.addEventListener('load', function () {
  var currentVideo = localStorage.getItem('currentVideo');
  var activeText = localStorage.getItem('activeText');
  if (currentVideo) {
    var videoPlayer = document.getElementById('video-player');
    var videoSource = document.getElementById('video-source');
    videoSource.src = currentVideo;
    videoPlayer.load();
  }
  if (activeText) {
    document.querySelectorAll('.video-text').forEach(function (text) {
      if (text.innerText === activeText) {
        text.classList.add('active_episode');
      }
    });
  }

  // Get all clickable elements
  var elements = document.querySelectorAll('.clickable');
  // Add event listners to all clickable elements
  elements.forEach(function (element) {
    element.addEventListener('click', function (event) {
      changeVideoOnClick('click', changeVideoOnClick)
    });
  });
});


