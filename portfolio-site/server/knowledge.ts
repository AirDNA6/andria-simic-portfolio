import type { CareerEntry, PortfolioContent } from '../src/app/data/portfolio.types';

function describeRole(entry: CareerEntry, index: number): string {
  const where = entry.location ? `${entry.company}, ${entry.location}` : entry.company;
  const lines = [`${index + 1}. ${entry.role} at ${where} (${entry.period})${entry.current ? ' [current role]' : ''}`];
  entry.highlights.forEach((highlight) => lines.push(`   - ${highlight}`));
  lines.push(`   Technologies: ${entry.stack.join(', ')}`);
  return lines.join('\n');
}

/**
 * Flattens the portfolio content into plain text for the model. The twin is built from the same
 * data the site renders, so editing the portfolio updates what the twin knows. Nothing else is
 * ever given to the model.
 */
export function buildKnowledge(content: PortfolioContent): string {
  return [
    `NAME: ${content.name}`,
    `TITLE: ${content.title}`,
    `LOCATION: ${content.location}`,
    `EMAIL: ${content.email}`,
    `GITHUB: ${content.github}`,
    `TAGLINE: ${content.tagline}`,
    '',
    'SUMMARY:',
    content.about,
    '',
    'WORK EXPERIENCE (most recent first):',
    ...content.career.map(describeRole),
    '',
    'FREELANCE WORK:',
    ...content.freelance.map(describeRole),
    '',
    'EDUCATION:',
    ...content.education.map((e) => `- ${e.degree}, ${e.institution} (${e.period})`),
    '',
    'LANGUAGES:',
    ...content.languages.map((l) => `- ${l.name}: ${l.level}`),
    '',
    'SKILLS:',
    ...content.skillGroups.map((group) => `- ${group.label}: ${group.items.join(', ')}`),
    '',
    'PERSONAL PROJECTS:',
    ...content.projects.map(
      (p) =>
        `- ${p.title} (repository: ${p.url}${p.liveUrl ? `, live: ${p.liveUrl}` : ''}): ${p.description} Tags: ${p.tags.join(', ')}`,
    ),
  ].join('\n');
}
