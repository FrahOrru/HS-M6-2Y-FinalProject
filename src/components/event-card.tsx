function EventCard({ event, direction }: any) {
  return (
    <div
      className={
        direction === 'down'
          ? 'event-card flex flex-col	'
          : 'event-card flex flex-col-reverse'
      }
    >
      <p>{event.event}</p>
      <p className="year">
        {Math.abs(event.year)} {event.year < 0 ? 'A.C.' : 'D.C.'}
      </p>
    </div>
  )
}

export default EventCard
