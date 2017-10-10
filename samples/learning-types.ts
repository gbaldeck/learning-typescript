

type HasName2 = {firstName?: string, lastName: string}

//type is the same as interface
interface IHasName1 {
  firstName?: string,
  lastName: string
}

//can define it life below or using a type
// let person: {firstName: string, lastName: string} = {
let person: IHasName1 = {
 firstName: 'Bob',
 lastName: 'Snydel'
}

let personFirstNameOptional: HasName2 = {
  lastName: 'Snydel'
}

//function type
type MessageCreator = (name:string) => string;
const creator: MessageCreator = blue => "hi"

//there is an error here because the MessageCreator function type only takes one parameter
// const creator2Params: MessageCreator = (blue:string, one:number) => "hi"

//we can make the second parameter optional and then it can be a MessageCreator type
const creator2Params1Optional: MessageCreator = (blue:string, one?:number) => "hi"

//the MessageCreator function type can also be defined as an interface with one method
interface IMessageCreator{
  (name:string): string
}

//array types
let persons: string[] = ['Kobe', "John", 'Samantha']

let counters: number[] = [0, 1, 2]

//tuples and enums
//Enum values are translated to integers starting at 0. e.g. Guard = 0, Forward = 1, Center = 2
enum PlayerPosition {
  Guard,
  Forward,
  Center
}

type PlayerTuple = [string, PlayerPosition]

let kobe1: PlayerTuple = ['Kobe', PlayerPosition["Guard"]]

let james: PlayerTuple = ['James', PlayerPosition.Forward]

let shaq: PlayerTuple = ['Shaq', PlayerPosition.Center]

let players: PlayerTuple[] = [kobe1, james, shaq]

//nullable and union types, strictNullChecks must be set to true in tsconfig.json (should always be set to true when using typescript)
interface Player {
  name:string;
  position: PlayerPosition
}

//union types
let kobe: Player | null | undefined = {
  name: 'Kobe',
  position: PlayerPosition.Guard
}

kobe = null

type HasName = {
  firstName:string,
  lastName:string
}

type HasAddress = {
  address:string
}

//the typescript documentation says that for best practices use an interface instead of a type
//to define the properties of an object, then use a type to do unions and intersections of classes and interfaces
interface IHasName {
  firstName:string
  lastName:string
}

interface IHasAddress {
  address:string
}

//Joined the two types into one, called an intersection type, also included a union with null
type PlayerIU = (HasName & HasAddress) | null

//Interfaces can be used the sameway
type PlayerInterfaceIU = (IHasName & HasAddress) | null

const player:PlayerIU = {firstName: "Magic", lastName:"Johnson", address:"Staples"}

//any can be assigned anything
let thisAny: any = 1

//and any can be assigned to anything
let thisString: string = thisAny
let thisNumber: number = thisAny

// import * as _ from 'lodash';

// const _:Lodash = require('lodash')

import {_} from 'lodash'

const colors = ["Red", "Green", "Blue"]

const firstColor = _.first(colors)

console.log(firstColor)


function buildMessage()