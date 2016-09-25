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
    console.log("start year: ", start_year);
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
            console.log(response);
            var data = null;
            var year = 'year';
            var month = 'month';
            console.log("bird case: " ,response.case );
            if (response.message == 'success') {
                for (var i = 0; i < response.bird_name.length; i++) {
                    data = data + {
                            year: response.year[i],
                            name: response.bird_name[i],
                            male: response.male[i],
                            female: response.female[i],
                            total: response.total[i]
                        } + ','
                }
                switch (response.case) {
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
    Morris.Area({
        element: 'graphArea',
        data: [data],
        xkey: xCoordinate,
        ykeys: ['male', 'female', 'total'],
        labels: ['name', 'male', 'female', 'total'],
        pointSize: 2,
        hideHover: 'auto'
    });

}