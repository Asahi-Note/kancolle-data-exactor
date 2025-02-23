import {join} from 'path';
import {ReadFile} from './toolkit/fileIO.mod.js';
import {ApiMstShipgraph} from './interface.js';
import funcExactSlotGraph from './kcsapi/func/func.exactSlotGraph.js';

export default async () => {
  // Load data/getData.json
  const raw: string = await ReadFile(join('data', 'getData.json'));
  global.apiData = JSON.parse(raw);

  //
  //
  const apiDataGraph = global.apiData.api_data.api_mst_shipgraph;
  const apiDataShip = global.apiData.api_data.api_mst_ship;
  const list: ApiMstShipgraph[] = [];
  await funcExactSlotGraph();

  1;
};
