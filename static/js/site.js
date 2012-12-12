$(function() {
    $('.current-year').html(new Date().getFullYear());

    $('.minor').html('min');

    var techMap = {
        'jekyll'      : ['000',    'FFF'],
        'codeigniter' : ['FF3E03', 'FFF'],
        'jquery'      : ['0f67a1', 'FFF'],
        'prototype'   : ['e4e5e5', '006cff'],
        'shell'       : ['333',    '30ff14'],
        'ps'          : ['053b77', '3cccfc'],
        'rails'       : ['b42738', 'FFF'],
        'sinatra'     : ['FFF',    'b42738'],
        'less'        : ['244574', 'fff']
    };

    $('.tech').each(function(i) {
        var input = $(this);
        var up = input.parent();

        var tech = input.attr('data-tech');
        var arr = tech.split(',');

        $.each(arr, function(i) {
            var tech = arr[i];
            var key = tech.trim();
            var colors = techMap[key];

            if (colors) {
                var div = $('<div/>', { });
                div.appendTo(up).html(key);
                div.addClass('techtag');
                div.css({
                    'background-color': '#'+colors[0],
                    'color': '#'+colors[1],
                });

            }
        });
    });
});
