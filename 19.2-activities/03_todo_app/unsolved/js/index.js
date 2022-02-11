$("#enter").on("click", function(){
    var task = $("#todoItem").val();
    $("#todoList").append("<div class='task'>" + task + "<div class='x fas fa-times'></div></div>");
  });
  
  $(document).on("click", ".x", function(){
    $(this).parent().remove();
  });

  
// Create event listener to toggle 
