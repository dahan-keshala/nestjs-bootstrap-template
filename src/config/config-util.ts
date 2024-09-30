import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * Utility class to avoid duplicating Config Json reading/writing
 */
export default class ConfigUtil {
  /**
   * Return JSON config according to specific path
   * or if found issue process stop
   */
  static readSync(path: string) {
    try {
      const config = readFileSync(join(__dirname, path), 'utf8');

      return JSON.parse(config);
    } catch (error) {
      console.log(error);
      process.exit(0);
    }
  }
}
