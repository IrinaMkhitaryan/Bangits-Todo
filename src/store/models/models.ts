export type CoordType = { lon: number; lat: number };
export type ForecastType = { date: string; temp: number; icon: string };
export type TodoItemType = {
  id?: number,
  title: string,
  description?: string,
  deadline: Date | '',
  status?: string

};
