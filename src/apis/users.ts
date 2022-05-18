import type { UserInfo } from '@/store/user/interfaces';
import type { AxiosPromise } from 'axios';
import { instance } from './instance';

interface LoginUserDto {
  username: string;
  password: string;
}

interface SignUpDto {
  username: string;
  nickname: string;
  password: string;
}

interface SignUpResponseDto {
  username: string;
  token: string;
}

export interface KakaoLoginSuccess {
  access_token: string;
  expires_in: number;
  id_token: string;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}

export interface KakaoUserAccount {
  profile: { is_default_image: boolean; nickname: string; profile_image_url: string; thumbnail_image_url: string };
  profile_image_needs_agreement: boolean;
  profile_nickname_needs_agreement: boolean;
}

export interface KakaoUserProfile {
  connected_at: Date;
  id: number;
  kakao_account: KakaoUserAccount;
  properties: {
    nickname: string;
    profile_image: string;
    thumbnail_image: string;
  };
}

export const userLogin = (loginUserDto: LoginUserDto): AxiosPromise<SignUpResponseDto> =>
  instance.post('/users/login', loginUserDto);

export const userSignUp = (signUpDto: SignUpDto): AxiosPromise => instance.post('/users', signUpDto);

export const fetchUserProfile = (): AxiosPromise => instance.get('/users/profile');

export const loginKakao = (KakaoUserProfile: KakaoUserProfile): AxiosPromise<UserInfo> =>
  instance.post('/users/kakao/login', KakaoUserProfile);
