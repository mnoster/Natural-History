


$(document).ready(function(){
    var date = new Date();
    // date = date.getMonth() + date.getDate() + date.getYear();
    date = date.toDateString();
    console.log(date);
    $('.date').val(date);
    setAllDates();
});
function setAllDates(){
$('#submitDate').on('mouseup',function(){
    var setDate = $('.date').val();
    console.log(setDate);
    $('.date-value').val(setDate);
});
}