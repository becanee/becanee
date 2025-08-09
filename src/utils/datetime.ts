import moment from "moment";
import "moment/locale/id";

/**
 * Func: format current date-time to 'dddd, DD MMMM YYYY | HH:mm A' in Indonesian
 * Created At: Minggu, 10 Agustus 2025
 * Created By: becaneee.xyz
 * @param date Optional Date or ISO string; defaults to now
 */
export function formatDateTimeIndonesian(date?: Date | string): string {
  const m = date ? moment(date) : moment();
  m.locale("id");
  // Example target: "Minggu, 10 Agustus 2025 | 03:05 Pagi"
  // Note: Use mm for minutes without extra space
  return `${m.format("dddd, DD MMMM YYYY")} | ${m.format("HH:mm")} ${m.format("A")}`
    // .replace("AM", "Pagi")
    // .replace("PM", "Sore");
}


