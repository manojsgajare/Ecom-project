export interface signUp {
  name: string;
  password: string;
  email: string;
}


export interface login {
  email: String,
  password : String
}


export interface product {
  id:number
  name:string,
  price:number,
  category:string,
  description:string,
  image:string,
}