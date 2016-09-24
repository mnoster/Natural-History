$(document).ready(function(){
    $('#populateGraph').on('mouseup',function(){
       getDataForGraph(); 
    });
});
function getDataForGraph() {
    var bird1 = $('.first').val();
    var bird2 = $('.second').val();
    var bird3 = $('.third').val();
    var start_year = $('.start-year').val();
    var end_year = $('.end-year').val();
    var month = $('#month').val();
    var location = $('.location').val();
    $.ajax({
        url: 'bird_graph_handler.php',
        method: 'post',
        data:{
            bird1: bird1,
            bird2: bird2,
            bird3: bird3,
            start_year:start_year,
            end_year: end_year,
            month: month,
            location: location
        },
        dataType: 'json',
        success: function (response) {
            console.log(response);
            // initGraph(response);
        },
        error: function (response) {
            console.log(response);
        }
    })

}
function initGraph(data){
    Morris.Area({
        element: 'graphArea',
        data: [
            {name: '2010 Q1', male: 2, female: null, total: 2},
            {name: '2010 Q2', male: 2, female: 2, total: 24},
            {name: '2010 Q3', male: 4, female: 1, total: 25},
            {name: '2010 Q4', male: 3, female: 3, total: 5},
            {name: '2011 Q1', male: 6, female: 19, total: 2},
            {name: '2011 Q2', male: 5, female: 4, total: 1},
            {name: '2011 Q3', male: 4, female: 3, total: 15},
            {name: '2011 Q4', male: 1, female: 9, total: 5},
            {name: '2012 Q1', male: 1, female: 4, total: 20},
            {name: '2012 Q2', male: 8, female: 7, total: 17}
        ],
        xkey: 'name',
        ykeys: ['male', 'female', 'total'],
        labels: ['male', 'female', 'total'],
        pointSize: 2,
        hideHover: 'auto'
    });

}