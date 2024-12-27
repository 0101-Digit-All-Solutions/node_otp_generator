export function generateOtp(
  length: number = 6,
  options: { numeric?: boolean; alphabets?: boolean; specialChars?: boolean } = {}
): string {
  const { numeric = true, alphabets = false, specialChars = false } = options;

  if (length <= 0) {
    throw new Error("Length must be a positive integer.");
  }

  let charSet = '';
  if (numeric) charSet += '0123456789';
  if (alphabets) charSet += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (specialChars) charSet += '!@#$%^&*()_+[]{}|;:,.<>?';

  if (!charSet) {
    throw new Error("At least one option must be true.");
  }

  let otp = '';
  if (numeric) {
    otp += '123456789'[Math.floor(Math.random() * 9)]; // Ensure the first character is not 0
    length--;
  }

  for (let i = 0; i < length; i++) {
    otp += charSet[Math.floor(Math.random() * charSet.length)];
  }

  return otp;
}
