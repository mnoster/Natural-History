$(document).ready(function () {
    $('#populateGraph').on('mouseup', function () {
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
        data: {
            bird1: bird1,
            bird2: bird2,
            bird3: bird3,
            start_year: start_year,
            end_year: end_year,
            month: month,
            location: location
        },
        dataType: 'json',
        success: function (response) {
            var year = 'year';
            var month = 'month';
            var responseCase = response.case;
            if (response.message == 'success') {
                var data = [];
                for (var i = 0; i < response.bird_name.length; i++) {
                    data.push({
                        year: response.year[i],
                        name: response.bird_name[i],
                        male: response.male[i],
                        month: response.month[i],
                        female: response.female[i],
                        total: response.total[i]
                    });

                }
                console.log('data: ', data);
                var newDAta = [];
                // for(var i= 0;i<data.length;i++){
                //     if(i == data.length-1){
                //         newDAta += data[i]
                //     }else{
                //         newDAta += data[i] + ','
                //     }
                // }
                console.log('newdata: ', newDAta);
                switch (responseCase[0]) {
                    case 'all friends':
                        initGraph(data, year);
                        break;
                    case 'no month':
                        initGraph(data, year);
                        break;
                    case 'no end year':
                        initGraph(data, year);
                        break;
                    case 'only month':
                        initGraph(data, month);
                        break;
                    case 'only start year':
                        initGraph(data, year);
                        break;
                    default:
                        console.log('nothing is switch triggered');
                }

            }
        },
        error: function (response) {
            console.log(response);
        }
    });
}
function initGraph(data, xCoordinate) {
    // console.log('data: ', data);
    Morris.Area({
        element: 'graphArea',
        data: data,
        xkey: xCoordinate,
        ykeys: ['male', 'female', 'total'],
        labels: ['male', 'female', 'total'],
        pointSize: 2,
        hideHover: 'auto',
        smooth:false,
        behaveLikeLine:true,
        lineColors:["red","blue","green"],
        pointFillColors:["red","blue","black"],
        pointStrokeColors:["red","blue","black"],
        fillOpacity: .3
    });

}