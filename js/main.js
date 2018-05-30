// (function start(){

//     this.runFunction = function() {
//         alert ('Hey')
//     }

//     runFunction();

// })();


var osomMovie = {};

osomMovie.init = function() {
    osomMovie.filterSlider()
}

osomMovie.loadAssets = function() {
    $.getJSON("db/movies.json", function(data) {
        console.log(data);
        osomMovie.init();
    });
}


osomMovie.filterSlider = function() {

    $('.filter.open').on('click', function() {
        $('.filter_container').slideToggle(300, function() {

            var btn = $(this).prev();

            if(btn.hasClass('active')) {
                $('.filter.open').find('.btn_title').text('Filter by');
                btn.removeClass('active');
            } else {
                $('.filter.open').find('.btn_title').text('Close');
                btn.addClass('active');
            }
        });
    });

};

osomMovie.loadAssets();