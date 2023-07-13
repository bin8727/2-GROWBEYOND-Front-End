const FirstSection = (props) => {
  return (
    <>
      <div className='freeconsultation_formTab'></div>
      <section className='freeconsultation_formInformation'>
        <p>1. 신청인 정보</p>

        <div className='freeconsultation_formName'>
          <label className='freeconsultation_labelInfo'>성함</label>
          <p className='freeconsultation_pDesc'>
            신청인의 성함을 입력해주세요.
          </p>
          <div className='freeconsultation_inputBox'>
            <input 
              maxLength='50' 
              placeholder='예) 홍길동' 
              value={props.name}
              onChange={(e) => props.setName(e.target.value)}
            />
          </div>
        </div>

        <div className='freeconsultation_formPwd'>
          <label className='freeconsultation_labelInfo'>비밀번호</label>
          <p className='freeconsultation_pDesc'>
            특수문자를 포함한 숫자와 영어로 입력해주세요.(8자 이상)
          </p>
          <div className='freeconsultation_inputBox'>
            <input 
              type='password' 
              maxLength='50' 
              placeholder='********' 
              value={props.password}
              onChange={(e) => props.setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className='freeconsultation_formMobileNum'>
          <label className='freeconsultation_labelInfo'>전화번호</label>
          <p className='freeconsultation_pDesc'>
            '-' 뺀 숫자만 입력해주세요.
          </p>
          <div className='freeconsultation_inputBox'>
            <input 
              type='tel' 
              maxLength='50' 
              placeholder='예) 01012345678' 
              value={props.telephone}
              onChange={(e) => props.setTelephone(e.target.value)}
            />
          </div>
        </div>

        <div className='freeconsultation_formEmail'>
          <label className='freeconsultation_labelInfo'>이메일</label>
          <p className='freeconsultation_pDesc'>
            이메일 주소를 입력해주세요.
          </p>
          <div className='freeconsultation_inputBox'>
            <input 
              type='email' 
              maxLength='50' 
              placeholder='예) patent@naver.com' 
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;