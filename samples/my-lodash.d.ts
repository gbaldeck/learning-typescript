declare type _Lodash = any;



declare module "lodash" {
  interface FirstFunction {
    (data:any[]):any; //function type
  }

  interface Lodash {
    first: FirstFunction
  }

  export const _: Lodash;
}

