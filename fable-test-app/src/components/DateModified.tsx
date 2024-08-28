import React from 'react';
import { GcdsDateModified } from "@cdssnc/gcds-components-react";

const DateModified: React.FC = React.memo(({children}) => (
  <GcdsDateModified>{children}</GcdsDateModified>
));

export default DateModified;