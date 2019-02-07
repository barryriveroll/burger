$(document).ready(function() {
  $("#addBurgerBtn").click(function(e) {
    e.preventDefault();
    console.log("click");

    var burgerToAdd = {
      burger_name: $("#addBurgerName")
        .val()
        .trim(),
      devoured: false
    };

    $.post("/api/burgers", burgerToAdd, function(data) {
      console.log(data);
      location.reload();
    });
  });

  $(".eat-button").click(function() {
    var id = $(this).attr("data-id");
    var devouredState = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      location.reload();
    });
  });

  $(".menu-li").click(function() {
    var name = $(this).attr("data-name");
    var id = $(this).attr("data-id");
    $("#modifyBurgerName").val(name);
    $("#modifyBurgerBtn").attr("data-id", id);
  });

  $("#modifyBurgerBtn").click(function(e) {
    e.preventDefault();
    var id = $(this).attr("data-id");
    var newName = {
      burger_name: $("#modifyBurgerName").val()
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newName
    }).then(function() {
      location.reload();
    });
  });
});
