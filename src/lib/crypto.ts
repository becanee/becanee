/**
 * Func: Helper functions untuk encrypt dan decrypt data menggunakan crypto-js
 * Created At: Kamis, 7 Agustus 2025
 * Created By: becaneee.xyz
 */

import CryptoJS from 'crypto-js'

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || 'XFRXKUmRwZJmzgfjq6lne92RFXwkZmyt'

/**
 * Func: Encrypt data menjadi string yang aman
 * Created At: Kamis, 7 Agustus 2025
 * Created By: becaneee.xyz
 * @param data - Data yang akan dienkripsi (object atau string)
 * @returns String terenkripsi
 */
export function encryptData(data: any): string {
  const jsonString = JSON.stringify(data)
  return CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString()
}

/**
 * Func: Decrypt string terenkripsi menjadi data asli
 * Created At: Kamis, 7 Agustus 2025
 * Created By: becaneee.xyz
 * @param encryptedData - String terenkripsi
 * @returns Data asli (object atau string)
 */
export function decryptData(encryptedData: string): any {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY)
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8)
    return JSON.parse(decryptedString)
  } catch (error) {
    console.error('Error decrypting data:', error)
    return null
  }
}
