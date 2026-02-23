/**
 * @module @minions-prospecting/sdk/schemas
 * Custom MinionType schemas for Minions Prospecting.
 */

import type { MinionType } from 'minions-sdk';

export const searchconfigType: MinionType = {
  id: 'prospecting-search-config',
  name: 'Search config',
  slug: 'search-config',
  description: 'A configured web search for finding prospects.',
  icon: '🔍',
  schema: [
    { name: 'territoryId', type: 'string', label: 'territoryId' },
    { name: 'query', type: 'string', label: 'query' },
    { name: 'searchEngine', type: 'select', label: 'searchEngine' },
    { name: 'industry', type: 'string', label: 'industry' },
    { name: 'maxResults', type: 'number', label: 'maxResults' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
    { name: 'lastRunAt', type: 'string', label: 'lastRunAt' },
  ],
};

export const discoveryruleType: MinionType = {
  id: 'prospecting-discovery-rule',
  name: 'Discovery rule',
  slug: 'discovery-rule',
  description: 'A rule for qualifying discovered prospects.',
  icon: '��',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'condition', type: 'string', label: 'condition' },
    { name: 'scoreContribution', type: 'number', label: 'scoreContribution' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const scoringcriteriaType: MinionType = {
  id: 'prospecting-scoring-criteria',
  name: 'Scoring criteria',
  slug: 'scoring-criteria',
  description: 'The criteria used to score and rank leads.',
  icon: '⭐',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'field', type: 'string', label: 'field' },
    { name: 'weight', type: 'number', label: 'weight' },
    { name: 'direction', type: 'select', label: 'direction' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const customTypes: MinionType[] = [
  searchconfigType,
  discoveryruleType,
  scoringcriteriaType,
];

