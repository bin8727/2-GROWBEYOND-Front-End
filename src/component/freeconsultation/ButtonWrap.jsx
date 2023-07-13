import { useState } from "react";

const ButtonWrap = (props) => {
  const [options, setOptions] = useState([
    { id: 1, name: '전자/전기', isChecked: false },
    { id: 2, name: 'BM', isChecked: false },
    { id: 3, name: '기계', isChecked: false },
    { id: 4, name: '화학', isChecked: false },
    { id: 5, name: '의약', isChecked: false },
    { id: 6, name: '바이오', isChecked: false },
    { id: 7, name: '식품/음식', isChecked: false },
    { id: 8, name: '기구/장치', isChecked: false },
  ]);

  const handleSelected = (event) => {
    const { name, checked } = event.target;
    const updatedOptions = options.map((option) => ({
      ...option,
      isChecked: option.name === name ? checked : false,
    }));
    setOptions(updatedOptions);

    const selectedOption = updatedOptions.find((option) => option.isChecked);
    props.setSelectedOptions(selectedOption ? selectedOption.name : '');
  };

  return (
    <div className='freeconsultation_selectBoxContainer'>
      <label className='freeconsultation_labelInfo'>발명의 분야</label>
      <div className='freeconsultation_selectBox'>
        {options.map((option) => (
          <div className='freeconsultation_select' key={option.id}>
            <div className='freeconsultation_checkBoxWrap'>
              <input 
                id={option.id}
                className='freeconsultation_checkBox' 
                type='checkbox' 
                name={option.name}
                checked={option.isChecked}
                onChange={handleSelected}
              />
            </div>
            <p className={`freeconsultation_selectDesc ${option.isChecked ? 'checked' : ''}`}>{option.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonWrap;