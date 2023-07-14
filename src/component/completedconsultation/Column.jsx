import { useState } from "react";

const Column = () => {
  const [data, setData] = useState([
    {
      "ApplicationDate": "2006.01.09",
      "InventionName": "황산아염 고착을 방지한 태양열 배터리 충전시스템",
      "Applicant": "임만식",
      "RegistrationStatus": "소멸"
    },
    {
      "ApplicationDate": "2019.12.17",
      "InventionName": "스마트 기기와 통신되는 태양광 충전 시스템을 사용한 개별 배터리 셀 충전 시스템",
      "Applicant": "표구옥",
      "RegistrationStatus": "등록"
    },
    {
      "ApplicationDate": "2001.12.26",
      "InventionName": "태양전지를 이용한 폴더형 충전 배터리",
      "Applicant": "주식회사 한림포스텍",
      "RegistrationStatus": "소멸"
    },
    {
      "ApplicationDate": "2021.09.02",
      "InventionName": "1차 자력 변환 충전기 (태양광 에너지 및 일반전기로 모든 배터리에 발열 없이 안정적으로 빠르게 충전이 가능한 충전기)",
      "Applicant": "안계명",
      "RegistrationStatus": "공개"
    },
    {
      "ApplicationDate": "2021.10.28",
      "InventionName": "태양전지 배터리 일체형 디바이스 및 태양전지 배터리 일체형 디바이스용 정공전자수송층",
      "Applicant": "한국전자기술연구원",
      "RegistrationStatus": "공개"
    },
    {
      "ApplicationDate": "2016.10.31",
      "InventionName": "리튬이온 배터리를 활용한 태양광 LED 가로등",
      "Applicant": "주식회사 솔루엠",
      "RegistrationStatus": "공개"
   },
    {
      "ApplicationDate": "2021.10.28",
      "InventionName": "태양전지 배터리 일체형 디바이스 및 태양전지 배터리 일체형 디바이스용 광흡수저장층",
      "Applicant": "한국전자기술연구원",
      "RegistrationStatus": "공개"
    },
  ]);

  const columns = ['발명의 명칭', '출원인', '출원상태', '출원일'];
  return (
    <>
      <div className='completed-consultation__column-container'></div>
      <section className='completed-consultation__column'>
        <table className="completed-consultation__table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.InventionName}</td>
                <td>{row.Applicant}</td>
                <td>{row.RegistrationStatus}</td>
                <td>{row.ApplicationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Column;