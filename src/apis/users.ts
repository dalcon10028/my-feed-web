import { useAxios } from '@vueuse/integrations/useAxios';
import instance from './instance';

export const fetchUserProfile = () => {
  return useAxios('/users/profile', instance);
};
