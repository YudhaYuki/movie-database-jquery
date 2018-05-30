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

osomMovie.filterSlider = function() {

    $('.filter.open').on('click', function() {
        $('.filter_container').slideToggle(300, function() {




        });
    });

};

osomMovie.init();