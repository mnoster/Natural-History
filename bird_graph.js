$(document).ready(function () {
    $('#populateGraph').on('click', function () {
        getDataForGraph();
    });
    $('#resetGraph').on('click', function () {
        $('.first').val('');
        $('.location').val('Neary Lagoon');
        $('.end-year').val('');
        $('#month').val('');
        $('.start-year').val('');
        $('#graphArea').html('');
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
    switch(month){
        case 'January':
            month = "01";
            break;
        case 'February':
            month = "02";
            break;
        case 'March':
            month = "03";
            break;
        case 'April':
            month="04";
            break;
        case 'May':
            month = "05";
            break;
        case "June":
            month="06";
            break;
        case "July":
            month="07";
            break;
        case "August":
            month="08";
            break;
        case "September":
            month = "09";
            break;
        case "October":
            month="10";
            break;
        case "November":
            month = "11";
            break;
        case "December":
            month="12";
            break;
    }
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
                        monthName: response.month[i],
                        month:response.year[i]+"-"+response.month[i],
                        female: response.female[i],
                        total: response.total[i]
                    });

                }
                console.log('data: ', data);
                switch (responseCase[0]) {
                    case 'all fields':
                        initGraph(data, year);
                        break;
                    case 'no month':
                        initGraph(data, year);
                        break;
                    case 'no end year':
                        initGraph(data, month);
                        break;
                    case 'only month':
                        initGraph(data, year);
                        break;
                    case 'only start year':
                        initGraph(data, month);
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
    $('#graphArea').html('');
    Morris.Area({
        element: 'graphArea',
        data: data,
        xkey: xCoordinate,
        ykeys: ['male', 'female', 'total'],
        labels: ['male', 'female', 'total'],
        pointSize: 2,
        hideHover: 'auto',
        // smooth:false,
        behaveLikeLine:true,
        lineColors:["red","blue","green"],
        pointFillColors:["red","blue","black"],
        pointStrokeColors:["red","blue","black"],
        fillOpacity: .3
    });

}