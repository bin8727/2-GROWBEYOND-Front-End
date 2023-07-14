import { useState, useEffect } from "react";
import axiosInstance from '../../instance';

const Modal = ({ data, updateData, onClose, post_pk }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState(data);

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
      const response = await axiosInstance.put(`/api/boards/detail/${post_pk}/`, data);
      updateData(response.data);
      setIsEditing(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTempData(data);
  }, [data]);

  const renderInputField = (field) => {
    return (
      <input
      type="text"
      value={tempData[field]}
      onChange={(e) => {
        setTempData({...tempData, [field]: e.target.value});
      }}
    />
    );
  };

  return (
    <div className="small-window">
      <button onClick={onClose}>닫기</button>
      {
        isEditing ? (
          <button onClick={handleSaveClick}>저장하기</button>
        ) : (
          <button onClick={handleEditClick}>수정하기</button>
      )}
      <h3>작은 창</h3>
      <div>
        발명의 명칭: {
        isEditing ? renderInputField('InventionName') : data.InventionName
        }
      </div>
      <div>
        출원인: {
          isEditing ? renderInputField('Applicant') : data.Applicant
        }
      </div>
      <div>출원상태: {data.RegistrationStatus}</div>
      <div>출원일: {formData(data.ApplicationDate)}</div>
    </div>
  );
};

export default Modal;