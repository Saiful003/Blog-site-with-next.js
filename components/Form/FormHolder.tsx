import React from "react";

function FormHolder({ children }: { children: React.ReactNode }) {
  return <div className="border shadow-md w-[400px] px-3 py-2">{children}</div>;
}

export default FormHolder;
