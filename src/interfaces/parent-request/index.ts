import { UserInterface } from 'interfaces/user';
import { PlayerInterface } from 'interfaces/player';
import { GetQueryInterface } from 'interfaces';

export interface ParentRequestInterface {
  id?: string;
  parent_id: string;
  player_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  player?: PlayerInterface;
  _count?: {};
}

export interface ParentRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  parent_id?: string;
  player_id?: string;
  status?: string;
}
