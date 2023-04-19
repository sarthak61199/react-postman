import { create } from "zustand";

export const useUrlStore = create((set) => ({
  requestMethod: "GET",
  requestUrl: "",
  queryParam: [],
  headers: [],
  setRequestMethod: (value) => set(() => ({ requestMethod: value })),
  setRequestUrl: (value) => set(() => ({ requestUrl: value })),
  setQueryParam: (value) => set(() => ({ queryParam: value })),
  setHeaders: (value) => set(() => ({ headers: value })),
}));

export const useCollectionStore = create((set) => ({
  requestCollection: [],
  setRequestCollection: (value) =>
    set((state) => ({
      requestCollection: [...state.requestCollection, value],
    })),
}));
