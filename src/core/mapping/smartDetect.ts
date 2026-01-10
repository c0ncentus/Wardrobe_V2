/**
 * Détection intelligente patterns
 */

export const detectPatterns = (text: string, patterns: Record<string, string[]>): string[] => {
  const lower = text.toLowerCase();
  const matches: string[] = [];
  
  for (const [key, keywords] of Object.entries(patterns)) {
    if (keywords.some(kw => lower.includes(kw))) {
      matches.push(key);
    }
  }
  
  return matches;
};

export const scoreConfidence = (matches: string[]): number => {
  return Math.min(matches.length * 0.25, 1);
};