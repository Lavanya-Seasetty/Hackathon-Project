// utils/logger.ts
export class Logger {
  
  static error(message: string, err?: unknown) {
    
    if (err instanceof Error) {
      console.error(`[ERROR]: ${message} :: ${err.name}: ${err.message}`);
    } else if (err !== undefined) {
      console.error(`[ERROR]: ${message} :: ${JSON.stringify(err)}`);
    } else {
      console.error(`[ERROR]: ${message}`);
    }
  }

  
  static log(message: string) 
  {
    console.log(`[LOG]: ${message}`);
  }

  
  static warn(message: string) {
    console.warn(`[WARN]: ${message}`);
  }
}