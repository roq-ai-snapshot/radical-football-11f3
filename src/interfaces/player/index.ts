import { ParentRequestInterface } from 'interfaces/parent-request';
import { UserInterface } from 'interfaces/user';
import { AcademyInterface } from 'interfaces/academy';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  academy_id: string;
  coach_id?: string;
  notes?: string;
  created_at?: any;
  updated_at?: any;
  parent_request?: ParentRequestInterface[];
  user_player_user_idTouser?: UserInterface;
  academy?: AcademyInterface;
  user_player_coach_idTouser?: UserInterface;
  _count?: {
    parent_request?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  academy_id?: string;
  coach_id?: string;
  notes?: string;
}
