export const displayEvent = (event) => {
  switch (event.eventPhase) {
    case 1:
      console.log(`CurrentTarget: ${event.currentTarget.id}`);
      console.log(`Event CAPTURE Phase: ${event.currentTarget.id}`);
      // console.log(`${event.currentTarget.id} Clicked`);
      console.log(`target: ${event.target.id}`);
      break;
    case 2:
      console.log(`CurrentTarget: ${event.currentTarget.id}`);
      console.log(`Event TARGET Phase: ${event.currentTarget.id}`);
      // console.log(`${event.currentTarget.id} Clicked`);
      console.log(`target: ${event.target.id}`);
      break;
    case 3:
      console.log(`CurrentTarget: ${event.currentTarget.id}`);
      console.log(`Event BUBBLING Phase: ${event.currentTarget.id}`);
      // console.log(`${event.currentTarget.id} Clicked`);
      console.log(`target: ${event.target.id}`);
      break;
    default:
      console.log(`Event doing NOTHING: ${event.currentTarget.id}`);
  }
}