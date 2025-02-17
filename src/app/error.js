"use client";

export default function ErrorPage({ error, reset }) {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>문제가 발생했습니다.</h1>
      <p>{error?.message || "알 수 없는 오류가 발생했습니다."}</p>
      <button onClick={() => reset()}>다시 시도</button>
    </div>
  );
}
