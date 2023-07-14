import TopContainer from '../component/freeconsultation/TopContainer';
import MiddleContainer from '../component/freeconsultation/MiddleContainer';
import FormContainer from '../component/freeconsultation/FormContainer';
import axiosInstance from '../instance';
import { useState } from 'react';
import { useNavigate } from 'react-router';


const FreeConsoltation = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [counsling, setCounsling] = useState('');
  const [file, setFile] = useState('');
  const [selectedOptions, setSelectedOptions] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");

    const formData = new FormData();
    formData.append('name', name);
    formData.append('password', password);
    formData.append('telephone', telephone);
    formData.append('email', email);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('counsling', counsling);
    formData.append('file', file);
    formData.append('selectedOptions', selectedOptions)

    axiosInstance.post('/api/boards/write/', formData) 
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

      navigate('/');
  };

  return (
    <div className="freeconsultation">
      <TopContainer />

      <MiddleContainer />

      <FormContainer 
        name={name}
        setName={setName}
        password={password}
        setPassword={setPassword}
        telephone={telephone}
        setTelephone={setTelephone}
        email={email}
        setEmail={setEmail}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        counsling={counsling}
        setCounsling={setCounsling}
        file={file}
        setFile={setFile}
        handleSubmit={handleSubmit}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
      />

      <div className='freeconsultation__bottom'></div>
    </div>
  );
};

export default FreeConsoltation;