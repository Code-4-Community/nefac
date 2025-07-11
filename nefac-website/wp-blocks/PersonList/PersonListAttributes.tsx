export interface Person {
  name: string
  role: string
}

export default interface PersonListAttributes {
  title: string
  people: Person[]
}
