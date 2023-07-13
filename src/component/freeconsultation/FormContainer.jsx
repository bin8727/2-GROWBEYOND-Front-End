import FirstSection from "./FirstSection";
import FormTitle from "./FormTitle";
import SecondSection from "./SecondSection";

const FormContainer = () => {
  return (
    <div className="freeconsultation_container">
      <form className='freeconsultation_formWrap'>
        <FormTitle />

        <FirstSection />

        <SecondSection />
      </form>
    </div>
  );
};

export default FormContainer;