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
    if (step === 2) {
      window.location.href = "/";
    }
    setStep((currentStep) => currentStep + 1);
  };

  const handlePrevStep = () => {
    if (step === 0) {
      window.location.href = "/";
    }
    setStep((currentStep) => currentStep - 1);
  };

  const gotoStep = (step: number) => {
    setStep(step);
  };

  useEffect(() => {
    switch (step) {
      case 0:
        return setShowPage(
          <UsernameStep
            gotoStep={gotoStep}
            formTitle={formTitles[step]}
            prevStep={handlePrevStep}
            nextStep={handleNextStep}
          />
        );

      case 1:
        return setShowPage(
          <PasswordStep
            gotoStep={gotoStep}
            formTitle={formTitles[step]}
            prevStep={handlePrevStep}
            nextStep={handleNextStep}
          />
        );

      case 2:
        return setShowPage(
          <StaySignedInStep
            gotoStep={gotoStep}
            formTitle={formTitles[step]}
            prevStep={handlePrevStep}
            nextStep={handleNextStep}
          />
        );

      default:
        break;
    }

    return () => {};
  }, [step, formTitles, handlePrevStep, handleNextStep]);

  return (
    <>
      <div
        style={{ minHeight: "calc(100vh - (80px))"}}
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary"
      >
        <CircleLeft />
        <CircleRight />
        <div className="relative p-8">
          <DotLeft className="bottom-0" />
          <div className="flex w-96 flex-col gap-6 rounded-xl bg-secondary p-8 ">
            {showPage}
          </div>
          <DotRight className="top-0" />
        </div>
      </div>
    </>
  );
}

export default SigninPage;
