// 算法类型定义
export interface AlgorithmVO {
  id: number | string;
  name: string;
  algorithm: string;
  description: string;
  parameters?: string;
  createTime: string;
  algorithmInfo?: string;
}

export interface AlgorithmQuery {
  pageNum: number;
  pageSize: number;
  name?: string;
  createTime?: string;
  params?: Record<string, any>;
}

export interface AlgorithmForm {
  id?: number | string;
  name?: string;
  algorithm?: string;
  description?: string;
  parameters?: string;
}

export interface DialogAlgorithmOption {
  visible: boolean;
  title: string;
  content: string;
}
