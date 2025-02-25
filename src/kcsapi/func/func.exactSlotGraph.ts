import {join} from 'path';
import {equipmentCard} from '../mod.kcsapi.js';
import {DownloadFile} from '../../toolkit/http.mod.js';
import {GetFilesOrFoldersName, MKDir} from '../../toolkit/fileIO.mod.js';

const funcMap: [string, string, Function][] = [
  ['slotgraph', 'card', equipmentCard],
];

export default async () => {
  for (const key of funcMap) {
    await funcExactGraph(key[0], key[1], key[2]);
  }
};

async function funcExactGraph(folder: string, type: string, func: Function) {
  const tarPath = join('data', folder);
  await MKDir(tarPath);
  const apiDataGraph = global.apiData.api_data.api_mst_slotitem;
  // 確認目前擁有的項目
  const fileList = await GetFilesOrFoldersName(tarPath, 'file');
  for (const slotGra of apiDataGraph) {
    if (slotGra.api_sortno !== undefined && slotGra.api_sortno === 0) continue;
    const slotName = slotGra.api_name;
    const fname = `${slotGra.api_id}_${slotGra.api_sortno}_${type}_.png`;
    if (fileList.includes(fname)) continue;

    //獲取缺少的圖片
    try {
      //SetRatePerMin(60); //速率限制
      const url = func(slotGra.api_id, false);
      await DownloadFile(url, join('data', folder, fname));
      //SetRatePerMin(0);
    } catch (error) {
      //
    }
  }
}
