$(document).ready(function(){

  $("form#interestsquiz").submit(function(event){
    var question1result = parseInt($("input:radio[name=question1]:checked").val());
    var question2result = parseInt($("input:radio[name=question2]:checked").val());
    var question3result = parseInt($("input:radio[name=question3]:checked").val());
    var question4result = parseInt($("input:radio[name=question4]:checked").val());
    var question5result = parseInt($("input:radio[name=question5]:checked").val());

    $("#interestsquiz").hide();

    if (question1result === 1) {
      $("#resultA").show();
      $("#citation").show();
    } else if (question2result === 1){
      $("#resultB").show();
      $("#citation").show();
    } else if (question3result === 1){
      $("#resultC").show();
      $("#citation").show();
    } else if (question4result === 1){
      $("#resultD").show();
      $("#citation").show();
    } else if (question5result === 1){
      $("#resultE").show();
      $("#citation").show();
    } else {
      $("#resultF").show();
      $("#citation").show();
    }

    event.preventDefault();
  });

});
