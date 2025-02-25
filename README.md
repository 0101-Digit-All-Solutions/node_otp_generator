# OTP Generator for TypeScript

[![npm version](https://img.shields.io/npm/v/@0101-labs/ts_otp_generator.svg)](https://www.npmjs.com/package/@0101-labs/ts_otp_generator)

A lightweight, customizable library to generate One-Time Passwords (OTPs) for numeric, alphanumeric, and special character-based use cases.

---

## Features

- Generate OTPs with custom length.
- Supports numeric, alphabetic, and special characters.
- Ensures numeric OTPs do not start with `0`.
- Easy-to-use API.
- Fully written in TypeScript for type safety.

---

## Installation

### From GitHub
Install the library directly from GitHub:
```bash
npm install @0101-labs/ts_otp_generator
```

---

## Usage

```bash
import {generateOtp} from '@0101-labs/ts_otp_generator';

// Generate a 6-digit numeric OTP
const otp: string  = generateOtp(6, { numeric: true });
console.log(otp); // Example: 123456

// Generate a 10-character alphanumeric OTP
const otpAlphaNum: string  = generateOtp(10, { numeric: true, alphabets: true });
console.log(otpAlphaNum); // Example: Ab3cDe4FgH

// Generate an 8-character OTP with special characters
const otpSpecial: string  = generateOtp(8, { numeric: true, alphabets: true, specialChars: true });
console.log(otpSpecial); // Example: A@3!c9Fg
```
## API

generateOtp(length: number, options: GenerateOtpOptions): string


## Parameters:

| Prop   | Type   | default | Required | Note                                        |
| -------|:------:| :------:|:--------:|:-------------------------------------------:|
| length | number | 6       | Optional | Length of the OTP. Must be greater than 0.
| options| object | NA      | Optional | Additional optionas for generating OTP

## Options

| Prop        | Type    | default  | Required | Note                                  |
| ------------|:-------:| :-------:|:--------:|:-------------------------------------:|
| numeric     | boolean | true     | Optional | Whether to include numbers
| alphabets   | boolean | false    | Optional | Whether to include alphabets.
| specialChars| boolean | false    | Optional | Whether to include special characters.


## Returns:

A random OTP string based on the specified options.
