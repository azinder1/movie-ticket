function Movie (movie, age, time) {
  this.newTitle = movie;
  this.newAge = age;
  this.newTime = time;
  this.newPrice = [];
}

$(document).ready(function() {
  $('form#movies').submit(function(event){
    event.preventDefault();
    var inputtedTime = parseInt($("input:radio[name=time]").val());
    var inputtedAge = $("input#new-age").val();
    var inputtedMovie = $("#movie-titles").val();
    var newMovie = new Movie(inputtedMovie, inputtedAge, inputtedTime)
  });
});
