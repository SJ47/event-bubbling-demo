export const displayEvents = (event) => {
  console.log(`${event.currentTarget.id} Clicked`);
  console.log(`CurrentTarget: ${event.currentTarget.id}`);
  console.log(`target: ${event.target.id}`);

}

export const displayEventPhase = (event) => {
  switch (event.eventPhase) {
    case 1:
      console.log(`Event CAPTURE PHASE at ${event.currentTarget.id}`);
      break;
    case 2:
      console.log(`Event TARGET PHASE reached at ${event.currentTarget.id}`);
      break;
    case 3:
      console.log(`Event BUBBLING PHASE at ${event.currentTarget.id}`);

      break;
    default:
      console.log(`Event doing NOTHING at ${event.currentTarget.id}`);
  }
}