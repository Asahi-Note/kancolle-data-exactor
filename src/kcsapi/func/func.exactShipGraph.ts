import {join} from 'path';
import {shipBanner, shipCard, shipFull} from './mod.kcsapi.js';
import {DownloadFile} from '../../toolkit/http.mod.js';
import {GetFilesOrFoldersName, MKDir} from '../../toolkit/fileIO.mod.js';

const funcMap: [string, string, Function][] = [
  ['shipgraph', 'full', shipFull],
  ['shipcardgraph', 'card', shipCard],
  ['shipbannergraph', 'banner', shipBanner],
];

export default async () => {
  for (const key of funcMap) {
    await funcExactGraph(key[0], key[1], key[2]);
  }
};

function getShipName(api_sortno: number | undefined) {
  const apiData = global.apiData.api_data.api_mst_ship;
  const res = apiData.find(e => e.api_sortno === api_sortno);
  return res === undefined ? 'unknown' : res.api_name;
}

async function funcExactGraph(folder: string, type: string, func: Function) {
  const tarPath = join('data', folder);
  await MKDir(tarPath);
  const apiDataGraph = global.apiData.api_data.api_mst_shipgraph;
  // 確認目前擁有的項目
  const fileList = await GetFilesOrFoldersName(tarPath, 'file');
  for (const shipGra of apiDataGraph) {
    if (shipGra.api_sortno !== undefined && shipGra.api_sortno === 0) continue;
    const shipName = getShipName(shipGra.api_sortno);
    const fname = `${shipGra.api_id}_${shipGra.api_sortno}_${type}_${shipName}.png`;
    if (fileList.includes(fname)) continue;

    //獲取缺少的圖片
    try {
      //SetRatePerMin(60); //速率限制
      const url = func(shipGra.api_id, false);
      await DownloadFile(url, join('data', folder, fname));
      //SetRatePerMin(0);
    } catch (error) {
      //
    }
  }
}
