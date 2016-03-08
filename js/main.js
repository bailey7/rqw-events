$(document).ready(function(){
    eventTemplate = Handlebars.compile($('#event-template').html());
    $.ajax('events-ny.json').done(function(data){
        $eventList = $('#events');
        data.forEach(function(event){
            $eventList.append(eventTemplate(event));
        });
    });
});
