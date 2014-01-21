 var questions = [{
    question: "which is not a type of cheese?",
    choices: ["Brie", "Cheddar", "Manchego", "Aseego"],
    correctAnswer: 3
}, {
    question: "how do you handle “cold” cheese to allow the flavor to develop?",
    choices: ["let it warm up for about half an hour before eating", "don't ever warm it up", "make sure it knows how to dance", "freeze it"],
    correctAnswer: 0
}, {
    question: "which animal does not produce milk to be used for cheese?",
    choices: ["camel", "cow", "sheep", "owl"],
    correctAnswer: 3
}, {
    question: "which is not a type of soft cheese?",
    choices: ["blue castello", "feta", "muenster", "wellington"],
    correctAnswer: 3
}, {
    question: "how are round cheeses supposed to be cut?",
    choices: ["in squares", "counter clockwise", "in wedges", "in stars"],
    correctAnswer: 2
}];

$(document).ready(function () {
    
    var maxQuestions = questions.length;
    var numRight = 0;
    var counter = 0;
    
    
    // SHOW question and multiple choice answers
    $('#question').text(questions[counter].question);
    $('#ans0').text(questions[counter].choices[0]);
    $('#ans1').text(questions[counter].choices[1]);
    $('#ans2').text(questions[counter].choices[2]);
    $('#ans3').text(questions[counter].choices[3]);
    
    $('.try_again_button').hide();
    
    $('.button_section').on('click', function () {
        var answer = ($('input[name="answers"]:checked').val());
        $("input[name='answers']").attr("checked", false);
    
        // is score right or wrong?
        if (answer == questions[counter].correctAnswer) numRight++;
        counter++;        
        //calculate grade in percentage
        var score = (numRight/maxQuestions)*100;
        //show grade
        $('#revealed_number').text('score: '+score+'%');
        
if (counter >= maxQuestions) {
            $("#title").text("Thanks for playing! You got "+numRight+" out of "+maxQuestions+ " ! and you scored "+score+"%");
    formClear();   
          $('.try_again_button').on( "click", function() {
       formReset(); 
   }); 
            $("#cheese_overlay").stop().animate({top:'-665px'},{queue:false,duration:500} );

}

 // Show question
        $('#question').text(questions[counter].question);
        $('#ans0').text(questions[counter].choices[0]);
        $('#ans1').text(questions[counter].choices[1]);
        $('#ans2').text(questions[counter].choices[2]);
        $('#ans3').text(questions[counter].choices[3]);
        
       for (var i=0;i<(questions[counter].question).length;i++){
            
            $('#question_progress').text((counter+1)+" of 5");
            
            if (counter == 1) {
            $("#cheese_overlay").stop().animate({top:'-133px'},{queue:false,duration:500});
            } else if (counter == 2){
	            $("#cheese_overlay").stop().animate({top:'-233px'},{queue:false,duration:500});
            } else if (counter == 3){
	            $("#cheese_overlay").stop().animate({top:'-350px'},{queue:false,duration:500});
            } else if (counter == 4){
	            $("#cheese_overlay").stop().animate({top:'-450px'},{queue:false,duration:500});
            } else if (counter == 5){
	            $("#cheese_overlay").stop().animate({top:'-550px'},{queue:false,duration:500});
            }

        }
        
        var score = (numRight/maxQuestions)*100;
        
    function formReset() {
    $('.answer_buttons').show();   
    $("#title1").show();
    $("#title").hide();
    $('#revealed_number').show();
    $('#question_progress').show();
    $('#question').show();
    $('.button_section').show();
    $('.try_again_button').hide();
    counter = 0;
    maxQuestions = questions.length;
    numRight = 0;   
    $('#revealed_number').text('0%');
    $('#question').text(questions[counter].question);
    $('#ans0').text(questions[counter].choices[0]);
    $('#ans1').text(questions[counter].choices[1]);
    $('#ans2').text(questions[counter].choices[2]);
    $('#ans3').text(questions[counter].choices[3]);
    
      for (var i=0;i<(questions[counter].question).length;i++){
         $('#question_progress').text((counter+1)+"/5");
        }
    score=0;

}
        
    });
var cloud = $('.cloud');
var cloudReverse = $('.cloud_reverse');
var cloudSmall = $('.cloud_small');
var cloudSmallreverse = $('.cloud_small_reverse');

function animateCloud() {
    $(cloud).animate({
        left: '100px'
    }, 25000, function() {
        $(this).css({
            left: '0'
        });
        animateCloud();
    });
}

function animateCloudreverse() {
    $(cloudReverse).animate({
        left: '200px'
    }, 15000, function() {
        $(this).css({
            left: '0'
        });
        animateCloudreverse();
    });
}

function animateCloudsmall() {
    $(cloudSmall).animate({
        right: '100px'
    }, 30000, function() {
        $(this).css({
            right: '0'
        });
        animateCloudsmall();
    });
}

function animateCloudsmallreverse() {
    $(cloudSmallreverse).animate({
        right: '200px'
    }, 10000, function() {
        $(this).css({
            right: '0'
        });
        animateCloudsmallreverse();
    });
}

animateCloudsmall();
animateCloudreverse();
animateCloud();
animateCloudsmallreverse();


    
});

function formClear() {
     $('.answer_buttons').hide();   
    $("#title1").hide();
    $("#title").show();
    $('#revealed_number').hide();
    $('#question_progress').empty();
    $('#question').hide();
    $('.button_section').hide();
    $('.try_again_button').show();
    $("#question_progress").append('<div id="blank"></div>');
  }
