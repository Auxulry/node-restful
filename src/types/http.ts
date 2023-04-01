export declare namespace HttpTypes {
  interface ErrorResponse {
    code: number
    status: string
    message: string
    error?: unknown
  }

  interface SuccessResponse<T> {
    code: number
    status: string
    message: string
    data: T
  }
}