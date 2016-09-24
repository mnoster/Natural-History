$(document).ready(function(){
    Morris.Area({
        element: 'graphArea',
        data: [
            {period: '2010 Q1', male: 2, female: null, total: 2},
            {period: '2010 Q2', male: 2, female: 2, total: 24},
            {period: '2010 Q3', male: 4, female: 1, total: 25},
            {period: '2010 Q4', male: 3, female: 3, total: 5},
            {period: '2011 Q1', male: 6, female: 19, total: 2},
            {period: '2011 Q2', male: 5, female: 4, total: 1},
            {period: '2011 Q3', male: 4, female: 3, total: 15},
            {period: '2011 Q4', male: 1, female: 9, total: 5},
            {period: '2012 Q1', male: 1, female: 4, total: 20},
            {period: '2012 Q2', male: 8, female: 7, total: 17}
        ],
        xkey: 'period',
        ykeys: ['male', 'female', 'total'],
        labels: ['male', 'female', 'total'],
        pointSize: 2,
        hideHover: 'auto'
    });

});
