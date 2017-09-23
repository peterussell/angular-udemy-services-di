export class LoggingService {
  logStatusChange(newStatus: string) {
    console.log(`Server status changed, new status: ${newStatus}`);
  }
}
