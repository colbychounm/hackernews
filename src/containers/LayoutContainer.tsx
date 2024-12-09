"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

interface State {
  userId?: string;
  itemId?: number;
}

interface LayoutContext {
  parallelRoute: string;
  setParallelRoute: Dispatch<SetStateAction<string>>;
  state: State;
}

export const LayoutContext = createContext<LayoutContext | null>(null);

export default function LayoutProvider({ children }: PropsWithChildren) {
  const [parallelRoute, setParallelRoute] = useState("");
  const state = useRef<State>({});

  const contextValues: LayoutContext = {
    parallelRoute,
    setParallelRoute,
    state: state.current,
  };

  return (
    <LayoutContext.Provider value={contextValues}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayoutContext(): LayoutContext {
  return useContext(LayoutContext)!;
}
