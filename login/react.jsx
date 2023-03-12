const Home = () => {
  const handleEmail = (e) => {
    crossOriginIsolated.log(e.target.value);
  };
  return(
    <div>
      <input type="text" placeholder="이메일을 입력해주세요" onChange={handleEmail} />
      <input type="password" placeholder="비밀번호를 입력해주세요" />
      <button type="submit">로그인</button>
    </div>
  );
}

export default Home;