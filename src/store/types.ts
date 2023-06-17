export enum UserAction {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  LOGOUT = 'LOGOUT',
}

export interface IUserState {
  username: string
  token: string
  isCollapse: boolean
  currRoute: string
  menus: any[]
  roles: string[]
}
