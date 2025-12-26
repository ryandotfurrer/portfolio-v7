import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface PortableTextBlock {
  _type: "block";
  _key: string;
  style: string;
  children: Array<{
    _type: "span";
    text: string;
    marks: string[];
  }>;
  markDefs: unknown[];
}

export function textToPortableTextBlock(
  text: string,
  key: string = `description-${Date.now()}-${Math.random().toString(36).substring(7)}`,
): PortableTextBlock {
  return {
    _type: "block",
    _key: key,
    style: "normal",
    children: [
      {
        _type: "span",
        text: text,
        marks: [],
      },
    ],
    markDefs: [],
  };
}
