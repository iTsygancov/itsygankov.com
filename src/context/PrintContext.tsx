"use client";

import { createContext, useContext, useState } from "react";

type PrintContext = {
  shouldPrintDetails: boolean;
  setShouldPrintDetails: (value: boolean) => void;
};

export const PrintContext = createContext<PrintContext | undefined>(undefined);

export const PrintContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [shouldPrintDetails, setShouldPrintDetails] = useState(true);

  return (
    <PrintContext.Provider
      value={{ shouldPrintDetails, setShouldPrintDetails }}
    >
      {children}
    </PrintContext.Provider>
  );
};

export const usePrintContext = () => {
  const context = useContext(PrintContext);
  if (context === undefined) {
    throw new Error("usePrintContext must be used within a PrintProvider");
  }
  return context;
};
