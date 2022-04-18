import { useAxios } from '@vueuse/integrations/useAxios';
import instance from './instance';

export const fetchfeeds = () => {
  return useAxios('/feeds', instance);
};
