import TopContainer from '../component/freeconsultation/TopContainer';
import MiddleContainer from '../component/freeconsultation/MiddleContainer';
import FormContainer from '../component/freeconsultation/FormContainer';


const FreeConsoltation = () => {

  return (
    <div className="freeconsultation">
      <TopContainer />

      <MiddleContainer />

      <FormContainer />

      <div className='freeconsultation_bottom'></div>
    </div>
  );
};

export default FreeConsoltation;