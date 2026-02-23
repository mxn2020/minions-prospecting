/**
 * Minions Prospecting SDK
 *
 * Web search configs, prospect discovery rules, and lead scoring criteria
 *
 * @module @minions-prospecting/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Prospecting.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
