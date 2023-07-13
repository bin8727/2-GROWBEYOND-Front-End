import TopContainer from '../component/freeconsultation/TopContainer';
import MiddleContainer from '../component/freeconsultation/MiddleContainer';
import FormContainer from '../component/freeconsultation/FormContainer';
import { useState } from 'react';
import axios from 'axios';


const FreeConsoltation = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [counsling, setCounsling] = useState('');
  const [file, setFile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('password', password);
    formData.append('telephone', telephone);
    formData.append('email', email);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('counsling', counsling);
    formData.append('file', file);

    axios.post('/api/boards/write/', formData) 
      .then((res) => {
        console.log(res);
      })
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
      />

      <div className='freeconsultation_bottom'></div>
    </div>
  );
};

export default FreeConsoltation;