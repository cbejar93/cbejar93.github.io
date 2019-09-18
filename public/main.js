

  $(document).ready(function(){
   
    $('.fixed-action-btn').floatingActionButton(); 

    var typed = new Typed('#typed', {
      strings: ['Carlos Bejar'],
      typeSpeed: 110,
      showCursor: false


    });

    var typed2 = new Typed('#typed2',{
      strings: ['Web Developer'],
      typeSpeed: 80,
      startDelay: 1500,
      showCursor: false

    });

    console.log('hello');
    console.log(typed2);

    window.sr = ScrollReveal();
    sr.reveal('.reveal',{  
      viewFactor: 0.5,
      duration: 1000

    });
  

    $.ajax({
        dataType: "json",
        url: "/ratings",
        success: function(data){
            const ratings = data;
            let total = 0;
            for (var i=0; i< ratings.length; i++){
               let what = ratings.length;
            //    console.log(what);
                total= ratings[i].range + total
                // console.log(total);
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
    //   console.log(rangeValue);
      $.ajax({
        type: 'POST',
        data: {range: rangeValue},
        url: "/rate"
        // success: console.log("You have made it!")
    });

    $.ajax({
        dataType: "json",
        url: "/ratings",
        success: function(data){
            const ratings = data;
            let total = 0;
            for (var i=0; i< ratings.length; i++){
               let what = ratings.length;
            //    console.log(what);
                total= ratings[i].range + total
                // console.log(total);
                if (i+1 === what){
                    let avg = total/what;
                    let final =Math.ceil(avg);
                    $("#here").text(final);
                }
                
                
            }
            
        }

    });


  })

  // var basicTimeline = anime.timeline({
  //   autoplay: false
  // });
  
  var pathEls = $(".check");
  for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute("stroke-dashoffset", offset);
  }
  
  
  $(".button").click(function() {
    basicTimeline.play();
  });
  
  $(".text").click(function() {
    basicTimeline.play();
  });



