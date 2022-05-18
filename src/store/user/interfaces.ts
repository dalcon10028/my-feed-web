export interface UserInfo {
  username: string;
  nickname: string;
  provider: 'KAKAO' | 'DEFAULT';
  thumnail: string;
  token: string;
  id: number;
  newbie?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
