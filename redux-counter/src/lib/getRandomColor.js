function getRandomColor() {
  const colors = [
    '#495057',
    '#194097',
    '#440007',
    '#990097',
    '#797007',
    '#934557',
    '#364357',
    '#463157',
    '#144117',
    '#294067',
    '#891087',
  ];

  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

export default getRandomColor;
