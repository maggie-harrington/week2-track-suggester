$(document).ready(function(){

  $("form#interestsquiz").submit(function(event){
    var question1result = parseInt($("input:radio[name=question1]:checked").val());
    var question2result = parseInt($("input:radio[name=question2]:checked").val());

    $("#interestsquiz").hide();

    if (question1result === 1) {
      $("#resultA").show();
    } else if (question2result === 1){
      $("#resultB").show();
    } else {
      $("#resultC").show();
    }

    event.preventDefault();
  });

});
