//https://velog.io/@developyoun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-n2-%EB%B0%B0%EC%97%B4-%EC%9E%90%EB%A5%B4%EA%B8%B0-JS
function solution(n, left, right) {
  const answre = [];

  for (let i = 0; i <= right; i++) {
    const w = i / n;
    const h = i % n;

    answre.push(Math.max(w, h) + 1);
  }
}
