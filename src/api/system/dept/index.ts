import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { DeptForm, DeptQuery, DeptTreeVO, DeptVO } from './types';

// 模拟部门数据
const mockDeptList: DeptVO[] = [
  {
    deptId: 1,
    parentId: 0,
    deptName: '总公司',
    deptCategory: 'COMPANY',
    orderNum: 1,
    status: '0',
    createTime: '2024-01-01 00:00:00',
    hasChildren: true,
    children: [
      {
        deptId: 2,
        parentId: 1,
        deptName: '技术部',
        deptCategory: 'TECH',
        orderNum: 1,
        status: '0',
        createTime: '2024-01-01 00:00:00',
        hasChildren: true,
        children: [
          {
            deptId: 4,
            parentId: 2,
            deptName: '前端组',
            deptCategory: 'FRONTEND',
            orderNum: 1,
            status: '0',
            createTime: '2024-01-01 00:00:00',
            hasChildren: false
          },
          {
            deptId: 5,
            parentId: 2,
            deptName: '后端组',
            deptCategory: 'BACKEND',
            orderNum: 2,
            status: '0',
            createTime: '2024-01-01 00:00:00',
            hasChildren: false
          }
        ]
      },
      {
        deptId: 3,
        parentId: 1,
        deptName: '产品部',
        deptCategory: 'PRODUCT',
        orderNum: 2,
        status: '0',
        createTime: '2024-01-01 00:00:00',
        hasChildren: false
      }
    ]
  }
];

// 查询部门列表
export const listDept = (query?: DeptQuery) => {
  // 模拟接口返回
  return Promise.resolve({
    code: 200,
    data: mockDeptList,
    msg: 'success'
  });
};

/**
 * 通过deptIds查询部门
 * @param deptIds
 */
export const optionSelect = (deptIds: (number | string)[]): AxiosPromise<DeptVO[]> => {
  // 模拟接口返回
  return Promise.resolve({
    code: 200,
    data: mockDeptList.filter(item => deptIds.includes(item.deptId)),
    msg: 'success'
  });
};

// 查询部门列表（排除节点）
export const listDeptExcludeChild = (deptId: string | number): AxiosPromise<DeptVO[]> => {
  // 模拟接口返回
  return Promise.resolve({
    code: 200,
    data: mockDeptList.filter(item => item.deptId !== deptId),
    msg: 'success'
  });
};

// 查询部门详细
export const getDept = (deptId: string | number): AxiosPromise<DeptVO> => {
  // 模拟接口返回
  const findDept = (depts: DeptVO[]): DeptVO | undefined => {
    for (const dept of depts) {
      if (dept.deptId === deptId) {
        return dept;
      }
      if (dept.children && dept.children.length > 0) {
        const found = findDept(dept.children);
        if (found) {
          return found;
        }
      }
    }
    return undefined;
  };
  
  const dept = findDept(mockDeptList) || {} as DeptVO;
  return Promise.resolve({
    code: 200,
    data: dept,
    msg: 'success'
  });
};

// 新增部门
export const addDept = (data: DeptForm) => {
  // 模拟接口返回
  return Promise.resolve({
    code: 200,
    data: null,
    msg: 'success'
  });
};

// 修改部门
export const updateDept = (data: DeptForm) => {
  // 模拟接口返回
  return Promise.resolve({
    code: 200,
    data: null,
    msg: 'success'
  });
};

// 删除部门
export const delDept = (deptId: number | string) => {
  // 模拟接口返回
  return Promise.resolve({
    code: 200,
    data: null,
    msg: 'success'
  });
};
