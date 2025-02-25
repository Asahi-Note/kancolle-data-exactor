import {ApiMstShipgraph} from './interface.js';
import {GetShipData} from './kcsapi/get/func.getShipData.js';

export default async () => {
  //
  const apiDataGraph = global.apiData.api_data.api_mst_shipgraph;
  const apiDataShip = global.apiData.api_data.api_mst_ship;
  const list: ApiMstShipgraph[] = [];

  const smapleship = GetShipData(1);
  1;
  console.log(smapleship?.api_name);
  console.log(smapleship?.api_tyku);
};
