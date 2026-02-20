// utils/logger.ts
export class Logger {
  /**
   * Logs an error without throwing so tests can decide how to handle failures.
   * If you want failures, call expect(...) elsewhere or throw explicitly in the test.
   */
  static error(message: string, err?: unknown) {
    // Print a consistent error line for CI logs
    // Use console.error so it shows up as stderr in CI
    if (err instanceof Error) {
      console.error(`[ERROR]: ${message} :: ${err.name}: ${err.message}\n${err.stack ?? ''}`);
    } else if (err !== undefined) {
      console.error(`[ERROR]: ${message} :: ${JSON.stringify(err)}`);
    } else {
      console.error(`[ERROR]: ${message}`);
    }
  }

  /**
   * Info logs for progress breadcrumbs in CI.
   */
  static log(message: string) {
    console.log(`[LOG]: ${message}`);
  }

  /**
   * Optional: warnings that aren't failures.
   */
  static warn(message: string) {
    console.warn(`[WARN]: ${message}`);
  }
}