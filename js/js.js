$(function () {

    'use strict';



    //scroll bar
    $('.scrollbar-inner').scrollbar();


    //form select
    $('.form-tg__select-sel').each(function () {
        $(this).click(function () {
            $(this).next().fadeIn();
        });
    });

    $('.form-tg__option-list').click(function () {
        const formDataOption = $(this).data('option');
        $('.form-tg__option-list').removeClass('active');
        $(this).addClass('active');
        $('.form-option-hidden').attr("value", formDataOption);
        $('.form-tg__select-sel').html(formDataOption);
        $('.form-tg__option').fadeOut();
    });

    $(document).click(function (e) {
        if ($(e.target).closest('.form-tg__select').length) {
            return;
        }
        $('.form-tg__option').fadeOut();
    });

    //form mask tel
    function maskTel() {
        let elements = document.getElementsByClassName('mask_tel');
        for (let i = 0; i < elements.length; i++) {
            new IMask(elements[i], {
                mask: '+{38}(000)000-00-00'
            });
        }
    }
    maskTel();
});

$(document).ready(function () {
    $("form").submit(function () {
        $.ajax({
            type: "POST",
            url: "teleg.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input,textarea").val("");
            alert("Form send");
            $('form').trigger("reset");
        });
        return false;
    });
});