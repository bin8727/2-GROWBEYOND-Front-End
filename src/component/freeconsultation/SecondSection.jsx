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
    <div className="freeconsultation_patentInfoWrap">
      <div className="freeconsultation_formTab"></div>
      <section className="freeconsultation_patentInfo">
        <p>2. 특허 정보</p>

        <div className="freeconsultation_formMobileNum">
          <label className="freeconsultation_labelInfo">발명의 명칭</label>
          <p className="freeconsultation_pDesc">
            정하지 않으셨다면 '미정'으로 입력해주세요.
          </p>
          <div className="freeconsultation_inputBox">
            <input
              maxLength="50"
              placeholder="예) #배터리, #무선충전"
              value={props.title}
              onChange={(e) => props.setTitle(e.target.value)}
            />
          </div>
        </div>

        <ButtonWrap setSelectedOptions={props.setSelectedOptions} />

        <div className="freeconsultation_formMobileNum">
          <label className="freeconsultation_labelInfo">발명의 특징</label>
          <p className="freeconsultation_pDesc">간단하게라도 적어주세요.</p>
          <textarea
            className="freeconsultation_textArea"
            placeholder="간단하게라도 적어주세요."
            value={props.description}
            onChange={(e) => props.setDescription(e.target.value)}
          />
        </div>

        <div className="freeconsultation_formMobileNum">
          <label className="freeconsultation_labelInfo">상담 내용</label>
          <p className="freeconsultation_pDesc">상담을 원하시는 내용을 적어주세요.</p>
          <textarea
            className="freeconsultation_textArea"
            value={props.counsling}
            onChange={(e) => props.setCounsling(e.target.value)}
          />
        </div>

        <div className="freeconsultation_fileWrap">
          <div className="freeconsultation_labelInfo" htmlFor="file-upload">
            첨부파일
          </div>
          <input type="file" ref={fileInputEl} onChange={handleFileInputChange} style={{ display: "none" }} />
          <button className="freeconsultation_fileBtn" type="button" onClick={handleClick}>
            <img src={File} alt="file" className="freeconsultation_fileIcon" />
            <span>파일 선택</span>
          </button>
          {selectedFile && (
            <div>
              <p>File name: {selectedFile.name}</p>
              <p>File size: {selectedFile.size} bytes</p>
            </div>
          )}
        </div>

        <div className="freeconsultation_agreeWrap">
          <input className="freeconsultation_agree" type="checkbox" onClick={handleCheckbox} />
          <label className="freeconsultation_agreeLabel">
            상담에 필요한{" "}
            <button className="freeconsultation_agreeCard" type="button">
              개인정보 수집
            </button>{" "}
            동의
          </label>
        </div>

        <div className="freeconsultation_submitWrap">
          <button className="freeconsultation_submit" type="submit" disabled={!agreed} onClick={props.handleSubmit}>
            상담 신청하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default SecondSection;
