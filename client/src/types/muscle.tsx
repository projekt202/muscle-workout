import {Video} from './video';

export interface Muscle {
  id?: string;
  name?: string;
  description?: string;
  videos?: [ Video ];
}