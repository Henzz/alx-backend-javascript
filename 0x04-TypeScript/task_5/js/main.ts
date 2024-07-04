// MajorCredits.ts
export interface MajorCredits {
  credits: number;
  brand: "MajorCredits";
}

// MinorCredits.ts
export interface MinorCredits {
  credits: number;
  brand: "MinorCredits";
}

// sumMajorCredits.ts
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

// sumMinorCredits.ts
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}
