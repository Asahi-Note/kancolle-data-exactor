export interface ApiDataRoot {
  api_result: number; // 結果代碼
  api_result_msg: string; // 結果訊息
  api_data: ApiData; // 主要資料
}

export interface ApiData {
  api_mst_ship: ApiMstShip[]; // 船艦資料
  api_mst_shipgraph: ApiMstShipgraph[]; // 船艦圖像資料
  api_mst_slotitem_equiptype: ApiMstSlotitemEquiptype[]; // 裝備類型資料
  api_mst_equip_exslot: number[]; // 擴展裝備槽資料
  api_mst_equip_exslot_ship: any; // 擴展裝備槽船艦資料
  api_mst_stype: ApiMstStype[]; // 船艦類型資料
  api_mst_slotitem: ApiMstSlotitem[]; // 裝備資料
  api_mst_furnituregraph: ApiMstFurnituregraph[]; // 家具圖像資料
  api_mst_useitem: ApiMstUseitem[]; // 使用物品資料
  api_mst_payitem: ApiMstPayitem[]; // 付費物品資料
  api_mst_item_shop: ApiMstItemShop; // 物品商店資料
  api_mst_maparea: ApiMstMaparea[]; // 地圖區域資料
  api_mst_mapinfo: ApiMstMapinfo[]; // 地圖資訊資料
  api_mst_mapbgm: ApiMstMapbgm[]; // 地圖背景音樂資料
  api_mst_mission: ApiMstMission[]; // 任務資料
  api_mst_const: ApiMstConst; // 常數資料
  api_mst_shipupgrade: ApiMstShipupgrade[]; // 船艦升級資料
  api_mst_bgm: ApiMstBgm[]; // 背景音樂資料
  api_mst_equip_ship: ApiMstEquipShip[]; // 裝備船艦資料
  api_mst_furniture: ApiMstFurniture[]; // 家具資料
}

export interface ApiMstShip {
  api_id: number; // 船艦ID
  api_sortno?: number; // 排序號碼
  api_sort_id: number; // 排序ID
  api_name: string; // 船艦名稱
  api_yomi: string; // 船艦讀音
  api_stype: number; // 船艦類型
  api_ctype: number; // 船艦分類
  api_afterlv?: number; // 升級所需等級
  api_aftershipid?: string; // 升級後的船艦ID
  api_taik?: number[]; // 耐久
  api_souk?: number[]; // 裝甲
  api_houg?: number[]; // 火力
  api_raig?: number[]; // 雷裝
  api_tyku?: number[]; // 對空
  api_luck?: number[]; // 運
  api_soku: number; // 速度
  api_leng?: number; // 射程
  api_slot_num: number; // 裝備槽數量
  api_maxeq?: number[]; // 最大裝備數量
  api_buildtime?: number; // 建造時間
  api_broken?: number[]; // 解體資源
  api_powup?: number[]; // 改修資源
  api_backs?: number; // 背景
  api_getmes?: string; // 獲得訊息
  api_afterfuel?: number; // 升級所需燃料
  api_afterbull?: number; // 升級所需彈藥
  api_fuel_max?: number; // 最大燃料
  api_bull_max?: number; // 最大彈藥
  api_voicef?: number; // 聲音標誌
  api_tais?: number[]; // 對潛
}

export interface ApiMstShipgraph {
  api_id: number; // 圖像ID
  api_filename: string; // 圖像檔名
  api_version: string[]; // 圖像版本
  api_battle_n?: number[]; // 戰鬥圖像（通常）
  api_battle_d?: number[]; // 戰鬥圖像（損壞）
  api_sortno?: number; // 排序號碼
  api_boko_n?: number[]; // 母港圖像（通常）
  api_boko_d?: number[]; // 母港圖像（損壞）
  api_kaisyu_n?: number[]; // 改修圖像（通常）
  api_kaisyu_d?: number[]; // 改修圖像（損壞）
  api_kaizo_n?: number[]; // 改造圖像（通常）
  api_kaizo_d?: number[]; // 改造圖像（損壞）
  api_map_n?: number[]; // 地圖圖像（通常）
  api_map_d?: number[]; // 地圖圖像（損壞）
  api_ensyuf_n?: number[]; // 演習圖像（通常）
  api_ensyuf_d?: number[]; // 演習圖像（損壞）
  api_ensyue_n?: number[]; // 演習圖像（夜戰）
  api_weda?: number[]; // 結婚圖像A
  api_wedb?: number[]; // 結婚圖像B
  api_pa?: number[]; // 攻擊圖像A
  api_pab?: number[]; // 攻擊圖像B
  api_wedc?: number[]; // 結婚圖像C
  api_wedd?: number[]; // 結婚圖像D
  api_sp_flag?: number; // 特殊標誌
}

export interface ApiMstSlotitemEquiptype {
  api_id: number; // 裝備類型ID
  api_name: string; // 裝備類型名稱
  api_show_flg: number; // 顯示標誌
}

export interface ApiMstStype {
  api_id: number; // 類型ID
  api_sortno: number; // 排序號碼
  api_name: string; // 類型名稱
  api_scnt: number; // 類型數量
  api_kcnt: number; // 類型數量
  api_equip_type: number; // 裝備類型
}

export interface ApiMstSlotitem {
  api_id: number; // 裝備ID
  api_sortno: number; // 排序號碼
  api_name: string; // 裝備名稱
  api_type: number[]; // 裝備類型
  api_taik: number; // 耐久
  api_souk: number; // 裝甲
  api_houg: number; // 火力
  api_raig: number; // 雷裝
  api_soku: number; // 速度
  api_baku: number; // 爆裝
  api_tyku: number; // 對空
  api_tais: number; // 對潛
  api_atap: number; // 對空
  api_houm: number; // 命中
  api_raim: number; // 雷擊命中
  api_houk: number; // 回避
  api_raik: number; // 雷擊回避
  api_bakk: number; // 爆裝回避
  api_saku: number; // 索敵
  api_sakb: number; // 索敵回避
  api_luck: number; // 運
  api_leng: number; // 射程
  api_rare: number; // 稀有度
  api_broken: number[]; // 解體資源
  api_usebull: string; // 使用彈藥
  api_version?: number; // 版本
  api_cost?: number; // 成本
  api_distance?: number; // 距離
}

export interface ApiMstFurnituregraph {
  api_id: number; // 家具圖像ID
  api_type: number; // 家具類型
  api_no: number; // 家具編號
  api_filename: string; // 家具圖像檔名
  api_version: string; // 家具圖像版本
}

export interface ApiMstUseitem {
  api_id: number; // 使用物品ID
  api_usetype: number; // 使用類型
  api_category: number; // 類別
  api_name: string; // 名稱
  api_description: string[]; // 描述
  api_price: number; // 價格
}

export interface ApiMstPayitem {
  api_id: number; // 付費物品ID
  api_type: number; // 類型
  api_name: string; // 名稱
  api_description: string; // 描述
  api_shop_description: string; // 商店描述
  api_item: number[]; // 物品
  api_price: number; // 價格
}

export interface ApiMstItemShop {
  api_cabinet_1: number[]; // 櫃子1
  api_cabinet_2: number[]; // 櫃子2
}

export interface ApiMstMaparea {
  api_id: number; // 地圖區域ID
  api_name: string; // 名稱
  api_type: number; // 類型
}

export interface ApiMstMapinfo {
  api_id: number; // 地圖資訊ID
  api_maparea_id: number; // 地圖區域ID
  api_no: number; // 編號
  api_name: string; // 名稱
  api_level: number; // 等級
  api_opetext: string; // 操作文本
  api_infotext: string; // 資訊文本
  api_item: number[]; // 物品
  api_max_maphp: any; // 最大地圖HP
  api_required_defeat_count?: number; // 所需擊敗次數
  api_sally_flag: number[]; // 出擊標誌
}

export interface ApiMstMapbgm {
  api_id: number; // 地圖背景音樂ID
  api_maparea_id: number; // 地圖區域ID
  api_no: number; // 編號
  api_moving_bgm: number; // 移動背景音樂
  api_map_bgm: number[]; // 地圖背景音樂
  api_boss_bgm: number[]; // Boss背景音樂
}

export interface ApiMstMission {
  api_id: number; // 任務ID
  api_disp_no: string; // 顯示編號
  api_maparea_id: number; // 地圖區域ID
  api_name: string; // 名稱
  api_details: string; // 詳細信息
  api_reset_type: number; // 重置類型
  api_damage_type: number; // 傷害類型
  api_time: number; // 時間
  api_deck_num: number; // 艦隊數量
  api_difficulty: number; // 難度
  api_use_fuel: number; // 使用燃料
  api_use_bull: number; // 使用彈藥
  api_win_item1: number[]; // 獲勝物品1
  api_win_item2: number[]; // 獲勝物品2
  api_win_mat_level: number[]; // 獲勝材料等級
  api_return_flag: number; // 返回標誌
  api_sample_fleet: number[]; // 樣本艦隊
}

export interface ApiMstConst {
  api_boko_max_ships: ApiBokoMaxShips; // 最大船艦數量
  api_dpflag_quest: ApiDpflagQuest; // 任務標誌
  api_parallel_quest_max: ApiParallelQuestMax; // 最大並行任務數量
}

export interface ApiBokoMaxShips {
  api_string_value: string; // 字符串值
  api_int_value: number; // 整數值
}

export interface ApiDpflagQuest {
  api_string_value: string; // 字符串值
  api_int_value: number; // 整數值
}

export interface ApiParallelQuestMax {
  api_string_value: string; // 字符串值
  api_int_value: number; // 整數值
}

export interface ApiMstShipupgrade {
  api_id: number; // 升級ID
  api_current_ship_id: number; // 當前船艦ID
  api_original_ship_id: number; // 原始船艦ID
  api_upgrade_type: number; // 升級類型
  api_upgrade_level: number; // 升級等級
  api_drawing_count: number; // 繪圖數量
  api_catapult_count: number; // 彈射器數量
  api_report_count: number; // 報告數量
  api_aviation_mat_count: number; // 航空材料數量
  api_arms_mat_count: number; // 武器材料數量
  api_tech_count: number; // 技術數量
  api_sortno: number; // 排序號碼
  api_boiler_count?: number; // 鍋爐數量
}

export interface ApiMstBgm {
  api_id: number; // 背景音樂ID
  api_name: string; // 名稱
}

export interface ApiMstEquipShip {
  api_ship_id: number; // 船艦ID
  api_equip_type: number[]; // 裝備類型
}

export interface ApiMstFurniture {
  api_id: number; // 家具ID
  api_type: number; // 類型
  api_no: number; // 編號
  api_title: string; // 標題
  api_description: string; // 描述
  api_rarity: number; // 稀有度
  api_price: number; // 價格
  api_saleflg: number; // 銷售標誌
  api_bgm_id: number; // 背景音樂ID
  api_version: number; // 版本
  api_outside_id: number; // 外部ID
  api_active_flag: number; // 活動標誌
}
