//https://velog.io/@developyoun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-n2-%EB%B0%B0%EC%97%B4-%EC%9E%90%EB%A5%B4%EA%B8%B0-JS
function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    // 7/4 = 1 = share
    // 7%4 = 3 = reminder
    const share = parseInt(i / n); // 행축(y)
    const reminder = i % n; // 열축(x)
    answer.push(Math.max(share, reminder) + 1);
  }

  return answer;
}
