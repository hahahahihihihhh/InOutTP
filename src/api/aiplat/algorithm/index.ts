import type { AlgorithmVO, AlgorithmQuery, AlgorithmForm } from './types';

// Mock 数据
const mockAlgorithmList: AlgorithmVO[] = [
  {
    id: 1,
    name: 'MCK-GNN',
    algorithm: 'mck-gnn.py',
    description: '多源关联知识图谱增强的图网络模型，用于区域出入流预测',
    parameters: '{"learning_rate": 0.001, "use_mck_adj": true, "ke_dim": 32, "max_hop": 1, "sparsity": 0.02, "batch_size": 32, "max_epoch": 500}',
    createTime: '2025-02-20 10:00:00',
    algorithmInfo: '<div><h3>MCK-GNN 模型信息</h3><p>模型类型：图神经网络</p><p>适用场景：交通流量预测</p><p>精度：95.2%</p><p>训练数据：TDRIVE 数据集</p></div>'
  },
  {
    id: 2,
    name: 'MK-GNN',
    algorithm: 'mk-gnn.py',
    description: '气象知识图谱增强的图网络模型，用于区域出入流预测',
    parameters: '{"learning_rate": 0.001, "use_mck_adj": true, "ke_dim": 16, "n_layers": 2, "sparsity": 0.02, "batch_size": 32, "max_epoch": 500}',
    createTime: '2025-02-20 11:00:00',
    algorithmInfo: '<div><h3>MK-GNN 模型信息</h3><p>模型类型：图神经网络</p><p>适用场景：交通流量预测</p><p>精度：94.8%</p><p>训练数据：NYCTAXI 数据集</p></div>'
  }
];

/**
 * 查询算法列表
 */
export const listAlgorithm = (query?: AlgorithmQuery) => {
  return Promise.resolve({
    code: 200,
    data: mockAlgorithmList,
    rows: mockAlgorithmList,
    total: mockAlgorithmList.length,
    msg: 'success'
  });
};

/**
 * 查询算法详情
 */
export const getAlgorithm = (id: number | string) => {
  const algorithm = mockAlgorithmList.find(item => item.id === id);
  return Promise.resolve({
    code: 200,
    data: algorithm || mockAlgorithmList[0],
    msg: 'success'
  });
};

/**
 * 删除算法
 */
export const delAlgorithm = (id: number | string | Array<number | string>) => {
  return Promise.resolve({
    code: 200,
    msg: 'success'
  });
};

/**
 * 添加算法
 */
export const addAlgorithm = (data: AlgorithmForm) => {
  return Promise.resolve({
    code: 200,
    msg: 'success'
  });
};

/**
 * 修改算法
 */
export const updateAlgorithm = (data: AlgorithmForm) => {
  return Promise.resolve({
    code: 200,
    msg: 'success'
  });
};

/**
 * 上传算法文件
 */
export const uploadAlgorithmFile = (file: any) => {
  return Promise.resolve('文件上传成功！');
};
