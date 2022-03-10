import { CircleLeft, CircleRight } from "components/Circle";
import { DotLeft, DotRight } from "components/Dot";
import { useEffect, useMemo, useState } from "react";
import {
  PasswordStep,
  UsernameStep,
  StaySignedInStep,
} from "Pages/Signin/components";

type Props = {};

function SigninPage({}: Props) {
  const [step, setStep] = useState(0);
  const [showPage, setShowPage] = useState(null);
  const formTitles = useMemo(
    () => ["Sign In", "Sign In", "Stay signed in?"],
    []
  );

  const handleNextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const handlePrevStep = () => {
    if (step === 0) {
      window.location.href = "/";
    }
    setStep((currentStep) => currentStep - 1);
  };

  useEffect(() => {
    switch (step) {
      case 0:
        return setShowPage(
          <UsernameStep
            formTitle={formTitles[step]}
            prevStep={handlePrevStep}
            nextStep={handleNextStep}
          />
        );

      case 1:
        return setShowPage(
          <PasswordStep
            formTitle={formTitles[step]}
            prevStep={handlePrevStep}
            nextStep={handleNextStep}
          />
        );

      case 2:
        return setShowPage(
          <StaySignedInStep
            formTitle={formTitles[step]}
            prevStep={handlePrevStep}
            nextStep={handleNextStep}
          />
        );

      default:
        break;
    }

    return () => {};
  }, [step]);

  return (
    <>
      <div
        style={{ minHeight: "calc(100vh - (80px))" }}
        className="flex justify-center items-center relative min-h-screen overflow-hidden bg-primary
                    "
      >
        <CircleLeft />
        <CircleRight />

        <div className="relative p-8">
          <DotLeft className="bottom-0" />
          <div className="flex flex-col gap-6 w-96 p-8 rounded-xl bg-secondary">
            {showPage}
          </div>
          <DotRight className="top-0" />
        </div>
      </div>
    </>
  );
}

export default SigninPage;
