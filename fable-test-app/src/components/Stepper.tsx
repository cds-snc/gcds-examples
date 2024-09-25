import React from 'react';
import { GcdsStepper } from "@cdssnc/gcds-components-react";

interface StepperProps {
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3";
  currentStep: number;
  totalSteps: number;
  className?: string;
  tabIndex: number;
}

const Stepper: React.FC<StepperProps> = React.memo(({
  children,
  tag,
  currentStep,
  totalSteps,
  className,
  tabIndex
}) => (
  <GcdsStepper
    tag={tag}
    currentStep={currentStep}
    totalSteps={totalSteps}
    className={className}
    tabIndex={tabIndex}
  >
    {children}
  </GcdsStepper>
));

export default Stepper;