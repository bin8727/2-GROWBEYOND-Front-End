import FirstSection from "./FirstSection";
import FormTitle from "./FormTitle";
import SecondSection from "./SecondSection";

const FormContainer = (props) => {
  return (
    <div className="freeconsultation__form-container">
      <form className='freeconsultation__form-wrap' onSubmit={props.handleSubmit}>
        <FormTitle />

        <FirstSection 
          name={props.name}
          setName={props.setName}
          password={props.password}
          setPassword={props.setPassword}
          telephone={props.telephone}
          setTelephone={props.setTelephone}
          email={props.email}
          setEmail={props.setEmail}
        />

        <SecondSection 
          name={props.name}
          setName={props.setName}
          password={props.password}
          setPassword={props.setPassword}
          telephone={props.telephone}
          setTelephone={props.setTelephone}
          email={props.email}
          setEmail={props.setEmail}
          title={props.title}
          setTitle={props.setTitle}
          description={props.description}
          setDescription={props.setDescription}
          counsling={props.counsling}
          setCounsling={props.setCounsling}
          file={props.file}
          setFile={props.setFile}
          handleSubmit={props.handleSubmit}
          setSelectedOptions={props.setSelectedOptions}
          isAgreed={props.isAgreed}
          setIsAgreed={props.setIsAgreed}
        />
      </form>
    </div>
  );
};

export default FormContainer;