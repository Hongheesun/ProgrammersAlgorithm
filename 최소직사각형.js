function solution(sizes) {
  let arr = [0, 0];
  for (let i = 0; i < sizes.length; i++) {
    //이렇게하면 w와 h자리가 변경된다
    let [w, h] = sizes[i].sort((a, b) => b - a);
    if (w > arr[0]) {
      arr[0] = w;
    }
    if (h > arr[1]) {
      arr[1] = h;
    }
  }
  return arr[0] * arr[1];
}
