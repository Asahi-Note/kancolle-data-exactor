import cgkeys from './const.Cgkeys.js';
import servers from './const.Servers.js';

const key = (input: string) =>
  input.split('').reduce((a: number, e: string) => a + e.charCodeAt(0), 0);
const create = (id: number, type: string) => {
  const index = (key(type) + id * type.length) % 100;
  if (index >= cgkeys.length) {
    throw new Error('cgkeys array does not have enough elements.');
  }
  const res = (((17 * (id + 7) * cgkeys[index]) % 8973) + 1000).toString();
  return res;
};

const ship = (type: string) => (id: number, damaged: boolean) => {
  const part1 = [type, damaged && 'dmg'].filter(Boolean).join('_');
  const part2 = [
    id.toString().padStart(4, '0'),
    create(id, `ship_${part1}`),
    (
      ((type === 'full' || type === 'full_dmg') &&
        global.apiData.api_data.api_mst_shipgraph.find(e => e.api_id === id)) ||
      {}
    ).api_filename,
  ]
    .filter(Boolean)
    .join('_');
  return `http://${servers[0]}/kcs2/resources/ship/${part1}/${part2}.png`;
};
export const shipBanner = ship('banner');
export const shipCard = ship('card');
export const shipFull = ship('full');
export const shipFull2 = ship('full2');
export const shipFull0 = ship('character_full');

export const shipBannerDamaged = (id: number) => ship('banner')(id, true);
export const shipCardDamaged = (id: number) => ship('card')(id, true);
export const shipFullDamaged = (id: number) => ship('full')(id, true);
export const shipFull2Damaged = (id: number) => ship('full2')(id, true);
export const shipFull0Damaged = (id: number) =>
  ship('character_full')(id, true);

const equipment = (type: string) => (id: number) =>
  `http://${servers[4]}/kcs2/resources/slot/${type}/${id.toString().padStart(4, '0')}_${create(id, `slot_${type}`)}.png`;

export const equipmentCard = equipment('card');
export const equipmentFull = equipment('item_on');
export const equipmentItem = equipment('item_up');
export const equipmentCharacter = equipment('item_character');

const bgm = (id: number, type = 'port') =>
  `http://${servers[0]}/kcs2/resources/bgm/${type}/${id.toString().padStart(3, '0')}_${create(id, `bgm_${type}`)}.mp3`;

const furnitureTypes = [
  'normal',
  'thumbnail',
  'picture',
  'card',
  'reward',
  'movable',
];

export const furniture = (id: number, type = 'normal') =>
  `http://${servers[0]}/kcs2/resources/furniture/${type}/${id.toString().padStart(3, '0')}_${create(id, `furniture_${type}`)}.png`;
