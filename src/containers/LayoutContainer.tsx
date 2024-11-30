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
  shouldParallelRoutes: boolean;
  setShouldParallelRoutes: Dispatch<SetStateAction<boolean>>;
  state: State;
}

export const LayoutContext = createContext<LayoutContext | null>(null);

export default function LayoutProvider({ children }: PropsWithChildren) {
  const [shouldParallelRoutes, setShouldParallelRoutes] = useState(false);
  const state = useRef<State>({});

  const contextValues: LayoutContext = {
    shouldParallelRoutes,
    setShouldParallelRoutes,
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
