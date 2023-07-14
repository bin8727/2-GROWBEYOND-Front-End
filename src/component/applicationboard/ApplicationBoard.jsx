import MiddleContainer from "./MiddleContainer";
import TopContainer from "./TopContainer";

const ApplicationBoard = () => {
  return (
    <div className="application-board">
      <TopContainer />

      <MiddleContainer />
    </div>
  );
};

export default ApplicationBoard;