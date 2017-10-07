
type HasName = {firstName?: string, lastName: string}

//type is the same as interface
interface IHasName {
  firstName?: string,
  lastName: string
}

//can define it life below or using a type
// let person: {firstName: string, lastName: string} = {
let person: HasName = {
 firstName: 'Bob',
 lastName: 'Snydel'
}

let personFirstNameOptional: HasName = {
  lastName: 'Snydel'
}