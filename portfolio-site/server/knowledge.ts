import type { CareerEntry, FeaturedProject, PortfolioContent } from '../src/app/data/portfolio.types';

function describeRole(entry: CareerEntry, index: number): string {
  const where = entry.location ? `${entry.company}, ${entry.location}` : entry.company;
  const lines = [`${index + 1}. ${entry.role} at ${where} (${entry.period})${entry.current ? ' [current role]' : ''}`];
  entry.highlights.forEach((highlight) => lines.push(`   - ${highlight}`));
  lines.push(`   Technologies: ${entry.stack.join(', ')}`);
  return lines.join('\n');
}

function describeFeatured(project: FeaturedProject): string {
  const links = [project.url && `repository: ${project.url}`, project.liveUrl && `live: ${project.liveUrl}`].filter(Boolean);
  return [
    `- ${project.title}, ${project.kind} (${project.period})${project.current ? ' [current]' : ''}${links.length ? ` (${links.join(', ')})` : ''}`,
    `  ${project.summary}`,
    `  Pipeline: ${project.pipeline.map((stage) => `${stage.name} (${stage.detail})`).join(' -> ')}`,
    ...project.parts.map((part) => `  - ${part.title}: ${part.text}`),
    `  Technologies: ${project.stack.join(', ')}`,
  ].join('\n');
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
    describeFeatured(content.featuredProject),
    ...content.projects.map((p) => {
      const links = [p.url && `repository: ${p.url}`, p.liveUrl && `live: ${p.liveUrl}`].filter(Boolean);
      return `- ${p.title}${links.length ? ` (${links.join(', ')})` : ''}: ${p.description} Tags: ${p.tags.join(', ')}`;
    }),
  ].join('\n');
}
