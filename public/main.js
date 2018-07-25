

  $(document).ready(function(){
    $('.parallax').parallax();
    $('.fixed-action-btn').floatingActionButton(); 
  

    $.ajax({
        dataType: "json",
        url: "/ratings",
        success: function(data){
            const ratings = data;
            let total = 0;
            for (var i=0; i< ratings.length; i++){
               let what = ratings.length;
               console.log(what);
                total= ratings[i].range + total
                console.log(total);
                if (i+1 === what){
                    let avg = total/what;
                    let final =Math.ceil(avg);
                    $("#here").append(final);
                }
                
                
            }
            
        }

    });

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

