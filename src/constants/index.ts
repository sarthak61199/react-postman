type IReqOption = {
  id: number;
  option: string;
}[];

export const reqOptions: IReqOption = [
  { id: 1, option: "GET" },
  { id: 2, option: "POST" },
  { id: 3, option: "DELETE" },
  { id: 4, option: "PUT" },
  { id: 5, option: "PATCH" },
];
