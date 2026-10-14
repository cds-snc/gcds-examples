import * as fs from 'fs';
import { parseStringPromise } from 'xml2js';

export type TranslationMap = Record<string, string>;

/**
 * Parses an .xlf file and returns a key-value pair object.
 */
export default async function parseXliff(filePath: string): Promise<TranslationMap> {
  if (!fs.existsSync(filePath)) {
    throw new Error(`XLIFF file not found at '${filePath}'`);
  }
  const result = await parseStringPromise(fs.readFileSync(filePath, 'utf-8'));

  const translations: TranslationMap = {};
  try {
    const units = result['xliff']['file'][0]['unit'];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    units.forEach((unit: any) => {
      const id = unit['$']['id'];

      const {
        segment: [source, target],
      } = unit;

      let value = '';
      if (target && target['target']?.length > 0) {
        value = target['target'][0];
      } else if (source && source['source']?.length > 0) {
        value = source['source'][0];
      }

      if (typeof value === 'string') {
        translations[id] = value.trim().replace(/[\n\s]+/g, ' ');
      }
    });
  } catch (error) {
    console.error('Error parsing XLIFF structure. Ensure file is XLIFF 2.0 format.', error);
  }
  return translations;
}
