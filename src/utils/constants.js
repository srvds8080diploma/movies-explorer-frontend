function initialCount(width) {
  let row;
  switch (true) {
    case width <= 480:
      row = 1;
      break;
    case width <= 1024:
      row = 2;
      break;
    case width <= 1280:
      row = 3;
      break;
    default: row = 3;
  }
  return row;
}

export default initialCount;
