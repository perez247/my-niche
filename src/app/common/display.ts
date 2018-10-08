
export class Display {
    static successUpdate(msg = 'Update made successfully'): string {
      return msg;
    }

    static errorMessage(msg = 'It seems something went wrong'): string {
      return msg;
    }

    static jsonSanitize(jsonObject) {
      return JSON.parse(JSON.stringify(jsonObject, function(k, v) {
        if (v === undefined) { return null; } return v;
     }));
    }
}
