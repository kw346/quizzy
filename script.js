tippy('#qn', {
    placement: 'bottom', //place tippy to the right
    trigger: 'click', //trigger tippy on click
    content: "Quizzy is an online quiz app that aims to test children’s knowledge on parts and anatomies of vehicles."
  });
    
    function myFunction() {
      var na = document.getElementById("name").value;
      document.getElementById("dename").innerHTML = "Helloo, " + na;
    }
    $(document).ready(function () {
      $('#fullpage').fullpage({ //initialize
        //set options
        sectionsColor: ['black', 'white', 'white', 'white'],
        anchors: ['s1', 's2', 's3', 's4'],
        afterLoad: function (origin, destination, direction) {
          if (destination.index == 2) {
            q1.play();
          }
        }
      });
      $.fn.fullpage.setMouseWheelScrolling(false);
      $.fn.fullpage.setAllowScrolling(false);
      $("[id='wrong']").click(function () {
        $("#ans").html(
          "Try Again!")
          .hide()
          .fadeIn(1000)
          .addClass("box");
      });
      $("[id='correct']").click(function () {
        $("#ans").html(
          "Next")
          .hide()
          .fadeIn(1000)
          .addClass("box");
      });

    });
    
anime({
    targets: '#Group_87',
    translateX: [-800, -50],
    duration: 2800
});
anime({
    targets: '#brand',
    translateY: [20, 0],
    opacity: [0, 1],
    delay: 1800
});
anime({
    targets: '#ready',
    opacity: [0, 1],
    translateY: [0, 8],
    delay: 2200,
    rotate: {
        value: [0, 5],
        duration: 900,
        delay: 3500
    },
});
var img = anime({
    targets: '.q_bike',
    opacity: [0, 1],
    translateX: [-300, 100],
    delay: 1000
});
document.querySelector('.q_bike').onclick = img.play;
var q1 = anime({
    targets: '#frame',
    opacity: [0, 1],
    translateX: 120,
    translateY: [0, 25],
    delay: 2000,
    scale: 1.5
});
var q2 = anime({
    targets: '.pedal',
    translateX: [-1, 7],
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: false
});
document.querySelector('.pedal').onclick = q2.play;
var q3 = anime({
    targets: '.saddle',
    scale: 1.5,
    delay: 300,
    translateX: -10
});
document.querySelector('.saddle').onclick = q3.play;
var q4 = anime({
    targets: '.handle',
    translateY: 30,
    translateX: 20,
    translateZ: [0, 25],
    delay: 1000,
    scale: 2
});
document.querySelector('.handle').onclick = q4.play;
var q5 = anime({
    targets: '.wheel',
    translateY: 30,
    translateX: 10,
    delay: 1000,
    scale: 2, rotate: 360
});
document.querySelector('.wheel').onclick = q5.play;
var count = 0;
var qnset = document.querySelectorAll('.q_set');
var qnAnsRow = document.querySelectorAll('.q_set .q_ans_row input');

qnAnsRow.forEach(function (qnAnsRowSingle) {
    qnAnsRowSingle.addEventListener('click', function () {
        var valid = this.getAttribute("valid");
        if (valid == "valid") {
            setTimeout(function () {
                step();
            }, 500)
        }

    })
});

function step() {
    count += 1;
    for (var i = 0; i < qnset.length; i++) {
        qnset[i].className = 'q_set';
    }
    qnset[count].className = 'q_set active';
}
