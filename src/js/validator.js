export class Validator {
    static validateUsername(username) {
        const validСharPattern = /^[A-Za-z][A-Za-z0-9_-]*[A-Za-z]$/;;
        if (!validСharPattern.test(username)) {
            return false;
        }
        const patternWithNumbers = /\d{4,}/;
        if (username.search(patternWithNumbers) !== -1) {
            return false;
        }
        return true;
    }
}
