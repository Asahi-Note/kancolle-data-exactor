import {ApiMstShip} from '../../interface.js';

export function GetShipData(ship_id: number): ApiMstShip | undefined {
  return global.apiData.api_data.api_mst_ship.find(e => e.api_id === ship_id);
}
