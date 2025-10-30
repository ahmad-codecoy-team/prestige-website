export interface Event {
  id: number;
  title: string;
  venue: string;
  address: string;
}

export interface Shift {
  id: number;
  position: string;
  startDate: string;
  endDate: string;
  Event: Event;
}

export interface AvailableShifts {
  id: number;
  startDate: string;
  endDate: string;
  quantity: number;
  position: string;
  shift: Shift;
}
