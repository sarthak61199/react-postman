import { create } from "zustand";

interface UrlState {
  requestMethod: string;
  requestUrl: string;
  queryParam: QueryParam[];
  setRequestMethod: (value: string) => void;
  setRequestUrl: (value: string) => void;
  setQueryParam: (value: QueryParam[]) => void;
}

export interface QueryParam {
  queryKey: string;
  queryValue: string;
}

interface UrlProps {
  requestMethod: string;
  requestUrl: string;
  queryParam: QueryParam[];
}

interface CollectionState {
  requestCollection: UrlProps[];
  setRequestCollection: (value: UrlProps) => void;
}

export const useUrlStore = create<UrlState>()((set) => ({
  requestMethod: "GET",
  requestUrl: "",
  queryParam: [],
  setRequestMethod: (value: string) => set(() => ({ requestMethod: value })),
  setRequestUrl: (value: string) => set(() => ({ requestUrl: value })),
  setQueryParam: (value: QueryParam[]) => set(() => ({ queryParam: value })),
}));

export const useCollectionStore = create<CollectionState>()((set) => ({
  requestCollection: [],
  setRequestCollection: (value: UrlProps) =>
    set((state) => ({
      requestCollection: [...state.requestCollection, value],
    })),
}));
