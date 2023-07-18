import DataContext from "../../context";
import { useContext } from "react";

const TopContainer = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="completed-consultation__top-container">
      <section className="completed-consultation__top-title-container">
        <div className="completed-consultation__top-title-wrap">
          <div className="completed-consultation__top-title">
            <h2 className="completed-consultation__h2">
              상담 신청이 완료되었습니다.
            </h2>
            <p className="completed-consultation__p">
              해당 서비스는 준비 중으로 수요자 조사를 위함임을 밝힙니다.
            </p>
            <p className="completed-consultation__p">
              <span className="completed-consultation__span">{`'${data}' `}</span>와(과) 비슷한 특허가 있어요 !
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopContainer;