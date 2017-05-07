$(document).ready(function() {
    $('select').material_select();

    $('#submity').on('click', function(event) {
        event.preventDefault();


        if ($('#name').val() === '' || $('#photo').val() === '') {
            $('#retry').modal('open');
            $('.modal').modal();
        } else {
            var newUser = {
                name: $('#name').val(),
                photo: $('#photo').val(),
                scores: [
                    parseInt($('#q1').val()),
                    parseInt($('#q2').val()),
                    parseInt($('#q3').val()),
                    parseInt($('#q4').val()),
                    parseInt($('#q5').val()),
                    parseInt($('#q6').val()),
                    parseInt($('#q7').val()),
                    parseInt($('#q8').val()),
                    parseInt($('#q9').val()),
                    parseInt($('#q10').val())
                ]
            };
            event.preventDefault();
            var curUrl = window.location.origin;

            $.post(curUrl + '/api/friends', newUser, function(data) {
                console.log(data);

                $('#poke-modal').modal('open');
                $('.modal').modal();
                $('#poke-name').text(data.name);
                $('#poke-img').attr('src', data.photo);

                $('#name').val('');
                $('#photo').val('');
                $('#q1').val('');
                $('#q2').val('');
                $('#q3').val('');
                $('#q4').val('');
                $('#q5').val('');
                $('#q6').val('');
                $('#q7').val('');
                $('#q8').val('');
                $('#q9').val('');
                $('#q10').val('');
            });

        }
    });

});
