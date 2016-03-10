$(document).ready(function(){
    eventTemplate = Handlebars.compile($('#event-template').html());

    $.ajax('events-ny.json').done(function(data){
        $eventList = $('.event-list');
        data.forEach(function(event){
            console.log(date);
            if (event.price === 0) { event.price = 'FREE'; }
            if (event.venue) {
                event.whereabouts = event.venue;
            } else {
                event.whereabouts = event.address;
            }
            $eventList.append(eventTemplate(event));
        });
    });
});
