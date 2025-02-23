export interface ApiDataRoot {
  api_result: number;
  api_result_msg: string;
  api_data: ApiData;
}

export interface ApiData {
  api_mst_ship: ApiMstShip[];
  api_mst_shipgraph: ApiMstShipgraph[];
  api_mst_slotitem_equiptype: ApiMstSlotitemEquiptype[];
  api_mst_equip_exslot: number[];
  api_mst_equip_exslot_ship: ApiMstEquipExslotShip;
  api_mst_stype: ApiMstStype[];
  api_mst_slotitem: ApiMstSlotitem[];
  api_mst_furnituregraph: ApiMstFurnituregraph[];
  api_mst_useitem: ApiMstUseitem[];
  api_mst_payitem: ApiMstPayitem[];
  api_mst_item_shop: ApiMstItemShop;
  api_mst_maparea: ApiMstMaparea[];
  api_mst_mapinfo: ApiMstMapinfo[];
  api_mst_mapbgm: ApiMstMapbgm[];
  api_mst_mission: ApiMstMission[];
  api_mst_const: ApiMstConst;
  api_mst_shipupgrade: ApiMstShipupgrade[];
  api_mst_bgm: ApiMstBgm[];
  api_mst_equip_ship: ApiMstEquipShip[];
  api_mst_furniture: ApiMstFurniture[];
}

export interface ApiMstShip {
  api_id: number;
  api_sortno?: number;
  api_sort_id: number;
  api_name: string;
  api_yomi: string;
  api_stype: number;
  api_ctype: number;
  api_afterlv?: number;
  api_aftershipid?: string;
  api_taik?: number[];
  api_souk?: number[];
  api_houg?: number[];
  api_raig?: number[];
  api_tyku?: number[];
  api_luck?: number[];
  api_soku: number;
  api_leng?: number;
  api_slot_num: number;
  api_maxeq?: number[];
  api_buildtime?: number;
  api_broken?: number[];
  api_powup?: number[];
  api_backs?: number;
  api_getmes?: string;
  api_afterfuel?: number;
  api_afterbull?: number;
  api_fuel_max?: number;
  api_bull_max?: number;
  api_voicef?: number;
  api_tais?: number[];
}

export interface ApiMstShipgraph {
  api_id: number;
  api_filename: string;
  api_version: string[];
  api_battle_n?: number[];
  api_battle_d?: number[];
  api_sortno?: number;
  api_boko_n?: number[];
  api_boko_d?: number[];
  api_kaisyu_n?: number[];
  api_kaisyu_d?: number[];
  api_kaizo_n?: number[];
  api_kaizo_d?: number[];
  api_map_n?: number[];
  api_map_d?: number[];
  api_ensyuf_n?: number[];
  api_ensyuf_d?: number[];
  api_ensyue_n?: number[];
  api_weda?: number[];
  api_wedb?: number[];
  api_pa?: number[];
  api_pab?: number[];
  api_wedc?: number[];
  api_wedd?: number[];
  api_sp_flag?: number;
}

export interface ApiMstSlotitemEquiptype {
  api_id: number;
  api_name: string;
  api_show_flg: number;
}

export interface ApiMstEquipExslotShip {
  '33': N33;
  '66': N66;
  '220': N220;
  '71': N71;
  '275': N275;
  '408': N408;
  '413': N413;
  '442': N442;
  '443': N443;
  '10': N10;
  '12': N12;
  '130': N130;
  '142': N142;
  '234': N234;
  '460': N460;
  '463': N463;
  '464': N464;
  '477': N477;
  '478': N478;
  '28': N28;
  '88': N88;
  '240': N240;
  '517': N517;
  '410': N410;
  '411': N411;
  '27': N27;
  '106': N106;
  '450': N450;
  '506': N506;
  '226': N226;
  '227': N227;
  '488': N488;
  '34': N34;
  '87': N87;
  '35': N35;
  '317': N317;
  '483': N483;
  '210': N210;
  '211': N211;
  '384': N384;
  '458': N458;
  '519': N519;
  '525': N525;
  '526': N526;
  '524': N524;
  '527': N527;
  '528': N528;
  '124': N124;
}

export interface N33 {
  api_ship_ids: any;
  api_stypes: ApiStypes;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiStypes {
  '99': number;
}

export interface N66 {
  api_ship_ids: ApiShipIds;
  api_stypes: ApiStypes2;
  api_ctypes: ApiCtypes;
  api_req_level: number;
}

export interface ApiShipIds {
  '488': number;
  '501': number;
  '502': number;
  '503': number;
  '504': number;
  '506': number;
  '507': number;
  '508': number;
  '509': number;
  '894': number;
  '899': number;
  '883': number;
  '888': number;
}

export interface ApiStypes2 {
  '19': number;
  '20': number;
  '21': number;
}

export interface ApiCtypes {
  '41': number;
}

export interface N220 {
  api_ship_ids: ApiShipIds2;
  api_stypes: ApiStypes3;
  api_ctypes: ApiCtypes2;
  api_req_level: number;
}

export interface ApiShipIds2 {
  '488': number;
  '501': number;
  '502': number;
  '503': number;
  '504': number;
  '506': number;
  '507': number;
  '508': number;
  '509': number;
  '894': number;
  '899': number;
  '883': number;
  '888': number;
}

export interface ApiStypes3 {
  '19': number;
  '20': number;
  '21': number;
}

export interface ApiCtypes2 {
  '41': number;
}

export interface N71 {
  api_ship_ids: ApiShipIds3;
  api_stypes: any;
  api_ctypes: ApiCtypes3;
  api_req_level: number;
}

export interface ApiShipIds3 {
  '894': number;
  '899': number;
  '136': number;
  '148': number;
  '911': number;
  '546': number;
  '916': number;
  '593': number;
  '954': number;
}

export interface ApiCtypes3 {
  '52': number;
  '43': number;
}

export interface N275 {
  api_ship_ids: ApiShipIds4;
  api_stypes: any;
  api_ctypes: ApiCtypes4;
  api_req_level: number;
}

export interface ApiShipIds4 {
  '894': number;
  '899': number;
  '136': number;
  '148': number;
  '911': number;
  '546': number;
  '916': number;
  '593': number;
  '954': number;
}

export interface ApiCtypes4 {
  '52': number;
  '43': number;
}

export interface N408 {
  api_ship_ids: ApiShipIds5;
  api_stypes: any;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds5 {
  '621': number;
  '626': number;
}

export interface N413 {
  api_ship_ids: any;
  api_stypes: any;
  api_ctypes: ApiCtypes5;
  api_req_level: number;
}

export interface ApiCtypes5 {
  '38': number;
  '54': number;
  '4': number;
  '16': number;
  '20': number;
  '41': number;
  '52': number;
}

export interface N442 {
  api_ship_ids: any;
  api_stypes: ApiStypes4;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiStypes4 {
  '13': number;
  '14': number;
}

export interface N443 {
  api_ship_ids: any;
  api_stypes: ApiStypes5;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiStypes5 {
  '13': number;
  '14': number;
}

export interface N10 {
  api_ship_ids: ApiShipIds6;
  api_stypes: any;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds6 {
  '911': number;
  '546': number;
  '916': number;
  '593': number;
  '954': number;
}

export interface N12 {
  api_ship_ids: ApiShipIds7;
  api_stypes: any;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds7 {
  '911': number;
  '546': number;
  '916': number;
}

export interface N130 {
  api_ship_ids: ApiShipIds8;
  api_stypes: any;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds8 {
  '911': number;
  '546': number;
  '916': number;
  '593': number;
  '954': number;
}

export interface N142 {
  api_ship_ids: ApiShipIds9;
  api_stypes: any;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds9 {
  '911': number;
  '546': number;
  '916': number;
}

export interface N234 {
  api_ship_ids: ApiShipIds10;
  api_stypes: any;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds10 {
  '911': number;
  '546': number;
  '916': number;
}

export interface N460 {
  api_ship_ids: ApiShipIds11;
  api_stypes: any;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds11 {
  '911': number;
  '546': number;
  '916': number;
}

export interface N463 {
  api_ship_ids: ApiShipIds12;
  api_stypes: any;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds12 {
  '911': number;
  '546': number;
  '916': number;
}

export interface N464 {
  api_ship_ids: ApiShipIds13;
  api_stypes: any;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds13 {
  '911': number;
  '546': number;
  '916': number;
  '593': number;
  '954': number;
}

export interface N477 {
  api_ship_ids: any;
  api_stypes: ApiStypes6;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiStypes6 {
  '7': number;
  '11': number;
  '18': number;
}

export interface N478 {
  api_ship_ids: any;
  api_stypes: ApiStypes7;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiStypes7 {
  '7': number;
  '11': number;
  '18': number;
}

export interface N28 {
  api_ship_ids: ApiShipIds14;
  api_stypes: any;
  api_ctypes: ApiCtypes6;
  api_req_level: number;
}

export interface ApiShipIds14 {
  '229': number;
  '961': number;
  '591': number;
  '592': number;
  '593': number;
  '954': number;
  '975': number;
  '694': number;
}

export interface ApiCtypes6 {
  '30': number;
  '38': number;
  '101': number;
}

export interface N88 {
  api_ship_ids: ApiShipIds15;
  api_stypes: any;
  api_ctypes: ApiCtypes7;
  api_req_level: number;
}

export interface ApiShipIds15 {
  '229': number;
  '961': number;
  '591': number;
  '592': number;
  '593': number;
  '954': number;
  '975': number;
  '694': number;
}

export interface ApiCtypes7 {
  '30': number;
  '38': number;
  '101': number;
}

export interface N240 {
  api_ship_ids: ApiShipIds16;
  api_stypes: any;
  api_ctypes: ApiCtypes8;
  api_req_level: number;
}

export interface ApiShipIds16 {
  '229': number;
  '961': number;
  '591': number;
  '592': number;
  '593': number;
  '954': number;
  '975': number;
  '694': number;
}

export interface ApiCtypes8 {
  '30': number;
  '38': number;
  '101': number;
}

export interface N517 {
  api_ship_ids: ApiShipIds17;
  api_stypes: any;
  api_ctypes: ApiCtypes9;
  api_req_level: number;
}

export interface ApiShipIds17 {
  '229': number;
  '961': number;
  '591': number;
  '592': number;
  '593': number;
  '954': number;
  '975': number;
  '694': number;
}

export interface ApiCtypes9 {
  '30': number;
  '38': number;
  '101': number;
}

export interface N410 {
  api_ship_ids: ApiShipIds18;
  api_stypes: any;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds18 {
  '593': number;
  '954': number;
  '591': number;
  '592': number;
  '694': number;
}

export interface N411 {
  api_ship_ids: ApiShipIds19;
  api_stypes: any;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds19 {
  '593': number;
  '954': number;
  '591': number;
  '592': number;
  '694': number;
}

export interface N27 {
  api_ship_ids: ApiShipIds20;
  api_stypes: any;
  api_ctypes: ApiCtypes10;
  api_req_level: number;
}

export interface ApiShipIds20 {
  '229': number;
  '961': number;
  '975': number;
  '979': number;
  '426': number;
  '986': number;
}

export interface ApiCtypes10 {
  '38': number;
  '54': number;
  '101': number;
  '41': number;
  '52': number;
}

export interface N106 {
  api_ship_ids: ApiShipIds21;
  api_stypes: any;
  api_ctypes: ApiCtypes11;
  api_req_level: number;
}

export interface ApiShipIds21 {
  '229': number;
  '961': number;
  '975': number;
  '979': number;
  '426': number;
  '986': number;
}

export interface ApiCtypes11 {
  '38': number;
  '54': number;
  '101': number;
  '41': number;
  '52': number;
}

export interface N450 {
  api_ship_ids: ApiShipIds22;
  api_stypes: any;
  api_ctypes: ApiCtypes12;
  api_req_level: number;
}

export interface ApiShipIds22 {
  '229': number;
  '961': number;
  '975': number;
  '979': number;
  '426': number;
  '986': number;
}

export interface ApiCtypes12 {
  '38': number;
  '54': number;
  '101': number;
  '41': number;
  '52': number;
}

export interface N506 {
  api_ship_ids: ApiShipIds23;
  api_stypes: any;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds23 {
  '407': number;
  '147': number;
  '235': number;
  '419': number;
  '464': number;
  '470': number;
  '961': number;
  '557': number;
  '558': number;
  '656': number;
  '578': number;
  '537': number;
  '538': number;
  '955': number;
  '960': number;
  '975': number;
  '968': number;
  '956': number;
  '981': number;
}

export interface N226 {
  api_ship_ids: ApiShipIds24;
  api_stypes: ApiStypes8;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds24 {
  '145': number;
  '961': number;
}

export interface ApiStypes8 {
  '1': number;
}

export interface N227 {
  api_ship_ids: ApiShipIds25;
  api_stypes: ApiStypes9;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds25 {
  '145': number;
  '961': number;
}

export interface ApiStypes9 {
  '1': number;
}

export interface N488 {
  api_ship_ids: ApiShipIds26;
  api_stypes: ApiStypes10;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds26 {
  '145': number;
  '961': number;
}

export interface ApiStypes10 {
  '1': number;
}

export interface N34 {
  api_ship_ids: ApiShipIds27;
  api_stypes: any;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds27 {
  '229': number;
  '316': number;
  '951': number;
}

export interface N87 {
  api_ship_ids: ApiShipIds28;
  api_stypes: any;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds28 {
  '229': number;
  '316': number;
  '951': number;
}

export interface N35 {
  api_ship_ids: any;
  api_stypes: ApiStypes11;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiStypes11 {
  '5': number;
  '6': number;
  '8': number;
  '9': number;
  '10': number;
}

export interface N317 {
  api_ship_ids: any;
  api_stypes: ApiStypes12;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiStypes12 {
  '5': number;
  '6': number;
  '8': number;
  '9': number;
  '10': number;
}

export interface N483 {
  api_ship_ids: any;
  api_stypes: ApiStypes13;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiStypes13 {
  '5': number;
  '6': number;
  '8': number;
  '9': number;
  '10': number;
}

export interface N210 {
  api_ship_ids: any;
  api_stypes: ApiStypes14;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiStypes14 {
  '13': number;
  '14': number;
}

export interface N211 {
  api_ship_ids: any;
  api_stypes: ApiStypes15;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiStypes15 {
  '13': number;
  '14': number;
}

export interface N384 {
  api_ship_ids: any;
  api_stypes: ApiStypes16;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiStypes16 {
  '13': number;
  '14': number;
}

export interface N458 {
  api_ship_ids: any;
  api_stypes: ApiStypes17;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiStypes17 {
  '13': number;
  '14': number;
}

export interface N519 {
  api_ship_ids: any;
  api_stypes: any;
  api_ctypes: ApiCtypes13;
  api_req_level: number;
}

export interface ApiCtypes13 {
  '114': number;
  '122': number;
}

export interface N525 {
  api_ship_ids: ApiShipIds29;
  api_stypes: any;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds29 {
  '971': number;
  '976': number;
  '972': number;
  '977': number;
  '607': number;
  '399': number;
}

export interface N526 {
  api_ship_ids: ApiShipIds30;
  api_stypes: any;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiShipIds30 {
  '971': number;
  '976': number;
  '972': number;
  '977': number;
  '607': number;
  '399': number;
}

export interface N524 {
  api_ship_ids: any;
  api_stypes: ApiStypes18;
  api_ctypes: any;
  api_req_level: number;
}

export interface ApiStypes18 {
  '17': number;
  '19': number;
  '20': number;
  '21': number;
  '22': number;
}

export interface N527 {
  api_ship_ids: any;
  api_stypes: any;
  api_ctypes: ApiCtypes14;
  api_req_level: number;
}

export interface ApiCtypes14 {
  '88': number;
  '67': number;
  '108': number;
  '78': number;
  '112': number;
}

export interface N528 {
  api_ship_ids: any;
  api_stypes: any;
  api_ctypes: ApiCtypes15;
  api_req_level: number;
}

export interface ApiCtypes15 {
  '88': number;
  '67': number;
  '108': number;
}

export interface N124 {
  api_ship_ids: any;
  api_stypes: any;
  api_ctypes: ApiCtypes16;
  api_req_level: number;
}

export interface ApiCtypes16 {
  '47': number;
  '55': number;
}

export interface ApiMstStype {
  api_id: number;
  api_sortno: number;
  api_name: string;
  api_scnt: number;
  api_kcnt: number;
  api_equip_type: ApiEquipType;
}

export interface ApiEquipType {
  '1': number;
  '2': number;
  '3': number;
  '4': number;
  '5': number;
  '6': number;
  '7': number;
  '8': number;
  '9': number;
  '10': number;
  '11': number;
  '12': number;
  '13': number;
  '14': number;
  '15': number;
  '16': number;
  '17': number;
  '18': number;
  '19': number;
  '20': number;
  '21': number;
  '22': number;
  '23': number;
  '24': number;
  '25': number;
  '26': number;
  '27': number;
  '28': number;
  '29': number;
  '30': number;
  '31': number;
  '32': number;
  '33': number;
  '34': number;
  '35': number;
  '36': number;
  '37': number;
  '38': number;
  '39': number;
  '40': number;
  '41': number;
  '42': number;
  '43': number;
  '44': number;
  '45': number;
  '46': number;
  '47': number;
  '48': number;
  '49': number;
  '50': number;
  '51': number;
  '52': number;
  '53': number;
  '54': number;
  '55': number;
  '56': number;
  '57': number;
  '58': number;
  '59': number;
  '60': number;
  '61': number;
  '62': number;
  '63': number;
  '64': number;
  '65': number;
  '66': number;
  '67': number;
  '68': number;
  '69': number;
  '70': number;
  '71': number;
  '72': number;
  '73': number;
  '74': number;
  '75': number;
  '76': number;
  '77': number;
  '78': number;
  '79': number;
  '80': number;
  '81': number;
  '82': number;
  '83': number;
  '84': number;
  '85': number;
  '86': number;
  '87': number;
  '88': number;
  '89': number;
  '90': number;
  '91': number;
  '92': number;
  '93': number;
  '94': number;
  '95': number;
}

export interface ApiMstSlotitem {
  api_id: number;
  api_sortno: number;
  api_name: string;
  api_type: number[];
  api_taik: number;
  api_souk: number;
  api_houg: number;
  api_raig: number;
  api_soku: number;
  api_baku: number;
  api_tyku: number;
  api_tais: number;
  api_atap: number;
  api_houm: number;
  api_raim: number;
  api_houk: number;
  api_raik: number;
  api_bakk: number;
  api_saku: number;
  api_sakb: number;
  api_luck: number;
  api_leng: number;
  api_rare: number;
  api_broken: number[];
  api_usebull: string;
  api_version?: number;
  api_cost?: number;
  api_distance?: number;
}

export interface ApiMstFurnituregraph {
  api_id: number;
  api_type: number;
  api_no: number;
  api_filename: string;
  api_version: string;
}

export interface ApiMstUseitem {
  api_id: number;
  api_usetype: number;
  api_category: number;
  api_name: string;
  api_description: string[];
  api_price: number;
}

export interface ApiMstPayitem {
  api_id: number;
  api_type: number;
  api_name: string;
  api_description: string;
  api_shop_description: string;
  api_item: number[];
  api_price: number;
}

export interface ApiMstItemShop {
  api_cabinet_1: number[];
  api_cabinet_2: number[];
}

export interface ApiMstMaparea {
  api_id: number;
  api_name: string;
  api_type: number;
}

export interface ApiMstMapinfo {
  api_id: number;
  api_maparea_id: number;
  api_no: number;
  api_name: string;
  api_level: number;
  api_opetext: string;
  api_infotext: string;
  api_item: number[];
  api_max_maphp: any;
  api_required_defeat_count?: number;
  api_sally_flag: number[];
}

export interface ApiMstMapbgm {
  api_id: number;
  api_maparea_id: number;
  api_no: number;
  api_moving_bgm: number;
  api_map_bgm: number[];
  api_boss_bgm: number[];
}

export interface ApiMstMission {
  api_id: number;
  api_disp_no: string;
  api_maparea_id: number;
  api_name: string;
  api_details: string;
  api_reset_type: number;
  api_damage_type: number;
  api_time: number;
  api_deck_num: number;
  api_difficulty: number;
  api_use_fuel: number;
  api_use_bull: number;
  api_win_item1: number[];
  api_win_item2: number[];
  api_win_mat_level: number[];
  api_return_flag: number;
  api_sample_fleet: number[];
}

export interface ApiMstConst {
  api_boko_max_ships: ApiBokoMaxShips;
  api_dpflag_quest: ApiDpflagQuest;
  api_parallel_quest_max: ApiParallelQuestMax;
}

export interface ApiBokoMaxShips {
  api_string_value: string;
  api_int_value: number;
}

export interface ApiDpflagQuest {
  api_string_value: string;
  api_int_value: number;
}

export interface ApiParallelQuestMax {
  api_string_value: string;
  api_int_value: number;
}

export interface ApiMstShipupgrade {
  api_id: number;
  api_current_ship_id: number;
  api_original_ship_id: number;
  api_upgrade_type: number;
  api_upgrade_level: number;
  api_drawing_count: number;
  api_catapult_count: number;
  api_report_count: number;
  api_aviation_mat_count: number;
  api_arms_mat_count: number;
  api_tech_count: number;
  api_sortno: number;
  api_boiler_count?: number;
}

export interface ApiMstBgm {
  api_id: number;
  api_name: string;
}

export interface ApiMstEquipShip {
  api_ship_id: number;
  api_equip_type: number[];
}

export interface ApiMstFurniture {
  api_id: number;
  api_type: number;
  api_no: number;
  api_title: string;
  api_description: string;
  api_rarity: number;
  api_price: number;
  api_saleflg: number;
  api_bgm_id: number;
  api_version: number;
  api_outside_id: number;
  api_active_flag: number;
}
