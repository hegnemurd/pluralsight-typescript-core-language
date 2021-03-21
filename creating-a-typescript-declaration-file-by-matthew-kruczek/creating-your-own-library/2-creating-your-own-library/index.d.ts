// Type definitions for ps-author-helper 1.0
// Project: https://github.com/MCKRUZ/ps-author-helper#readme
// Definitions by: Matt Kruczek <https://github.com/MCKRUZ>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

export function greet(name: string): string;
export function getAuthorContactInfo(): AuthorInfo;
export function getModuleName(
  moduleNumber: number
):
  | "Introduction to My Course"
  | "Declaration File Fundamentals"
  | "Building a Declaration File"
  | "Publishing Your Own Library"
  | "No such module exists";
export class AuthorInfo {
  firstName: string;
  lastName: string;
  twitterHandle: string;
  constructor(firstName: string, lastName: string, twitterHandle: string);
}
