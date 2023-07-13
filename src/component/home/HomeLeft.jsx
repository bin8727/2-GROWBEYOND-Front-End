const HomeLeft = () => {
  const handleClick = () => {
    window.location.href = '/free-consultation';
  };
  
  return (
    <div className="home__left">
      <h2 className="home__left-title">
        특허의 모든 것,
        <br />
        특허의 신과 쉽고 정확하게
      </h2>

      <p className="home__left-desc">
        특허출원이 어려워서 포기하셨나요?
        <br />
        특허의 신에서 언제 어디서나 내가 원할 때
        <br />
        간편하게 진행해보세요!
      </p>

      <div className="home__btn-wrap">
        <button className="home__btn" onClick={handleClick}>
          무료 특허 상담
        </button>
      </div>
    </div>
  );
};

export default HomeLeft;