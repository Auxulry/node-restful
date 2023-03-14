export declare namespace Config {
  interface Base {
    port: string | number
    jwtSecret: string
    database: {
      main: {
        host: string
        port: number
        username: string
        password: string
        database: string
      }
      secondary?: {
        host: string | number
        port: number
        username: string
        password: string
        database: string
      }
    }
  }
}