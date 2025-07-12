export function bubbleSort(arr) {
  const animations = [];
  const a = [...arr];
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      animations.push([j, j + 1, 'compare']);
      if (a[j] > a[j + 1]) {
        animations.push([j, j + 1, 'swap']);
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return animations;
}
