export class ValidationHelper {
  public static requires(isValid: boolean) {
    if (!isValid) {
      throw new Error('Validation not passed');
    }
  }
}
