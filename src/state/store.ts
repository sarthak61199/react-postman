import { create } from "zustand";

interface UrlState {
  requestMethod: string;
  requestUrl: string;
  setRequestMethod: (value: string) => void;
  setRequestUrl: (value: string) => void;
}

interface UrlProps {
  requestMethod: string;
  requestUrl: string;
}

interface CollectionState {
  requestCollection: UrlProps[];
  setRequestCollection: (value: UrlProps) => void;
}

export const useUrlStore = create<UrlState>()((set) => ({
  requestMethod: "GET",
  requestUrl: "",
  setRequestMethod: (value: string) => set(() => ({ requestMethod: value })),
  setRequestUrl: (value: string) => set(() => ({ requestUrl: value })),
}));

export const useCollectionStore = create<CollectionState>()((set) => ({
  requestCollection: [],
  setRequestCollection: (value: UrlProps) =>
    set((state) => ({
      requestCollection: [...state.requestCollection, value],
    })),
}));
