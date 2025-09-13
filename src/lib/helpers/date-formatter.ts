import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/id'; // Import locale Indonesia

// Set default locale ke Indonesia
moment.locale('id');

/**
 * Interface untuk opsi formatting tanggal
 */
export interface DateFormatOptions {
  format?: string;
  includeTime?: boolean;
  includeSeconds?: boolean;
  customFormat?: string;
}

/**
 * Fungsi helper untuk mengkonversi berbagai format tanggal ke format Indonesia
 * @param dateInput - Input tanggal dalam berbagai format (string, Date, number, moment)
 * @param options - Opsi formatting tanggal
 * @returns String tanggal dalam format Indonesia
 */
export function formatToIndonesian(
  dateInput: string | Date | number | moment.Moment,
  options: DateFormatOptions = {}
): string {
  const {
    format = 'DD MMMM YYYY',
    includeTime = false,
    includeSeconds = false,
    customFormat
  } = options;

  // Validasi input
  if (!dateInput) {
    return 'Tanggal tidak valid';
  }

  // Parse input menggunakan moment
  const momentDate = moment(dateInput);

  // Validasi apakah tanggal valid
  if (!momentDate.isValid()) {
    return 'Format tanggal tidak valid';
  }

  // Jika ada custom format, gunakan itu
  if (customFormat) {
    return momentDate.format(customFormat);
  }

  // Tentukan format berdasarkan opsi
  let finalFormat = format;
  
  if (includeTime) {
    if (includeSeconds) {
      finalFormat += ', HH:mm:ss';
    } else {
      finalFormat += ', HH:mm';
    }
  }

  return momentDate.format(finalFormat);
}

/**
 * Fungsi untuk format tanggal lengkap dengan waktu
 * @param dateInput - Input tanggal
 * @returns String tanggal dalam format "DD MMMM YYYY, HH:mm:ss"
 */
export function formatFullDateTime(
  dateInput: string | Date | number | moment.Moment
): string {
  return formatToIndonesian(dateInput, {
    format: 'DD MMMM YYYY',
    includeTime: true,
    includeSeconds: true
  });
}

/**
 * Fungsi untuk format tanggal saja tanpa waktu
 * @param dateInput - Input tanggal
 * @returns String tanggal dalam format "DD MMMM YYYY"
 */
export function formatDateOnly(
  dateInput: string | Date | number | moment.Moment
): string {
  return formatToIndonesian(dateInput, {
    format: 'DD MMMM YYYY'
  });
}

/**
 * Fungsi untuk format tanggal pendek
 * @param dateInput - Input tanggal
 * @returns String tanggal dalam format "DD/MM/YYYY"
 */
export function formatShortDate(
  dateInput: string | Date | number | moment.Moment
): string {
  return formatToIndonesian(dateInput, {
    customFormat: 'DD/MM/YYYY'
  });
}

/**
 * Fungsi untuk format waktu saja
 * @param dateInput - Input tanggal
 * @returns String waktu dalam format "HH:mm:ss"
 */
export function formatTimeOnly(
  dateInput: string | Date | number | moment.Moment
): string {
  return formatToIndonesian(dateInput, {
    customFormat: 'HH:mm:ss'
  });
}

/**
 * Fungsi untuk format tanggal relatif (contoh: "2 hari yang lalu")
 * @param dateInput - Input tanggal
 * @returns String tanggal relatif dalam bahasa Indonesia
 */
export function formatRelativeTime(
  dateInput: string | Date | number | moment.Moment
): string {
  const momentDate = moment(dateInput);
  
  if (!momentDate.isValid()) {
    return 'Tanggal tidak valid';
  }
  
  return momentDate.fromNow();
}

/**
 * Fungsi untuk format tanggal dengan nama hari
 * @param dateInput - Input tanggal
 * @returns String tanggal dengan nama hari dalam format "dddd, DD MMMM YYYY"
 */
export function formatWithDayName(
  dateInput: string | Date | number | moment.Moment
): string {
  return formatToIndonesian(dateInput, {
    customFormat: 'dddd, DD MMMM YYYY'
  });
}

/**
 * Fungsi untuk mendapatkan timestamp saat ini dalam format Indonesia
 * @returns String timestamp saat ini
 */
export function getCurrentTimestamp(): string {
  return formatFullDateTime(new Date());
}

/**
 * Fungsi untuk parsing tanggal dari string dengan format tertentu
 * @param dateString - String tanggal
 * @param inputFormat - Format input (opsional)
 * @returns Moment object atau null jika tidak valid
 */
export function parseDate(
  dateString: string,
  inputFormat?: string
): moment.Moment | null {
  const parsed = inputFormat 
    ? moment(dateString, inputFormat)
    : moment(dateString);
    
  return parsed.isValid() ? parsed : null;
}

/**
 * Fungsi untuk mengkonversi timezone
 * @param dateInput - Input tanggal
 * @param timezone - Target timezone (default: 'Asia/Jakarta')
 * @returns String tanggal dalam timezone yang ditentukan
 */
export function formatWithTimezone(
  dateInput: string | Date | number | moment.Moment,
  timezone: string = 'Asia/Jakarta'
): string {
  const momentDate = moment(dateInput).tz(timezone);
  
  if (!momentDate.isValid()) {
    return 'Tanggal tidak valid';
  }
  
  return momentDate.format('dddd, DD MMMM YYYY | HH:mm [WIB]');
}

/**
 * Fungsi untuk mendapatkan range tanggal
 * @param startDate - Tanggal mulai
 * @param endDate - Tanggal akhir
 * @returns String range tanggal
 */
export function formatDateRange(
  startDate: string | Date | number | moment.Moment,
  endDate: string | Date | number | moment.Moment
): string {
  const start = moment(startDate);
  const end = moment(endDate);
  
  if (!start.isValid() || !end.isValid()) {
    return 'Range tanggal tidak valid';
  }
  
  return `${start.format('DD MMMM YYYY')} - ${end.format('DD MMMM YYYY')}`;
}

// Export default untuk kemudahan penggunaan
export default {
  formatToIndonesian,
  formatFullDateTime,
  formatDateOnly,
  formatShortDate,
  formatTimeOnly,
  formatRelativeTime,
  formatWithDayName,
  getCurrentTimestamp,
  parseDate,
  formatWithTimezone,
  formatDateRange
};