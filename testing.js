document.getElementById('season-dropdown').addEventListener('change', function() {
          var selectedSeason = this.value;
          document.querySelectorAll('.episode-list').forEach(function(list) {
              list.style.display = list.id === selectedSeason ? 'block' : 'none';
          });
      });
      