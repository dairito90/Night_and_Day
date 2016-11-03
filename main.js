$(document).ready(function() {
    $('button').click(function() {
        if ($('body').hasClass('black')) {
            $("body").removeClass("black").addClass("white");
        } else {
            $("body").addClass("black").removeClass("white");
        }
    });

    $('#orb').click(function() {
        if ($(this).hasClass('sun')) {
            $(this).removeClass('sun').addClass('moon');
        } else {
            $(this).removeClass('moon').addClass('sun');
        }
        if ($('#sky').hasClass('day')) {
            $('#sky').removeClass('day').addClass('night');
        } else {
            $('#sky').removeClass('night').addClass('day');
        }
        if ($('.moonspot').hasClass('visible')) {
            $('.moonspot').removeClass('visible');
        } else {
            $('.moonspot').addClass('visible');
        }
    });
});
