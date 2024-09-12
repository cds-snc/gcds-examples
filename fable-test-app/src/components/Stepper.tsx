import React, { LegacyRef } from 'react';
import { GcdsStepper } from "@cdssnc/gcds-components-react";

interface StepperProps {
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3";
  currentStep: number;
  totalSteps: number;
  className?: string;
  ref: LegacyRef<HTMLGcdsStepperElement> | undefined;
  tabIndex: number;
}

const Stepper: React.FC<StepperProps> = React.memo(({
  children,
  tag,
  currentStep,
  totalSteps,
  className,
  ref,
  tabIndex
}) => (
  <GcdsStepper
    tag={tag}
    currentStep={currentStep}
    totalSteps={totalSteps}
    className={className}
    ref={ref}
    tabIndex={tabIndex}
  >
    {children}
  </GcdsStepper>
));

export default Stepper;