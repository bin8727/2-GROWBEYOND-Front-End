import ButtonWrap from "./ButtonWrap";
import { useState } from "react";

const SecondSection = () => {
  const [agreed, setAgreed] = useState(false);

  const handleCheckbox = () => {
    setAgreed(!agreed);
  };

  return (
    <div className='freeconsultation_patentInfoWrap'>
      <div className='freeconsultation_formTab'></div>
      <section className='freeconsultation_patentInfo'>
        <p>2. 특허 정보</p>

        <div className='freeconsultation_formMobileNum'>
          <label className='freeconsultation_labelInfo'>발명의 명칭</label>
          <p className='freeconsultation_pDesc'>
            정하지 않으셨다면 '미정'으로 입력해주세요.
          </p>
          <div className='freeconsultation_inputBox'>
            <input maxLength='50' />
          </div>
        </div>
              
        <ButtonWrap />

        <div className='freeconsultation_formMobileNum'>
          <label className='freeconsultation_labelInfo'>발명의 특징</label>
          <p className='freeconsultation_pDesc'>
            간단하게라도 적어주세요.
          </p>
          <textarea className="freeconsultation_textArea" placeholder="첨부할 자료가 있는 경우 파일을 첨부해주세요." />
        </div>

        <div className='freeconsultation_formMobileNum'>
          <label className='freeconsultation_labelInfo'>상담 내용</label>
          <p className='freeconsultation_pDesc'>
            상담을 원하시는 내용을 적어주세요.
          </p>
          <textarea className="freeconsultation_textArea" />
        </div>

        <div className='freeconsultation_agreeWrap'>
          <input 
            className='freeconsultation_agree' 
            type='checkbox' 
            onClick={handleCheckbox} 
          />
          <label className='freeconsultation_agreeLabel'>
            상담에 필요한 {' '}
            <button className='freeconsultation_agreeCard' type='button'>개인정보 수집</button>
            {' '}동의
          </label>
        </div>

        <div className='freeconsultation_submitWrap'>
          <button 
            className='freeconsultation_submit' 
            type='button' 
            disabled={!agreed} 
            onClick={handleCheckbox}
          >
          상담 신청하기
          </button>
        </div>

      </section>
    </div>
  );
};

export default SecondSection;