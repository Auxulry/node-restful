export declare namespace HttpTypes {
  interface ErrorResponse {
    code: number
    status: string
    message: string
  }

  interface SuccessResponse<T> {
    code: number
    status: string
    message: string
    data: T
  }
}