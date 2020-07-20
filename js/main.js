$(document).ready(function () {
  $(".button_scaffolding").click(function (e) {
    if ($("#info_scaffolding_1").css("display") == "block") {
      $("#info_scaffolding_1").hide();
      $("#info_scaffolding_2").show();
    } else {
      $("#info_scaffolding_2").hide();
      $("#info_scaffolding_1").show();
    }
  });

  $(".button_tower").click(function (e) {
    if ($("#info_tower_1").css("display") == "block") {
      $("#info_tower_1").hide();
      $("#info_tower_2").show();
    } else {
      $("#info_tower_2").hide();
      $("#info_tower_1").show();
    }
  });


  $(".button_fanera").click(function (e) {
    if ($("#info_fanera_1").css("display") == "block") {
      $("#info_fanera_1").hide();
      $("#info_fanera_2").show();
    } else {
      $("#info_fanera_2").hide();
      $("#info_fanera_1").show();
    }
  });
});