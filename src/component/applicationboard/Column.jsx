import { useState } from "react";
import Modal from "../modal/Modal";;

const Column = () => {
  const [isData, SetIsData] = useState([
    {
      "ApplicationDate": "20060109",
      "InventionName": "황산아염 고착을 방지한 태양열 배터리 충전시스템",
      "Applicant": "임만식",
      "RegistrationStatus": "소멸"
    },
    {
      "ApplicationDate": "20191217",
      "InventionName": "스마트 기기와 통신되는 태양광 충전 시스템을 사용한 개별 배터리 셀 충전 시스템",
      "Applicant": "표구옥",
      "RegistrationStatus": "등록"
    },
    {
      "ApplicationDate": "20011226",
      "InventionName": "태양전지를 이용한 폴더형 충전 배터리",
      "Applicant": "주식회사 한림포스텍",
      "RegistrationStatus": "소멸"
    },
    {
      "ApplicationDate": "20210902",
      "InventionName": "1차 자력 변환 충전기 (태양광 에너지 및 일반전기로 모든 배터리에 발열 없이 안정적으로 빠르게 충전이 가능한 충전기)",
      "Applicant": "안계명",
      "RegistrationStatus": "공개"
    },
    {
      "ApplicationDate": "20211028",
      "InventionName": "태양전지 배터리 일체형 디바이스 및 태양전지 배터리 일체형 디바이스용 정공전자수송층",
      "Applicant": "한국전자기술연구원",
      "RegistrationStatus": "공개"
    },
    {
      "ApplicationDate": "20161031",
      "InventionName": "리튬이온 배터리를 활용한 태양광 LED 가로등",
      "Applicant": "주식회사 솔루엠",
      "RegistrationStatus": "공개"
    },
    {
      "ApplicationDate": "20211028",
      "InventionName": "태양전지 배터리 일체형 디바이스 및 태양전지 배터리 일체형 디바이스용 광흡수저장층",
      "Applicant": "한국전자기술연구원",
      "RegistrationStatus": "공개"
    },
  ]);
  const [selectData, setSelectData] = useState(null);

  const onSelectRow = (row) => {
    setSelectData(row);
  };

  const closeSmallWindow = () => {
    setSelectData(null)
  };

  const updateData = (updateData) => {
    SetIsData(
      isData.map(
        item => 
          item.ApplicationDate === updateData.ApplicationDate ? 
          updateData : item));
  };
  
  const formData = (dateStr) => {
    const year = dateStr.slice(0, 4);
    const month = dateStr.slice(4, 6);
    const day = dateStr.slice(6, 8);
    return `${year}년 ${month}월 ${day}일`;
  };

  const columns = ['발명의 명칭', '출원인', '출원상태', '출원일'];
  return (
    <>
      {selectData && (
        <>
        <div className="small-window-backdrop" onClick={closeSmallWindow}></div>
        <Modal selectData={selectData} onClose={closeSmallWindow} updateData={updateData} />
        </>
      )}
      

      <div className='application-board__column-tab'></div>
      <section className='application-board__column'>
        <table className="application-board__table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          {isData ? (
            <tbody>
            {isData.map((row, index) => (
              <tr key={index}>
                <td onClick={() => {onSelectRow(row)}}>{row.InventionName}</td>
                <td>{row.Applicant}</td>
                <td>{row.RegistrationStatus}</td>
                <td>{formData(row.ApplicationDate)}</td>
              </tr>
            ))}
          </tbody>
          ) : (
            <p>Loading...</p>
          )}
        </table>
      </section>
    </>
  );
};

export default Column;