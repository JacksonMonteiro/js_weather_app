$(function(){
    let button = $('#button');
    let input = $('#city');
    let temp = $('.temp');
    let name = $('.name');
    let desc = $('.desc');

    const api = 'ae12e794836c49c8b829bad94a160239';

    button.on('click', function() {
        const tempURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + input.val() + '&units=metric&appid=' + api;
        
        $.ajax({
            type: "GET",
            url: tempURL, 
            dataType: "json",
            success: function(xhr) {
                temp.html(xhr.main.temp.toFixed(0) + ' ºC');
                name.html(xhr.name);
                desc.html(xhr.weather[0].description);                
            },
            error: function(xhr, status, error) {
                alert("Error: " + status + " " + error + " " + xhr.status + " " + xhr.statusText);
            }
        })
    });

});