$(function() {
    $('.current-year').html(new Date().getFullYear());

    $('.minor').html('min');

    var techMap = {
        'jekyll'      : ['000',    'FFF'],
        'codeigniter' : ['FF3E03', 'FFF'],
        'jquery'      : ['0F67A1', 'FFF'],
        'prototype'   : ['E4E5E5', '006CFF'],
        'shell'       : ['333',    '30FF14'],
        'ps'          : ['053B77', '3CCCFC'],
        'rails'       : ['B42738', 'FFF'],
        'sinatra'     : ['FFF',    'B42738'],
        'less'        : ['244574', 'FFF']
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
