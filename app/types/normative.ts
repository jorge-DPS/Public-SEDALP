export interface NormativeDocument {
  id: number
  title: string
  description?: string
  type: string
  year?: number

  cover?: string
  file: string
}