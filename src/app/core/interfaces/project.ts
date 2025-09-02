export interface Project {
  title: string,
  description: string,
  stackUsed: string[],
  img: string,
  text: string,
  tags: string,
  repo?: string,
  prev?: string,
  id: number
}
