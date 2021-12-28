import { UserManagerSettings } from "oidc-client";
import * as Oidc from 'oidc-client';

export const Authority = "https://localhost:10001";
export const Silent_redirect_uri = "http://localhost:4200/refresh";
export const Redirect_uri = 'http://localhost:4200/auth-callback';
export const Post_logout_redirect_uri = 'http://localhost:4200/';
export const Response_type = "code";
export const AutomaticSilentRenew = true;
// export const FilterProtocolClaims = false;  //
// export const MergeClaims = true;  //
export const LoadUserInfo = true;
export const Scope = "openid profile Order";
export const Client_id = 'client_angular_id';
export const URLpath = "https://localhost:44354/api/";

// export const URLpath = "https://localhost:5001/api/";


export function getClientSettings(): UserManagerSettings {
  return {
    userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }), //чтоб хронилась сесия localStore
    authority: Authority,
    silent_redirect_uri : Silent_redirect_uri,
    redirect_uri: Redirect_uri,
    post_logout_redirect_uri: Post_logout_redirect_uri,
    response_type: Response_type,
    automaticSilentRenew: AutomaticSilentRenew, //указывающий, должна ли быть автоматическая попытка обновить токен доступа до истечения срока его действия
    scope: Scope,
    client_id: Client_id,
    loadUserInfo: LoadUserInfo, // загрузкой дополнительных идентификационных данных, чтобы заполнить пользователя profile
    // mergeClaims: MergeClaims,
    // filterProtocolClaims: FilterProtocolClaims, //следует ли удалять утверждения протокола OIDC из profile
    // checkSessionInterval: 50000, //Интервал в мс для проверки сеанса пользователя
    // silentRequestTimeout: 50000, //количество миллисекунд ожидания возврата беззвучного
  };

}

export class User{
  id:number = 0;
  name:string = "";
  surname:string = "";
  email:string = "";
}

export class StatusUser{
  id:number = 0;
  name:string = "";
  status?:boolean = false;
}

export class Dispatch{
  id: number  = 0;
  departureDate: any;
  status: boolean = false;
  userId: number  = 0;
  letterId: number = 0;
}

export class Group{
  id: number = 0;
  name: string = "";
  usersId: number[] = [];
}

export class MailLetter{
  textBody: string = "";
  textSubject: string = "";
  usersId:number[] = [];
}

export class UserGroup{
  groupId: number = 0;
  statusUsers: StatusUser[] = [];
}

export class ConstantsService {
  public groups: Group[] = [];
  public users: User[] = [];
  public dispatchs: Dispatch[] = [];
  public usersWithLetters: User[] = [];
  public textBody: string = "";
  public textSubject: string = "";
  public user: User = new User();
  public group: Group = new Group();
  public userGroup: UserGroup = new UserGroup();
  constructor() { }
}
