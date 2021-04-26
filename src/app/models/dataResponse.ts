export interface YearInterface {
  year: String;
  months: Array<MonthInterface>;
}

interface MonthInterface {
  monthName: string;
  pregnantsAmount: number;
  kidsAmount: number;
}
