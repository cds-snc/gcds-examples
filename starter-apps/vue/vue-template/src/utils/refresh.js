import { ref } from 'vue';

export const headerKey = ref(0);
export const footerKey = ref(0);
export const reportABugKey = ref(0);

/**
 * Force a refresh of components that use GCDS Components that utilize a locale
 *      gcds-header
 *      gcds-footer
 *      form components
 * This is useful when the locale changes
 */
export const forceRefresh = () => {
    headerKey.value += 1;
    footerKey.value += 1;
    reportABugKey.value += 1;
};