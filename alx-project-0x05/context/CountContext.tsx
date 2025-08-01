import { createContext, useContext, useState, ReactNode } from "react";

// Define the context interface
interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Create context with explicit type
export const CountContext = createContext<CountContextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {}
});

// Create provider component
export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  // Define increment function
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Define decrement function
  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // Provide all required values
  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

// Custom hook for using the context
export const useCount = () => {
  const context = useContext(CountContext);
  
  // This check is now redundant since we provided default values,
  // but kept for type safety in case provider pattern changes
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }

  return context;
};
