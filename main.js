$(document).ready(function(){

        // check if there is any input
        $('.display input').keypress(function(e){
            //alert('key press');

            // if($('.display input').val() == ''){
            //     alert('key press');
            // }

            if(e.keyCode == 13 && $('.display input').val() != ''){
                // alert('value found');

                $task = $('<div class="task"></div>').text($('.display input').val());

                // delete icon
                $del = $('<i class="fa fa-trash text-dark ms-2"></i>').click(function(){

                        $p = $(this).parent();

                        $p.fadeOut(function(){
                                $p.hide();
                        });

                        

                });

                // check icon
                $ok = $('<i class="fa fa-check text-light"></i>').click(function(){
                        
                        $p = $(this).parent();

                        $p.fadeIn(function(){
                               $('.com-task').append($p)
                        });

                        $('.com-task').append($p)

                        $(this).hide();


                });

                $task.append($del,$ok);
                $('.incom-task').append($task);
                $('.display input').val('')

            }
        });

      });