
$(document).ready(function() {


 

  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("numing");
  animateValue(obj, 30, 0, 5000);
  
  

  if (Modernizr.touch) {
    // show the close overlay button
    $(".close-overlay").removeClass("hidden");
    // handle the adding of hover class when clicked
    $(".effects .img").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      if (!$(this).hasClass("hover")) {
        $(this).addClass("hover");
      }
    });
    // handle the closing of the overlay
    $(".close-overlay").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      if ($(this).closest(".img").hasClass("hover")) {
        $(this).closest(".img").removeClass("hover");
      }
    });
  } else {
    // handle the mouseenter functionality
    $(".effects .img").mouseenter(function() {
      $(this).addClass("hover");
    })
    // handle the mouseleave functionality
    .mouseleave(function() {
      $(this).removeClass("hover");
    });
  }
});

