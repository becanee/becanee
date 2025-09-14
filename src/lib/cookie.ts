/**
 * Func: Helper functions untuk manage cookie browser
 * Created At: Kamis, 7 Agustus 2025
 * Created By: becaneee.xyz
 */

import { encryptData, decryptData } from './crypto'
import { getCookie } from 'cookies-next';

const USER_COOKIE_NAME = '_U'

/**
 * Func: Set user data ke cookie browser dengan enkripsi
 * Created At: Kamis, 7 Agustus 2025
 * Created By: becaneee.xyz
 * @param userData - Data user yang akan disimpan
 * @param days - Jumlah hari cookie akan bertahan (default: 1 hari)
 */
export function setUserCookie(userData: any, days: number = 1): void {
  const encryptedData = encryptData(userData)
  const expires = new Date()
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000))

  document.cookie = `${USER_COOKIE_NAME}=${encryptedData}; expires=${expires.toUTCString()}; path=/; SameSite=Strict`
}

/**
 * Func: Get user data dari cookie browser dengan dekripsi
 * Created At: Kamis, 7 Agustus 2025
 * Created By: becaneee.xyz
 * @returns Data user atau null jika tidak ada
 */
export function getUserCookie(): any {
  const userCookie = getCookie(USER_COOKIE_NAME)

  if (!userCookie) return null
  if (typeof userCookie === 'string') {
    return decryptData(userCookie)
  }
  return null
}

/**
 * Func: Hapus user cookie dari browser
 * Created At: Kamis, 7 Agustus 2025
 * Created By: becaneee.xyz
 */
export function removeUserCookie(): void {
  document.cookie = `${USER_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

/**
 * Func: Cek apakah user sudah login (ada cookie)
 * Created At: Kamis, 7 Agustus 2025
 * Created By: becaneee.xyz
 * @returns Boolean true jika user sudah login
 */
export function isUserLoggedIn(): boolean {
  return getUserCookie() !== null
}