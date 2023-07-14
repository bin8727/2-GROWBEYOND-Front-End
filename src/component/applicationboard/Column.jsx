import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import axiosInstance from '../../instance';

const Column = () => {
  const [isData, SetIsData] = useState(null);
  const [selectData, setSelectData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/boards/list');
        console.log(response);
        SetIsData(response.data.results);
      } catch(err) {
        console.log(err);
      }
    };
  
    fetchData();
  }, []);

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