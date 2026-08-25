import type { ReactNode } from "react";
import type { UserRole } from "@/lib/api";

export interface RoleOption {
  value: UserRole;
  label: string;
  blurb: string;
  icon: ReactNode;
}

export const ROLE_OPTIONS: RoleOption[] = [
  {
    value: "student",
    label: "Student",
    blurb: "I'm figuring out my future",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7.5 12 3l8 4.5-8 4.5-8-4.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 10.7V15c0 1.2 2.7 2.6 6 2.6s6-1.4 6-2.6v-4.3M20 9v5.5" />
      </svg>
    ),
  },
  {
    value: "parent",
    label: "Parent",
    blurb: "I'm supporting a student",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <circle cx="9" cy="8" r="3.25" />
        <path strokeLinecap="round" d="M3.5 19c.6-2.8 2.9-4.5 5.5-4.5s4.9 1.7 5.5 4.5" />
        <path strokeLinecap="round" d="M16 5.4a3.25 3.25 0 0 1 0 5.2M17.8 14.9c1.5.7 2.5 2.1 2.9 3.9" />
      </svg>
    ),
  },
];
