import CustomButton from "../../CustomButton";
import Chronometer from "../../Chronometer";

const Index = () => {
  const handleStart = () => {};
  return (
    <div className="flex-1 pt-36 padding-x">
      <p className="hero__title">Don&apos;t miss !</p>

      <p className="hero__subtitle">
        Don &apos; t miss this unique opportunity to acquire your ideal car!
        Take the first step and seize this exceptional chance.
      </p>
      <CustomButton
        title="Start"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleStart}
      />
    </div>
  );
};
export default Index;
