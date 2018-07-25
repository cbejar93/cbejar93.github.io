

  $(document).ready(function(){
    $('.parallax').parallax();
    $('.fixed-action-btn').floatingActionButton();

  });

  $(".btn").click(function(){
      const rangeValue = $("#test5").val();
      console.log(rangeValue);
      $.ajax({
        type: 'POST',
        data: {range: rangeValue},
        url: "/rate",
        success: console.log("You have made it!")
    })
  })

