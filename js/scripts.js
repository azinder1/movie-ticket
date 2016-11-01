function Movie (title, age, time) {
  // debugger;
  this.titles = title;
  this.ages = age;
  this.times = time;
  this.price = 0;
}

Movie.prototype.Ticket = function(newMovie) {
  // debugger;
  var price = 14;
  if (this.titles === "old") {
    price *= 0.8;
  }
  if (this.ages >= 12 || this.ages <= 65) {
    price *= 0.8;
  }
  if (this.times < 18) {
    price *= 0.8;
  }
  return price;
}


$(document).ready(function() {
  $('form#movies').submit(function(event){
    event.preventDefault();
    var inputtedMovie = ($("#movie-titles").val());
    var inputtedTime = parseInt($("input:radio[name=time]:checked").val());
    var inputtedAge = $("input#new-age").val();
    var newMovie = new Movie(inputtedMovie, inputtedAge, inputtedTime);
    newMovie.price = newMovie.Ticket(newMovie);

  $("#output").show();
  $("#outputJumbo").show();
  $("h2#confirm").show();

   $("ul#your-movie").append("<li><span class='movie-hide'>" + newMovie.titles + "</span></li>");

  $("input#movie-titles").val("");
  $("input#time").val("");
  $("input#new-age").val("");
  $(".output").last().click(function() {
    $("#your-movie").show();
    $(".new-time").text(newMovie.times);
    $(".price").text(newMovie.price);
  });
  });
});
