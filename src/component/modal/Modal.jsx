import { useState, useEffect } from "react";

const Modal = ({ selectData, updateData, onClose }) => {
  const [tempData, setTempData] = useState(selectData);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(true);
  
  const checkLogin = (input) => {
    if (input === selectData.email) {
      return true;
    } else {
      return false;
    }
  }

  const handlePasswordSubmit = () => {
    if (checkLogin(password)) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };

  const formData = (dateStr) => {
    const year = dateStr.slice(0, 4);
    const month = dateStr.slice(4, 6);
    const day = dateStr.slice(6, 8);
    return `${year}년 ${month}월 ${day}일`;
  };

  useEffect(() => {
    setTempData(selectData);
  }, [selectData]);

  const renderContent = () => {
    if (validPassword) {
      return (
        <>
          <button onClick={onClose}>닫기</button>
          
          <div className="small-window__invention__container">
            발명의 명칭: 
            <div className="small-window__invention-name__container">
              {selectData.title}
            </div>
          </div>
          <div className="small-window__invention__container">
            출원인: {selectData.name}
          </div>
          <div className="small-window__invention__container">
            출원일: {formData(selectData.created_at)}
          </div>
        </>
      );
    } else {
    return (
      <div>
        <label htmlFor="password-modal">비밀번호: </label>
        <input
          type="password"
          id="password-modal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handlePasswordSubmit}>확인</button>
        {validPassword === false && <p>비밀번호가 다릅니다.</p>}
      </div>
      );
    }
  };

  return (
    <div className="small-window">
      {renderContent()}
    </div>
  );
};

export default Modal;