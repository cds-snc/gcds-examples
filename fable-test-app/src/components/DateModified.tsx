import React from "react";
import { GcdsDateModified } from "@gcds-core/components-react";

interface DateProps {
  children: React.ReactNode;
}

const DateModified: React.FC<DateProps> = React.memo(({ children }) => (
  <GcdsDateModified>{children}</GcdsDateModified>
));

export default DateModified;
