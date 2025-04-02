// This enables module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    function pad(s: number): string;

    interface DateDetails {
        hours: number;
        minutes: number;
        seconds: number;
    }
}
