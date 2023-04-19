import { create } from "zustand";

export const useUrlStore = create((set) => ({
  requestMethod: "GET",
  requestUrl: "",
  queryParam: [],
  headers: [],
  body: "{}",
  setRequestMethod: (value) => set(() => ({ requestMethod: value })),
  setRequestUrl: (value) => set(() => ({ requestUrl: value })),
  setQueryParam: (value) => set(() => ({ queryParam: value })),
  setHeaders: (value) => set(() => ({ headers: value })),
  setBody: (value) => set(() => ({ body: value })),
}));

export const useCollectionStore = create((set) => ({
  requestCollection: [],
  setRequestCollection: (value) =>
    set((state) => ({
      requestCollection: [...state.requestCollection, value],
    })),
}));

export const useBodyStore = create((set) => ({
  bodyDisplay: "",
  setBodyDisplay: (value) => set(() => ({ bodyDisplay: value })),
}));
