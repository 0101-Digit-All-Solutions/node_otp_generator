import { generateOtp } from './index';

test('generates numeric OTPs that do not start with 0', () => {
  const otp = generateOtp(6, { numeric: true });
  expect(otp).toMatch(/^[1-9][0-9]{5}$/);
});

test('throws an error if length is zero or negative', () => {
  expect(() => generateOtp(0)).toThrow('Length must be a positive integer.');
});
