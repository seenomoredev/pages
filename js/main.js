$('.select').click(function () {
    if ($(".select").hasClass("select_opened")) {
        $('.select').removeClass("select_opened");
    } else {
        $('.select').addClass("select_opened");
    }
});

$('.select__option').click(function () {
    $('.select__option').removeClass("select__option_current");
    $(this).addClass("select__option_current");
    $('input[name="formsystem"]').val( $(this).text() );
    var res = $('input[name="formsystem"]').val();
    $('.select__name').html( $(this).text() );
    console.log( res );
});

$( ".slider__slider" ).slider({
    animate: "slow",
    range: "min", 
    min: 0,
    max: 100,
    value: 75,
    step: 1,
    slide: function( event, ui ) {
        var sliderval = $( ".slider__slider" ).slider( "values" );
        $(".slider__value span").text(ui.value);
        $('input[name="formslider"]').val(ui.value);
        console.log( $('input[name="formslider"]').val() );
    }
});