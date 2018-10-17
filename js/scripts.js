$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();

    $(".person1").text(person1Input);


    $("#story").show();

    event.preventDefault();
  });
  $("#formTwo").submit(function(event) {
    var person2Input = $("input#person2").val();
    var person2Upper = person2Input.toUpperCase();

    $(".person2").text(person2Upper);


    $("#name").show();

    event.preventDefault();
  });
});
