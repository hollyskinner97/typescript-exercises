declare module 'stats' {
    type Comparator<T> = (arg1: T, arg2: T) => number;

    type GetIndex = <T>(input: T[], comparator: Comparator<T>) => number;
    export const getMaxIndex: GetIndex;
    export const getMinIndex: GetIndex;
    export const getMedianIndex: GetIndex;

    type GetElement = <T>(input: T[], comparator: Comparator<T>) => T | null;
    export const getMaxElement: GetElement;
    export const getMinElement: GetElement;
    export const getMedianElement: GetElement;

    export const getAverageValue: <T>(input: T[], getValue: (item: T) => number) => number | null;
}
