export class Validator {
    public validateProperties = (input: any): void => {
        for (const key in input) {
            if (input[key] !== false && !input[key]) {
                throw new Error(`Missing property '${key}'`);
            }
        }
    }

    public checkIfIsNumber = (value: any) => {
        if (isNaN(value)) {
            throw new Error(`'price' should be a number`);
        }
    }
}