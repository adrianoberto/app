export interface ServerResponse<T> {
    data: T[],
    total: number,
    success?: boolean,
    errorMsg?: string
}