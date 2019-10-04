$('#All').addClass('active');
$('.btn-style').click(function() {
    $('.btn-style').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');
    $('.All').hide();
    $('.' + id).show();
});