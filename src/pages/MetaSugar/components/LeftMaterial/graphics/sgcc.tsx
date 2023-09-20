const sgccName = [
  '未标题-1',
  '开11',
  '关11',
  '熔断式隔离开关（合）高亮',
  '配电站（室）高亮',
  '线上变压器高亮',
  '断路器（分）高亮',
  '太阳能',
  '发电机',
  '馈线',
  '下字型排列cab右',
  '三相三个次级绕组电流互感器',
  '两相三个次级绕组电流互感器',
  '单相三个次级绕组电流互感器',
  '三相六个次级绕组电流互感器',
  '两相五个次级绕组电流互感器',
  '三相五个次级绕组电流互感器',
  '检修符',
  '交叉跨越',
  '建议孔位',
  '禁止遥控',
  '接地符',
  '缺陷符',
  '双绕组有载可调变压器Dyn（中性点引出三角形-星形连接）',
  '两相六个次级绕组电流互感器',
  '临时符',
  '临时保电符',
  '空余孔位',
  '管道',
  '跌落式熔断器（分）',
  '工作许可',
  '复合孔位',
  '电缆终端站',
  '电缆排管',
  '电缆桥',
  '重要用户符',
  '电抗器',
  '有载可调压自耦变压器',
  '用户供电点',
  '保护接地',
  '已批复未实施孔位',
  '已申请未批复孔位',
  '不可并符',
  '保留孔位',
  '已实施孔位',
  '一个绕组上有中间抽头的变压器',
  '保安锁符',
  '无功补偿器',
  '五绕组电压互感器',
  '尾线符',
  '未知孔位',
  '损坏孔位',
  '四绕组电压互感器',
  '电容式电压互感器',
  '三绕组有载可调变压器1（星形-三星形-星形连接）',
  '三绕组变压器1（星形-三星形-星形连接）',
  '三绕组有载可调变压器（星形-三星形-星形连接）',
  '双绕组有载可调变压器YNd（中性点引出星形-三角形连接）',
  '双绕组变压器Yyn（中性点引出星形-星形连接）',
  '分裂电抗器',
  '钢管塔（直线型）',
  '开闭器',
  '配变监测仪',
  '三角形排列cab',
  '下字型排列abc右',
  '下字型排列cba左',
  '下字型排列bac',
  '水平排列abc',
  '可遥控符',
  '保电符',
  '信号符',
  '停用符',
  '手动符',
  '自切符',
  '单切',
  '洪水冲刷区',
  '强腐蚀区',
  '开口三角形连接的三相绕组',
  '三角形接的三相绕组',
  'T形连接的三相绕组',
  'v行连接的三相绕组',
  '中性点引出的四相绕组',
  '互不连接的m相绕组',
  '两相四个次级绕组电流互感器',
  '三相四个次级绕组电流互感器',
  '手车刀闸（试验）',
  '检修）',
  'T型开关AB-C',
  '跌落式熔断器（分）',
  '运行光能发电站',
  '规划光能发电站',
  '双向隔离开关（分）',
  '双三角形连接的六相绕组',
  '双绕组有载可调变压器YNd（中性点引出星形-三角形连接）2',
  '双绕组有载可调变压器Yyn（中性点引出星形-星形连接）',
  '三相一个次级绕组电流互感器',
  '水泥杆',
  '双向隔离开关（左）',
  '上字型排列右bca',
  '水平排列cba',
  '铁塔（直线型）',
  '铁塔（耐张型）',
  '自调谐消弧线圈',
  '通信电缆段',
  '无功补偿箱',
  '微气候、微地形区',
  '下字型排列acb左',
  '下字型排列acb右',
  '下字型排列bca右',
  '下字型排列bca左',
  '下字型排列cab左',
  '双绕组变压器Yzn（中性点引出三角形-曲形连接）',
  '双绕组变压器Yd（中性点引出星形-三角形连接）',
  '消弧线圈',
  '箱式变',
  '下字型排列cba右',
  '壁龛交接箱',
  '一个绕组',
  '避雷器',
  '星形连接的六相绕组',
  '星形连接的三相绕组',
  '变电站',
  '垂直排列acb',
  '移相变压器',
  '采集终端',
  '大跨越区',
  '垂直排列abc',
  '永久接头',
  '垂直排列bac',
  '垂直排列bca',
  '易受外力破坏区',
  '易受风害区',
  '导线段',
  '运行等离子体电厂',
  '单相两个次级绕组电流互感器',
  '运行抽水蓄能电厂',
  '单相六个次级绕组电流互感器',
  '有载可调压自耦变压器',
  '单相一个次级绕组电流互感器',
  '运行杆塔',
  '带电显示器',
  '运行换流站',
  '单相五个次级绕组电流互感器',
  '运行潮汐电厂',
  '低压熔丝箱（合）',
  '运行风力发电站',
  '低压熔丝箱（分）',
  '运行水电厂',
  '垂直排列cab',
  '运行串补站',
  '单相四个次级绕组电流互感器',
  '运行变电站',
  '电缆段',
  '运行核电站',
  '中继站',
  '电缆分界箱',
  '直流发电机',
  '导、地线覆冰区',
  '运行秸秆电厂',
  '电缆接地箱',
  '运行开关站',
  '电缆通风口',
  '运行垃圾电厂',
  '电缆隧道',
  '终端室（站）',
  '电缆沟',
  '柱上变压器',
  '低压配电箱',
  '中性点引出的曲形折或互联星形的三相绕组',
  '电力电感器',
  '柱上变压器（公用变）',
  '盗窃多发区',
  '中性点引出星形连接的三相绕组',
  '电缆交叉互联箱',
  '中性点引出的叉形连接六相绕组',
  '电缆中间接头',
  'a级污秽区',
  '断路器（合）',
  '柱上重合器（分）',
  '柱上重合器（合）',
  '电缆终端头',
  '运行火电厂',
  '跌落式熔断器（合）',
  '自耦变压器（星形连接）',
  '运行地热电厂',
  '通信终端箱',
  '电力电容器',
  '柱上断路器（分）',
  '电力电阻器',
  '柱上隔离开关（合）',
  '分段器',
  '柱上断路器（合）',
  '负荷开关（合）',
  '柱上负荷开关（合）',
  '电流方向',
  '柱上隔离开关（分）',
  '防雷符',
  '柱上电容器',
  '方向标志',
  '柱上负荷开关（分）',
  '高压用户',
  'V型开关B-C',
  '自耦变压器',
  '钢管杆',
  'V型开关OPEN',
  '通信电缆接头',
  '钢管塔（耐张型）',
  'e级污秽区',
  'c级污秽区',
  '放电线圈',
  'b级污秽区',
  '规划变电站',
  'd级污秽区',
  '隔离开关（分）',
  '阻波器',
  '多雷区',
  'V型开关A-C',
  'T型开关A-C',
  '规划地热电厂',
  'T型开关A-B',
  '规划抽水蓄能电厂',
  'T型开关B-C',
  '规划换流站',
  'V型开关AB-C',
  '光缆段',
  '工井',
  '规划潮汐电厂',
  '隔离开关（合）',
  '电缆分支箱',
  '电缆防火墙',
  '规划垃圾电厂',
  '规划风力发电站',
  '规划火电厂',
  '导、地线易舞动区',
  '故障指示器',
  '规划串补站',
  '规划等离子体电厂',
  '规划开关站',
  '规划水电厂',
  '规划核电站',
  '不良地质区',
  '断路器（分）',
  '规划秸秆电厂',
  '垂直排列cba',
  '互不连接的M相绕组',
  '环网柜',
  '换流站',
  '计量器',
  '互不连接的三相绕组',
  '环网箱式变',
  '架空交接箱',
  '计量表计',
  '检修）',
  '接触器（分）',
  '交流发电机',
  '间隙',
  '接触器（合）',
  '接地刀闸（分）',
  '接地',
  '进户点',
  '接地电阻',
  '局用站点',
  '接地刀闸（合）',
  '接地变压器（曲折形连接）',
  '静止无功补偿器',
  '可拆卸固定接头',
  '可调电容器',
  '开断符',
  '开关站',
  '两相四端绕组02',
  '两相四端绕组',
  '连接线',
  '两相两个次级绕组电流互感器',
  '六个独立个绕组',
  '母线',
  '耦合电容器',
  '木杆',
  '两相一个次级绕组电流互感器',
  '林竹区',
  '落地交接箱',
  '其他特殊区',
  '配电站（室）',
  '曲折形或互联星形的三相绕组',
  '盘留',
  '鸟害多发区',
  '熔断器',
  '熔断式断路器（合）',
  '熔断式断路器（分）',
  '熔断式开关（合）',
  '熔断式隔离开关（合）',
  '熔断式负荷开关（合）',
  '熔断式负荷开关（分）',
  '三个独立个绕组',
  '熔断式开关（分）',
  '三工位开关（分）',
  '熔断式隔离开关（分）',
  '三联杆（钢管杆）',
  '三角形排列cba',
  '三工位开关（接地）',
  '三角形排列abc',
  '三角形排列bac',
  '三工位开关（合）',
  '三联杆（木杆）',
  '三绕组变压器YNdy（中性点引出星形-三角形-星形连接）',
  '人口密集区',
  '三角形排列acb',
  '三绕组变压器',
  '三绕组电压互感器',
  '三绕组变压器（三角形-星形-星形连接）',
  '上字型排列右acb',
  '三绕组变压器（中性点引出星形-三角形连接）',
  '三绕组变压器YNdy（中性点引出星形-三角形-星形连接）2',
  '三绕组变压器YNynd（中性点引出星形-星形-三角形连接）2',
  '三绕组变压器（星形-三角形-星形连接）',
  '三绕组变压器（星形-星形-三角形连接）',
  '三绕组变压器YNynd（中性点引出星形-星形-三角形连接）',
  '上字型排列右bac',
  '三角形排列bca',
  '上字型排列右abc',
  '沙丘区',
  '三联杆（水泥杆）',
  '双绕组变压器（有载调压）',
  '上字型排列左cba',
  '上字型排列右cba',
  '上字型排列左cab',
  '手车刀闸（分）',
  '双向隔离开关（右）',
  '手车刀闸（合）',
  '双联杆（水泥杆）',
  '手车开关（分）',
  '双绕组电压互感器',
  '双联杆（钢管杆）',
  '双绕组变压器',
  '双绕组变压器（具有分接开关）',
  '上字型排列左bac',
  '双绕组变压器（具有4个抽头星形-星形连接）',
  '上字型排列右cab',
  '上字型排列左abc',
  '双绕组变压器（曲折形-星形）',
  '双绕组变压器（三星形-星形连接）',
  '上字型排列左bca',
  '双绕组变压器YNd（中性点引出星形-三角形连接）2',
  '双绕组变压器（星形-星形连接）',
  '上字型排列左acb',
  '双绕组变压器Dyn（中性点引出三角形-星形连接）',
  '手车开关（合）',
  '双绕组变压器（绕组间有屏蔽）',
  '手车压变（带熔断器）',
  '三相两个次级绕组电流互感器',
  '双联杆（木杆）',
  '双绕组变压器Yd（中性点引出星形-三角形连接）2',
];

const sgccUnicode = {
  'weibiaoti-1': {
    content: 'e9ee',
  },
  kai11: {
    content: 'e9ec',
  },
  guan11: {
    content: 'e9ed',
  },
  'a-rongduanshigelikaiguanhegaoliang': {
    content: 'e9a4',
  },
  'a-peidianzhanshigaoliang': {
    content: 'e9a1',
  },
  xianshangbianyaqigaoliang: {
    content: 'e9a2',
  },
  'a-duanluqifengaoliang': {
    content: 'e9a3',
  },
  taiyangneng: {
    content: 'e9a0',
  },
  fadianji: {
    content: 'e7b9',
  },
  kuixian: {
    content: 'e99f',
  },
  xiazixingpailiecabyou1: {
    content: 'e99e',
  },
  sanxiangsangecijiraozudianliuhuganqi: {
    content: 'e99d',
  },
  liangxiangsangecijiraozudianliuhuganqi: {
    content: 'e99c',
  },
  danxiangsangecijiraozudianliuhuganqi: {
    content: 'e8e8',
  },
  sanxiangliugecijiraozudianliuhuganqi: {
    content: 'e8dd',
  },
  liangxiangwugecijiraozudianliuhuganqi: {
    content: 'e99b',
  },
  sanxiangwugecijiraozudianliuhuganqi: {
    content: 'e8f0',
  },
  jianxiufu1: {
    content: 'e99a',
  },
  jiaochakuayue1: {
    content: 'e999',
  },
  jianyikongwei1: {
    content: 'e998',
  },
  jinzhiyaokong1: {
    content: 'e997',
  },
  jiedifu1: {
    content: 'e8bb',
  },
  quexianfu1: {
    content: 'e996',
  },
  'shuangraozuyouzaiketiaobianyaqiDynzhongxingdianyinchusanjiaoxing-xingxinglianjie':
    {
      content: 'e907',
    },
  liangxiangliugecijiraozudianliuhuganqi1: {
    content: 'e995',
  },
  linshifu1: {
    content: 'e994',
  },
  linshibaodianfu1: {
    content: 'e993',
  },
  kongyukongwei: {
    content: 'e992',
  },
  guandao1: {
    content: 'e991',
  },
  dielashirongduanqifen2: {
    content: 'e990',
  },
  gongzuoxuke1: {
    content: 'e98f',
  },
  fuhekongwei1: {
    content: 'e98e',
  },
  dianlanzhongduanzhan1: {
    content: 'e98d',
  },
  dianlanpaiguan1: {
    content: 'e98c',
  },
  dianlanqiao1: {
    content: 'e951',
  },
  zhongyaoyonghufu1: {
    content: 'e98b',
  },
  diankangqi1: {
    content: 'e93a',
  },
  youzaiketiaoyazioubianyaqi2: {
    content: 'e98a',
  },
  yonghugongdiandian: {
    content: 'e937',
  },
  baohujiedi: {
    content: 'e989',
  },
  yipifuweishishikongwei: {
    content: 'e936',
  },
  yishenqingweipifukongwei: {
    content: 'e934',
  },
  bukebingfu: {
    content: 'e988',
  },
  baoliukongwei: {
    content: 'e933',
  },
  yishishikongwei: {
    content: 'e931',
  },
  yigeraozushangyouzhongjianchoutoudebianyaqi1: {
    content: 'e987',
  },
  baoansuofu: {
    content: 'e986',
  },
  wugongbuchangqi: {
    content: 'e91e',
  },
  wuraozudianyahuganqi: {
    content: 'e91f',
  },
  weixianfu: {
    content: 'e91d',
  },
  weizhikongwei: {
    content: 'e919',
  },
  sunhuaikongwei: {
    content: 'e918',
  },
  siraozudianyahuganqi: {
    content: 'e912',
  },
  dianrongshidianyahuganqi: {
    content: 'e985',
  },
  'sanraozuyouzaiketiaobianyaqi1xingxing-sanxingxing-xingxinglianjie': {
    content: 'e984',
  },
  'sanraozubianyaqi1xingxing-sanxingxing-xingxinglianjie': {
    content: 'e8df',
  },
  'sanraozuyouzaiketiaobianyaqixingxing-sanxingxing-xingxinglianjie': {
    content: 'e8d7',
  },
  'shuangraozuyouzaiketiaobianyaqiYNdzhongxingdianyinchuxingxing-sanjiaoxinglianjie':
    {
      content: 'e92f',
    },
  'shuangraozubianyaqiYynzhongxingdianyinchuxingxing-xingxinglianjie': {
    content: 'e983',
  },
  fenliediankangqi: {
    content: 'e982',
  },
  gangguantazhixianxing: {
    content: 'e981',
  },
  kaibiqi: {
    content: 'e89f',
  },
  peibianjianceyi: {
    content: 'e8b7',
  },
  sanjiaoxingpailiecab: {
    content: 'e980',
  },
  xiazixingpailieabcyou: {
    content: 'e91c',
  },
  xiazixingpailiecbazuo: {
    content: 'e97f',
  },
  xiazixingpailiebac: {
    content: 'e922',
  },
  shuipingpailieabc: {
    content: 'e8f5',
  },
  keyaokongfu: {
    content: 'e8a0',
  },
  baodianfu: {
    content: 'e97e',
  },
  xinhaofu: {
    content: 'e928',
  },
  tingyongfu: {
    content: 'e914',
  },
  shoudongfu: {
    content: 'e8fc',
  },
  ziqiefu: {
    content: 'e97d',
  },
  danqie: {
    content: 'e965',
  },
  hongshuichongshuaqu: {
    content: 'e97c',
  },
  qiangfushiqu: {
    content: 'e97b',
  },
  kaikousanjiaoxinglianjiedesanxiangraozu: {
    content: 'e97a',
  },
  sanjiaoxingjiedesanxiangraozu: {
    content: 'e979',
  },
  Txinglianjiedesanxiangraozu: {
    content: 'e978',
  },
  vhanglianjiedesanxiangraozu: {
    content: 'e977',
  },
  zhongxingdianyinchudesixiangraozu: {
    content: 'e976',
  },
  hubulianjiedemxiangraozu: {
    content: 'e975',
  },
  liangxiangsigecijiraozudianliuhuganqi: {
    content: 'e8b3',
  },
  sanxiangsigecijiraozudianliuhuganqi: {
    content: 'e90b',
  },
  shouchedaozhashiyan: {
    content: 'e974',
  },
  jianxiu1: {
    content: 'e973',
  },
  'TxingkaiguanAB-C': {
    content: 'e96e',
  },
  dielashirongduanqifen1: {
    content: 'e972',
  },
  yunhangguangnengfadianzhan: {
    content: 'e971',
  },
  guihuaguangnengfadianzhan: {
    content: 'e970',
  },
  shuangxianggelikaiguanfen: {
    content: 'e908',
  },
  shuangsanjiaoxinglianjiedeliuxiangraozu: {
    content: 'e909',
  },
  'shuangraozuyouzaiketiaobianyaqiYNdzhongxingdianyinchuxingxing-sanjiaoxinglianjie2':
    {
      content: 'e90a',
    },
  'shuangraozuyouzaiketiaobianyaqiYynzhongxingdianyinchuxingxing-xingxinglianjie':
    {
      content: 'e90c',
    },
  sanxiangyigecijiraozudianliuhuganqi: {
    content: 'e90d',
  },
  shuinigan: {
    content: 'e90e',
  },
  shuangxianggelikaiguanzuo: {
    content: 'e90f',
  },
  shangzixingpailieyoubca: {
    content: 'e910',
  },
  shuipingpailiecba: {
    content: 'e911',
  },
  tietazhixianxing: {
    content: 'e913',
  },
  tietanaizhangxing: {
    content: 'e915',
  },
  zitiaoxiexiaohuxianquan: {
    content: 'e916',
  },
  tongxindianlanduan: {
    content: 'e917',
  },
  wugongbuchangxiang: {
    content: 'e91a',
  },
  weiqihouweidixingqu: {
    content: 'e91b',
  },
  xiazixingpailieacbzuo: {
    content: 'e920',
  },
  xiazixingpailieacbyou: {
    content: 'e921',
  },
  xiazixingpailiebcayou: {
    content: 'e923',
  },
  xiazixingpailiebcazuo: {
    content: 'e924',
  },
  xiazixingpailiecabzuo: {
    content: 'e926',
  },
  'shuangraozubianyaqiYznzhongxingdianyinchusanjiaoxing-quxinglianjie': {
    content: 'e927',
  },
  'shuangraozubianyaqiYdzhongxingdianyinchuxingxing-sanjiaoxinglianjie': {
    content: 'e929',
  },
  xiaohuxianquan: {
    content: 'e92a',
  },
  xiangshibian: {
    content: 'e92b',
  },
  xiazixingpailiecbayou: {
    content: 'e92c',
  },
  bikanjiaojiexiang: {
    content: 'e82d',
  },
  yigeraozu: {
    content: 'e92d',
  },
  bileiqi: {
    content: 'e82e',
  },
  xingxinglianjiedeliuxiangraozu: {
    content: 'e92e',
  },
  xingxinglianjiedesanxiangraozu: {
    content: 'e930',
  },
  biandianzhan: {
    content: 'e831',
  },
  chuizhipailieacb: {
    content: 'e832',
  },
  yixiangbianyaqi: {
    content: 'e932',
  },
  caijizhongduan: {
    content: 'e833',
  },
  dakuayuequ: {
    content: 'e834',
  },
  chuizhipailieabc: {
    content: 'e835',
  },
  yongjiujietou: {
    content: 'e935',
  },
  chuizhipailiebac: {
    content: 'e836',
  },
  chuizhipailiebca: {
    content: 'e838',
  },
  yishouwailipohuaiqu: {
    content: 'e938',
  },
  yishoufenghaiqu: {
    content: 'e939',
  },
  daoxianduan: {
    content: 'e83b',
  },
  yunhangdenglizitidianchang: {
    content: 'e93b',
  },
  danxianglianggecijiraozudianliuhuganqi: {
    content: 'e83c',
  },
  yunhangchoushuixunengdianchang: {
    content: 'e93c',
  },
  danxiangliugecijiraozudianliuhuganqi: {
    content: 'e83d',
  },
  youzaiketiaoyazioubianyaqi1: {
    content: 'e93d',
  },
  danxiangyigecijiraozudianliuhuganqi: {
    content: 'e83e',
  },
  yunhangganta: {
    content: 'e93e',
  },
  daidianxianshiqi: {
    content: 'e83f',
  },
  yunhanghuanliuzhan: {
    content: 'e93f',
  },
  danxiangwugecijiraozudianliuhuganqi: {
    content: 'e840',
  },
  yunhangchaoxidianchang: {
    content: 'e940',
  },
  diyarongsixianghe: {
    content: 'e841',
  },
  yunhangfenglifadianzhan: {
    content: 'e941',
  },
  diyarongsixiangfen: {
    content: 'e842',
  },
  yunhangshuidianchang: {
    content: 'e942',
  },
  chuizhipailiecab: {
    content: 'e843',
  },
  yunhangchuanbuzhan: {
    content: 'e943',
  },
  danxiangsigecijiraozudianliuhuganqi: {
    content: 'e844',
  },
  yunhangbiandianzhan: {
    content: 'e944',
  },
  dianlanduan: {
    content: 'e845',
  },
  yunhanghedianzhan: {
    content: 'e945',
  },
  zhongjizhan: {
    content: 'e946',
  },
  dianlanfenjiexiang: {
    content: 'e847',
  },
  zhiliufadianji: {
    content: 'e947',
  },
  daodixianfubingqu: {
    content: 'e848',
  },
  yunhangjiegandianchang: {
    content: 'e948',
  },
  dianlanjiedixiang: {
    content: 'e849',
  },
  yunhangkaiguanzhan: {
    content: 'e949',
  },
  dianlantongfengkou: {
    content: 'e84a',
  },
  yunhanglajidianchang: {
    content: 'e94a',
  },
  dianlansuidao: {
    content: 'e84b',
  },
  zhongduanshizhan: {
    content: 'e94b',
  },
  dianlangou: {
    content: 'e84c',
  },
  zhushangbianyaqi: {
    content: 'e94c',
  },
  diyapeidianxiang: {
    content: 'e84d',
  },
  zhongxingdianyinchudequxingzhehuohulianxingxingdesanxiangraozu: {
    content: 'e94d',
  },
  dianlidianganqi: {
    content: 'e84e',
  },
  zhushangbianyaqigongyongbian: {
    content: 'e94e',
  },
  daoqieduofaqu: {
    content: 'e84f',
  },
  zhongxingdianyinchuxingxinglianjiedesanxiangraozu: {
    content: 'e94f',
  },
  dianlanjiaochahulianxiang: {
    content: 'e850',
  },
  zhongxingdianyinchudechaxinglianjieliuxiangraozu: {
    content: 'e950',
  },
  dianlanzhongjianjietou: {
    content: 'e851',
  },
  ajiwuhuiqu: {
    content: 'e952',
  },
  duanluqihe: {
    content: 'e853',
  },
  zhushangzhongheqifen: {
    content: 'e953',
  },
  zhushangzhongheqihe: {
    content: 'e954',
  },
  dianlanzhongduantou: {
    content: 'e855',
  },
  yunhanghuodianchang: {
    content: 'e955',
  },
  dielashirongduanqihe: {
    content: 'e856',
  },
  zioubianyaqixingxinglianjie: {
    content: 'e956',
  },
  yunhangdiredianchang: {
    content: 'e957',
  },
  tongxinzhongduanxiang: {
    content: 'e958',
  },
  dianlidianrongqi: {
    content: 'e859',
  },
  zhushangduanluqifen: {
    content: 'e959',
  },
  dianlidianzuqi: {
    content: 'e85a',
  },
  zhushanggelikaiguanhe: {
    content: 'e95a',
  },
  fenduanqi: {
    content: 'e85b',
  },
  zhushangduanluqihe: {
    content: 'e95b',
  },
  fuhekaiguanhe: {
    content: 'e85c',
  },
  zhushangfuhekaiguanhe: {
    content: 'e95c',
  },
  dianliufangxiang: {
    content: 'e85d',
  },
  zhushanggelikaiguanfen: {
    content: 'e95d',
  },
  fangleifu: {
    content: 'e85e',
  },
  zhushangdianrongqi: {
    content: 'e95e',
  },
  fangxiangbiaozhi: {
    content: 'e85f',
  },
  zhushangfuhekaiguanfen: {
    content: 'e95f',
  },
  gaoyayonghu: {
    content: 'e860',
  },
  'VxingkaiguanB-C': {
    content: 'e960',
  },
  zioubianyaqi: {
    content: 'e961',
  },
  gangguangan: {
    content: 'e862',
  },
  VxingkaiguanOPEN: {
    content: 'e962',
  },
  tongxindianlanjietou: {
    content: 'e963',
  },
  gangguantanaizhangxing: {
    content: 'e864',
  },
  ejiwuhuiqu: {
    content: 'e964',
  },
  cjiwuhuiqu: {
    content: 'e966',
  },
  fangdianxianquan: {
    content: 'e867',
  },
  bjiwuhuiqu: {
    content: 'e967',
  },
  guihuabiandianzhan: {
    content: 'e868',
  },
  djiwuhuiqu: {
    content: 'e968',
  },
  gelikaiguanfen: {
    content: 'e869',
  },
  zuboqi: {
    content: 'e969',
  },
  duoleiqu: {
    content: 'e86a',
  },
  'VxingkaiguanA-C': {
    content: 'e96a',
  },
  'TxingkaiguanA-C': {
    content: 'e96b',
  },
  guihuadiredianchang: {
    content: 'e86c',
  },
  'TxingkaiguanA-B': {
    content: 'e96c',
  },
  guihuachoushuixunengdianchang: {
    content: 'e86d',
  },
  'TxingkaiguanB-C': {
    content: 'e96d',
  },
  guihuahuanliuzhan: {
    content: 'e86e',
  },
  'VxingkaiguanAB-C': {
    content: 'e96f',
  },
  guanglanduan: {
    content: 'e870',
  },
  gongjing: {
    content: 'e871',
  },
  guihuachaoxidianchang: {
    content: 'e872',
  },
  gelikaiguanhe: {
    content: 'e873',
  },
  dianlanfenzhixiang: {
    content: 'e874',
  },
  dianlanfanghuoqiang: {
    content: 'e875',
  },
  guihualajidianchang: {
    content: 'e876',
  },
  guihuafenglifadianzhan: {
    content: 'e877',
  },
  guihuahuodianchang: {
    content: 'e878',
  },
  daodixianyiwudongqu: {
    content: 'e879',
  },
  guzhangzhishiqi: {
    content: 'e87a',
  },
  guihuachuanbuzhan: {
    content: 'e87b',
  },
  guihuadenglizitidianchang: {
    content: 'e87c',
  },
  guihuakaiguanzhan: {
    content: 'e87d',
  },
  guihuashuidianchang: {
    content: 'e87e',
  },
  guihuahedianzhan: {
    content: 'e87f',
  },
  buliangdizhiqu: {
    content: 'e880',
  },
  duanluqifen: {
    content: 'e881',
  },
  guihuajiegandianchang: {
    content: 'e882',
  },
  chuizhipailiecba: {
    content: 'e883',
  },
  hubulianjiedeMxiangraozu: {
    content: 'e884',
  },
  huanwanggui: {
    content: 'e885',
  },
  huanliuzhan: {
    content: 'e886',
  },
  jiliangqi: {
    content: 'e887',
  },
  hubulianjiedesanxiangraozu: {
    content: 'e888',
  },
  huanwangxiangshibian: {
    content: 'e889',
  },
  jiakongjiaojiexiang: {
    content: 'e88a',
  },
  jiliangbiaoji: {
    content: 'e88b',
  },
  jianxiu: {
    content: 'e88d',
  },
  jiechuqifen: {
    content: 'e88f',
  },
  jiaoliufadianji: {
    content: 'e890',
  },
  jianxi: {
    content: 'e891',
  },
  jiechuqihe: {
    content: 'e893',
  },
  jiedidaozhafen: {
    content: 'e894',
  },
  jiedi: {
    content: 'e895',
  },
  jinhudian: {
    content: 'e896',
  },
  jiedidianzu: {
    content: 'e897',
  },
  juyongzhandian: {
    content: 'e898',
  },
  jiedidaozhahe: {
    content: 'e89a',
  },
  jiedibianyaqiquzhexinglianjie: {
    content: 'e89c',
  },
  jingzhiwugongbuchangqi: {
    content: 'e89d',
  },
  kechaixiegudingjietou: {
    content: 'e89e',
  },
  ketiaodianrongqi: {
    content: 'e8a1',
  },
  kaiduanfu: {
    content: 'e8a2',
  },
  kaiguanzhan: {
    content: 'e8a3',
  },
  liangxiangsiduanraozu02: {
    content: 'e8a5',
  },
  liangxiangsiduanraozu: {
    content: 'e8a6',
  },
  lianjiexian: {
    content: 'e8a8',
  },
  liangxianglianggecijiraozudianliuhuganqi: {
    content: 'e8a9',
  },
  liugeduligeraozu: {
    content: 'e8ac',
  },
  muxian: {
    content: 'e8ad',
  },
  ouhedianrongqi: {
    content: 'e8af',
  },
  mugan: {
    content: 'e8b1',
  },
  liangxiangyigecijiraozudianliuhuganqi: {
    content: 'e8b2',
  },
  linzhuqu: {
    content: 'e8b4',
  },
  ladijiaojiexiang: {
    content: 'e8b5',
  },
  qitateshuqu: {
    content: 'e8b8',
  },
  peidianzhanshi: {
    content: 'e8b9',
  },
  quzhexinghuohulianxingxingdesanxiangraozu: {
    content: 'e8ba',
  },
  panliu: {
    content: 'e8bc',
  },
  niaohaiduofaqu: {
    content: 'e8bd',
  },
  rongduanqi: {
    content: 'e8be',
  },
  rongduanshiduanluqihe: {
    content: 'e8bf',
  },
  rongduanshiduanluqifen: {
    content: 'e8c0',
  },
  rongduanshikaiguanhe: {
    content: 'e8c1',
  },
  rongduanshigelikaiguanhe: {
    content: 'e8c2',
  },
  rongduanshifuhekaiguanhe: {
    content: 'e8c3',
  },
  rongduanshifuhekaiguanfen: {
    content: 'e8c4',
  },
  sangeduligeraozu: {
    content: 'e8c5',
  },
  rongduanshikaiguanfen: {
    content: 'e8c6',
  },
  sangongweikaiguanfen: {
    content: 'e8c7',
  },
  rongduanshigelikaiguanfen: {
    content: 'e8c8',
  },
  sanliangangangguangan: {
    content: 'e8c9',
  },
  sanjiaoxingpailiecba: {
    content: 'e8ca',
  },
  sangongweikaiguanjiedi: {
    content: 'e8cb',
  },
  sanjiaoxingpailieabc: {
    content: 'e8cc',
  },
  sanjiaoxingpailiebac: {
    content: 'e8cd',
  },
  sangongweikaiguanhe: {
    content: 'e8ce',
  },
  sanlianganmugan: {
    content: 'e8cf',
  },
  'sanraozubianyaqiYNdyzhongxingdianyinchuxingxing-sanjiaoxing-xingxinglianjie':
    {
      content: 'e8d0',
    },
  renkoumijiqu: {
    content: 'e8d1',
  },
  sanjiaoxingpailieacb: {
    content: 'e8d2',
  },
  sanraozubianyaqi: {
    content: 'e8d3',
  },
  sanraozudianyahuganqi: {
    content: 'e8d4',
  },
  'sanraozubianyaqisanjiaoxing-xingxing-xingxinglianjie': {
    content: 'e8d5',
  },
  shangzixingpailieyouacb: {
    content: 'e8d6',
  },
  'sanraozubianyaqizhongxingdianyinchuxingxing-sanjiaoxinglianjie': {
    content: 'e8d8',
  },
  'sanraozubianyaqiYNdyzhongxingdianyinchuxingxing-sanjiaoxing-xingxinglianjie2':
    {
      content: 'e8d9',
    },
  'sanraozubianyaqiYNyndzhongxingdianyinchuxingxing-xingxing-sanjiaoxinglianjie2':
    {
      content: 'e8da',
    },
  'sanraozubianyaqixingxing-sanjiaoxing-xingxinglianjie': {
    content: 'e8db',
  },
  'sanraozubianyaqixingxing-xingxing-sanjiaoxinglianjie': {
    content: 'e8dc',
  },
  'sanraozubianyaqiYNyndzhongxingdianyinchuxingxing-xingxing-sanjiaoxinglianjie':
    {
      content: 'e8de',
    },
  shangzixingpailieyoubac: {
    content: 'e8e0',
  },
  sanjiaoxingpailiebca: {
    content: 'e8e1',
  },
  shangzixingpailieyouabc: {
    content: 'e8e2',
  },
  shaqiuqu: {
    content: 'e8e3',
  },
  sanlianganshuinigan: {
    content: 'e8e4',
  },
  shuangraozubianyaqiyouzaitiaoya: {
    content: 'e8e5',
  },
  shangzixingpailiezuocba: {
    content: 'e8e6',
  },
  shangzixingpailieyoucba: {
    content: 'e8e7',
  },
  shangzixingpailiezuocab: {
    content: 'e8e9',
  },
  shouchedaozhafen: {
    content: 'e8ea',
  },
  shuangxianggelikaiguanyou: {
    content: 'e8eb',
  },
  shouchedaozhahe: {
    content: 'e8ec',
  },
  shuanglianganshuinigan: {
    content: 'e8ed',
  },
  shouchekaiguanfen: {
    content: 'e8ee',
  },
  shuangraozudianyahuganqi: {
    content: 'e8ef',
  },
  shuangliangangangguangan: {
    content: 'e8f1',
  },
  shuangraozubianyaqi: {
    content: 'e8f2',
  },
  shuangraozubianyaqijuyoufenjiekaiguan: {
    content: 'e8f3',
  },
  shangzixingpailiezuobac: {
    content: 'e8f4',
  },
  'shuangraozubianyaqijuyou4gechoutouxingxing-xingxinglianjie': {
    content: 'e8f6',
  },
  shangzixingpailieyoucab: {
    content: 'e8f7',
  },
  shangzixingpailiezuoabc: {
    content: 'e8f8',
  },
  'shuangraozubianyaqiquzhexing-xingxing': {
    content: 'e8f9',
  },
  'shuangraozubianyaqisanxingxing-xingxinglianjie': {
    content: 'e8fa',
  },
  shangzixingpailiezuobca: {
    content: 'e8fb',
  },
  'shuangraozubianyaqiYNdzhongxingdianyinchuxingxing-sanjiaoxinglianjie2': {
    content: 'e8fd',
  },
  'shuangraozubianyaqixingxing-xingxinglianjie': {
    content: 'e8fe',
  },
  shangzixingpailiezuoacb: {
    content: 'e8ff',
  },
  'shuangraozubianyaqiDynzhongxingdianyinchusanjiaoxing-xingxinglianjie': {
    content: 'e900',
  },
  shouchekaiguanhe: {
    content: 'e901',
  },
  shuangraozubianyaqiraozujianyoupingbi: {
    content: 'e902',
  },
  shoucheyabiandairongduanqi: {
    content: 'e903',
  },
  sanxianglianggecijiraozudianliuhuganqi: {
    content: 'e904',
  },
  shuanglianganmugan: {
    content: 'e905',
  },
  'shuangraozubianyaqiYdzhongxingdianyinchuxingxing-sanjiaoxinglianjie2': {
    content: 'e906',
  },
};

/* const list = document.querySelectorAll('[class~="sgcc"]');
let map = [];
list.forEach(item=> {
	map.push(item.getAttribute('class'))
})
console.log(map) */

/* const list = document.querySelectorAll('[draggable="true"][data-v-342e4c92]');
let map = [];
list.forEach(item=> {
	map.push(item.getAttribute('title'))
})
console.log(map) */

/* const list = document.querySelectorAll('p[class="value"]');
console.log(list)
let map = [];
list.forEach(item=> {
	map.push(item.innerText)
})
console.log(map) */
export const SGCC_ICON = Object.keys(sgccUnicode).map((item, index) => {
  return {
    key: `sgcc-${item}`,
    title: sgccName[index],
    data: {
      name: 'image',
      iconFamily: 'sgcc',
      lineHeight: 1.5,
      width: 50,
      height: 50,
      icon: String.fromCharCode(+`0x${sgccUnicode[item].content}`), // 字体图标Unicode编码。必须正确设置
    },
  };
});
