document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek', // Vista inicial del calendario
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        editable: true,
        selectable: true,
        events: [
            // Aquí puedes agregar turnos disponibles de ejemplo
            {
                title: 'Turno Disponible',
                start: '2024-09-09T08:00:00',
                end: '2024-09-09T09:00:00'
            },
            {
                title: 'Turno Disponible',
                start: '2024-09-09T09:00:00',
                end: '2024-09-09T10:00:00'
            },
            {
                title: 'Turno Disponible',
                start: '2024-09-10T08:00:00',
                end: '2024-09-10T09:00:00'
            },
            {
                title: 'Turno Disponible',
                start: '2024-09-10T09:00:00',
                end: '2024-09-10T10:00:00'
            }
            // Agrega más eventos según sea necesario
        ],
        eventClick: function(info) {
            alert('Evento: ' + info.event.title);
        }
    });

    calendar.render();
});
