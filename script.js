const app = {};

//allow user to enter some names
app.events = function() {
  $('form').on('submit', function(dick) {
    dick.preventDefault();
    let artists = $('input[type=search]').val();
    console.log(artists);
  })
}
//go to spotify and get those artists

//need to get their IDs, with those, we want to get albums

//then get tracks

//then build playlist

app.init = function() {
  app.events();
};

app.init();
