import type { AxiosPromise } from 'axios';
import instance from './instance';

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

export const userLogin = (loginUserDto: LoginUserDto): AxiosPromise<SignUpResponseDto> =>
  instance.post('/users/login', loginUserDto);

export const userSignUp = (signUpDto: SignUpDto): AxiosPromise => instance.post('/users', signUpDto);

export const fetchUserProfile = (): AxiosPromise => instance.get('/users/profile');
