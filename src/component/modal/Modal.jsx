import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axiosInstance from '../../instance';
import { useParams } from "react-router";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Modal = ({ selectData, updateData, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState(selectData);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);

  const { pk } = useParams();

  const checkPassword = (inputPassword) => {
    if (inputPassword === pk) {
      return true;
    } else {
      return false;
    }
  }

  const handlePasswordSubmit = () => {
    if (checkPassword(password)) {
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

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axiosInstance.put(`/api/boards/list/${pk}/`, selectData);
      updateData(response.data);
      setIsEditing(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/api/boards/list/${pk}/`);
        console.log(response);
      } catch(err) {
        console.log(err);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    setTempData(selectData);
  }, [selectData]);

  const renderInputField = (field) => {
    return (
      <input
      className="small-window__input"
      type="text"
      value={tempData[field]}
      onChange={(e) => {
        setTempData({...tempData, [field]: e.target.value});
      }}
    />
    );
  };

  const renderContent = () => {
    if (validPassword) {
      return (
        <>
          <button onClick={onClose}>닫기</button>
            {
              isEditing ? (
                <button onClick={handleSaveClick}>저장하기</button>
              ) : (
                <button onClick={handleEditClick}>수정하기</button>
            )}
            <h3>작은 창</h3>
          <div className="small-window__invention__container">
            발명의 명칭: 
            <div className="small-window__invention-name__container">
              {
              isEditing ? renderInputField('InventionName') : selectData.title
              }
            </div>
          </div>
          <div className="small-window__invention__container">
            출원인: {
              isEditing ? renderInputField('Applicant') : selectData.name
            }
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