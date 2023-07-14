import ButtonWrap from "./ButtonWrap";
import { useState, useRef } from "react";
import File from "../../assets/file.svg";

const SecondSection = (props) => {
  const [agreed, setAgreed] = useState(false);
  // const [description, setDescription] = useState(props.description);
  // const [counsling, setCounsling] = useState(props.counsling);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputEl = useRef(null);

  const handleCheckbox = () => {
    setAgreed(!agreed);
  };

  const handleFileInputChange = (e) => {
    const selectFile = e.target.files[0];
    setSelectedFile(selectFile);
    props.setFile(selectFile);
  };

  const handleClick = () => {
    fileInputEl.current.click();
  };

  return (
    <div className="freeconsultation__patent-info-container">
      <div className="freeconsultation__form-tab"></div>
      <section className="freeconsultation__patent-info">
        <p>2. 특허 정보</p>

        <div className="freeconsultation__form-info-container">
          <label className="freeconsultation__label-info">발명의 명칭</label>
          <p className="freeconsultation__p-desc">
            정하지 않으셨다면 '미정'으로 입력해주세요.
          </p>
          <div className="freeconsultation__input-box">
            <input
              maxLength="50"
              placeholder="예) #배터리, #무선충전"
              value={props.title}
              onChange={(e) => props.setTitle(e.target.value)}
            />
          </div>
        </div>

        <ButtonWrap setSelectedOptions={props.setSelectedOptions} />

        <div className="freeconsultation__form-info-container">
          <label className="freeconsultation__label-info">발명의 특징</label>
          <p className="freeconsultation__p-desc">간단하게라도 적어주세요.</p>
          <textarea
            className="freeconsultation__textarea"
            placeholder="간단하게라도 적어주세요."
            value={props.description}
            onChange={(e) => props.setDescription(e.target.value)}
          />
        </div>

        <div className="freeconsultation__form-info-container">
          <label className="freeconsultation__label-info">상담 내용</label>
          <p className="freeconsultation__p-desc">상담을 원하시는 내용을 적어주세요.</p>
          <textarea
            className="freeconsultation__textarea"
            value={props.counsling}
            onChange={(e) => props.setCounsling(e.target.value)}
          />
        </div>

        <div className="freeconsultation__file-container">
          <div className="freeconsultation__label-info" htmlFor="file-upload">
            첨부파일
          </div>
          <input type="file" ref={fileInputEl} onChange={handleFileInputChange} style={{ display: "none" }} />
          <button className="freeconsultation__file-btn" type="button" onClick={handleClick}>
            <img src={File} alt="file" className="freeconsultation__file-icon" />
            <span>파일 선택</span>
          </button>
          {selectedFile && (
            <div>
              <p>File name: {selectedFile.name}</p>
              <p>File size: {selectedFile.size} bytes</p>
            </div>
          )}
        </div>

        <div className="freeconsultation__agree-container">
          <input className="freeconsultation__agree" type="checkbox" onClick={handleCheckbox} />
          <label className="freeconsultation__agree-label">
            상담에 필요한{" "}
            <button className="freeconsultation__agree-card" type="button">
              개인정보 수집
            </button>{" "}
            동의
          </label>
        </div>

        <div className="freeconsultation__submit-container">
          <button className="freeconsultation__submit" type="submit" disabled={!agreed} onClick={props.handleSubmit}>
            상담 신청하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default SecondSection;
