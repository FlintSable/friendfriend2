$(document).ready(function() {
    $('select').material_select();
    $('#poke-modal').hide();
    $('#retry').hide();

    var ghost = (function() {
        var
            method = {},
            $clearLayer,
            $ghoat,
            $content,
            $clost;

        method.center = function() {
            var top, left;

            top = Math.max($(window).height() - $ghost.outerHeight(), 0) / 2;
            left = Math.max($(window).width() - $ghost.outerWidth(), 0) / 2;

            $ghost.css({
                top: top + $(window).scrollTop(),
                left: left + $(window).scrolLeft()
            });
        };

        method.open = function(settings) {
            $content.empty().append(settings.content);

            $ghost.css({
                width: settins.width || 'auto',
                height: settings.height || 'auto'
            });

            method.center();

            $(window).bind('resize.modal', method.center);
            $modal.show();
            $clearLayer.show();
        };

        method.close = function() {
            e.preventDefault();
            method.close();
        };

        return method;
    }());


    $close.click(function(e) {
        e.preventDefault();
        method.close()
    });

    $('#submity').on('click', function(event) {
        event.preventDefault();

        $clearLayer = $();
        $ghost = $();
        $content = $();
        $close = $();

        $ghost.hide();
        $clearLayer.hide();
        $ghost.append($content, $close);

        $('body').append($clearLayer, $ghost);



        if ($('#name').val() === '' || $('#photo').val() === '') {
            // $('#retry').leanModal();
            $('#retry').modal('open');

        } else {
            var newUser = {
                name: $('#name').val(),
                photo: $('#photo').val(),
                scores: [
                    $('#q1').val(),
                    $('#q2').val(),
                    $('#q3').val(),
                    $('#q4').val(),
                    $('#q5').val(),
                    $('#q6').val(),
                    $('#q7').val(),
                    $('#q8').val(),
                    $('#q9').val(),
                    $('#q10').val()
                ]
            };
            event.preventDefault();
            var curUrl = window.location.origin;

            $.post(curUrl + '/api/friends', newUser, function(data) {
                console.log(data);
                var refinedData = `<div id="poke-modal" class="modal" role="dialog">
                                    <div class="modal-content">
                                    <button type="button" class="close" data-dismiss="modal">o</button>
                                    <h2 class="modal-title"><strong>The pokemon for you is</strong></h2>
                                    <h2 id="poke-name"></h2>
                                    <img id="poke-img" src="http://cdn.bulbagarden.net/upload/archive/3/36/20140703020618%21132Ditto.png" height="300" alt="">
                                    </div>
                                    <div class="modal-footer">
                                    <a href='#!' type="button" class="modal-action btn btn-flat" data-dismiss="modal">x</button>
                                    </div>
                                    </div>`;
                modal.open({ content: refinedData });
                $('#poke-name').text(data.name);
                $('#poke-img').attr('src', data.photo);
                $('#poke-modal').modal('show');
                // $('#poke-modal').modal();

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
