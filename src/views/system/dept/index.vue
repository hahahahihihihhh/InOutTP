<template>
  <div class="p-2">
    <transition :enter-active-class="proxy?.animate.searchAnimate.enter" :leave-active-class="proxy?.animate.searchAnimate.leave">
      <div v-show="showSearch" class="mb-[10px]">
        <el-card shadow="hover">
          <el-form ref="queryFormRef" :model="queryParams" :inline="true" label-width="auto">
            <el-form-item label="数据集名称" prop="deptName">
              <el-select v-model="queryParams.deptName" placeholder="请选择数据集" clearable @change="handleQuery">
                <el-option label="TDRIVE" value="TDRIVE" />
                <el-option label="NYCTAXI" value="NYCTAXI" />
              </el-select>
            </el-form-item>
            <el-form-item label="模型名称" prop="deptCategory">
              <el-select v-model="queryParams.deptCategory" placeholder="请选择模型" clearable @change="handleQuery">
                <el-option label="MCK-GNN" value="mck-gnn" />
                <el-option label="MK-GNN" value="mk-gnn" />
              </el-select>
            </el-form-item>
            <el-form-item label="未来时间" prop="status">
              <el-select v-model="queryParams.status" placeholder="请选择时间" clearable @change="handleQuery" style="width: 200px">
                <el-option label="2015-07-01 00:00" value="20150401_00" />
                <el-option label="2015-07-01 01:00" value="20150401_01" />
                <el-option label="2015-07-01 02:00" value="20150401_02" />
                <el-option label="2015-07-01 03:00" value="20150401_03" />
                <el-option label="2015-07-01 04:00" value="20150401_04" />
                <el-option label="2015-07-01 05:00" value="20150401_05" />
                <el-option label="2015-07-01 06:00" value="20150401_06" />
                <el-option label="2015-07-01 07:00" value="20150401_07" />
                <el-option label="2015-07-01 08:00" value="20150401_08" />
                <el-option label="2015-07-01 09:00" value="20150401_09" />
                <el-option label="2015-07-01 10:00" value="20150401_10" />
                <el-option label="2015-07-01 11:00" value="20150401_11" />
                <el-option label="2015-07-01 12:00" value="20150401_12" />
                <el-option label="2015-07-01 13:00" value="20150401_13" />
                <el-option label="2015-07-01 14:00" value="20150401_14" />
                <el-option label="2015-07-01 15:00" value="20150401_15" />
                <el-option label="2015-07-01 16:00" value="20150401_16" />
                <el-option label="2015-07-01 17:00" value="20150401_17" />
                <el-option label="2015-07-01 18:00" value="20150401_18" />
                <el-option label="2015-07-01 19:00" value="20150401_19" />
                <el-option label="2015-07-01 20:00" value="20150401_20" />
                <el-option label="2015-07-01 21:00" value="20150401_21" />
                <el-option label="2015-07-01 22:00" value="20150401_22" />
                <el-option label="2015-07-01 23:00" value="20150401_23" />
                <el-option label="2015-07-02 00:00" value="20150402_00" />
                <el-option label="2015-07-02 01:00" value="20150402_01" />
                <el-option label="2015-07-02 02:00" value="20150402_02" />
                <el-option label="2015-07-02 03:00" value="20150402_03" />
                <el-option label="2015-07-02 04:00" value="20150402_04" />
                <el-option label="2015-07-02 05:00" value="20150402_05" />
                <el-option label="2015-07-02 06:00" value="20150402_06" />
                <el-option label="2015-07-02 07:00" value="20150402_07" />
                <el-option label="2015-07-02 08:00" value="20150402_08" />
                <el-option label="2015-07-02 09:00" value="20150402_09" />
                <el-option label="2015-07-02 10:00" value="20150402_10" />
                <el-option label="2015-07-02 11:00" value="20150402_11" />
                <el-option label="2015-07-02 12:00" value="20150402_12" />
                <el-option label="2015-07-02 13:00" value="20150402_13" />
                <el-option label="2015-07-02 14:00" value="20150402_14" />
                <el-option label="2015-07-02 15:00" value="20150402_15" />
                <el-option label="2015-07-02 16:00" value="20150402_16" />
                <el-option label="2015-07-02 17:00" value="20150402_17" />
                <el-option label="2015-07-02 18:00" value="20150402_18" />
                <el-option label="2015-07-02 19:00" value="20150402_19" />
                <el-option label="2015-07-02 20:00" value="20150402_20" />
                <el-option label="2015-07-02 21:00" value="20150402_21" />
                <el-option label="2015-07-02 22:00" value="20150402_22" />
                <el-option label="2015-07-02 23:00" value="20150402_23" />
                <el-option label="2015-07-03 00:00" value="20150403_00" />
                <el-option label="2015-07-03 01:00" value="20150403_01" />
                <el-option label="2015-07-03 02:00" value="20150403_02" />
                <el-option label="2015-07-03 03:00" value="20150403_03" />
                <el-option label="2015-07-03 04:00" value="20150403_04" />
                <el-option label="2015-07-03 05:00" value="20150403_05" />
                <el-option label="2015-07-03 06:00" value="20150403_06" />
                <el-option label="2015-07-03 07:00" value="20150403_07" />
                <el-option label="2015-07-03 08:00" value="20150403_08" />
                <el-option label="2015-07-03 09:00" value="20150403_09" />
                <el-option label="2015-07-03 10:00" value="20150403_10" />
                <el-option label="2015-07-03 11:00" value="20150403_11" />
                <el-option label="2015-07-03 12:00" value="20150403_12" />
                <el-option label="2015-07-03 13:00" value="20150403_13" />
                <el-option label="2015-07-03 14:00" value="20150403_14" />
                <el-option label="2015-07-03 15:00" value="20150403_15" />
                <el-option label="2015-07-03 16:00" value="20150403_16" />
                <el-option label="2015-07-03 17:00" value="20150403_17" />
                <el-option label="2015-07-03 18:00" value="20150403_18" />
                <el-option label="2015-07-03 19:00" value="20150403_19" />
                <el-option label="2015-07-03 20:00" value="20150403_20" />
                <el-option label="2015-07-03 21:00" value="20150403_21" />
                <el-option label="2015-07-03 22:00" value="20150403_22" />
                <el-option label="2015-07-03 23:00" value="20150403_23" />
                <el-option label="2015-07-04 00:00" value="20150404_00" />
                <el-option label="2015-07-04 01:00" value="20150404_01" />
                <el-option label="2015-07-04 02:00" value="20150404_02" />
                <el-option label="2015-07-04 03:00" value="20150404_03" />
                <el-option label="2015-07-04 04:00" value="20150404_04" />
                <el-option label="2015-07-04 05:00" value="20150404_05" />
                <el-option label="2015-07-04 06:00" value="20150404_06" />
                <el-option label="2015-07-04 07:00" value="20150404_07" />
                <el-option label="2015-07-04 08:00" value="20150404_08" />
                <el-option label="2015-07-04 09:00" value="20150404_09" />
                <el-option label="2015-07-04 10:00" value="20150404_10" />
                <el-option label="2015-07-04 11:00" value="20150404_11" />
                <el-option label="2015-07-04 12:00" value="20150404_12" />
                <el-option label="2015-07-04 13:00" value="20150404_13" />
                <el-option label="2015-07-04 14:00" value="20150404_14" />
                <el-option label="2015-07-04 15:00" value="20150404_15" />
                <el-option label="2015-07-04 16:00" value="20150404_16" />
                <el-option label="2015-07-04 17:00" value="20150404_17" />
                <el-option label="2015-07-04 18:00" value="20150404_18" />
                <el-option label="2015-07-04 19:00" value="20150404_19" />
                <el-option label="2015-07-04 20:00" value="20150404_20" />
                <el-option label="2015-07-04 21:00" value="20150404_21" />
                <el-option label="2015-07-04 22:00" value="20150404_22" />
                <el-option label="2015-07-04 23:00" value="20150404_23" />
                <el-option label="2015-07-05 00:00" value="20150405_00" />
                <el-option label="2015-07-05 01:00" value="20150405_01" />
                <el-option label="2015-07-05 02:00" value="20150405_02" />
                <el-option label="2015-07-05 03:00" value="20150405_03" />
                <el-option label="2015-07-05 04:00" value="20150405_04" />
                <el-option label="2015-07-05 05:00" value="20150405_05" />
                <el-option label="2015-07-05 06:00" value="20150405_06" />
                <el-option label="2015-07-05 07:00" value="20150405_07" />
                <el-option label="2015-07-05 08:00" value="20150405_08" />
                <el-option label="2015-07-05 09:00" value="20150405_09" />
                <el-option label="2015-07-05 10:00" value="20150405_10" />
                <el-option label="2015-07-05 11:00" value="20150405_11" />
                <el-option label="2015-07-05 12:00" value="20150405_12" />
                <el-option label="2015-07-05 13:00" value="20150405_13" />
                <el-option label="2015-07-05 14:00" value="20150405_14" />
                <el-option label="2015-07-05 15:00" value="20150405_15" />
                <el-option label="2015-07-05 16:00" value="20150405_16" />
                <el-option label="2015-07-05 17:00" value="20150405_17" />
                <el-option label="2015-07-05 18:00" value="20150405_18" />
                <el-option label="2015-07-05 19:00" value="20150405_19" />
                <el-option label="2015-07-05 20:00" value="20150405_20" />
                <el-option label="2015-07-05 21:00" value="20150405_21" />
                <el-option label="2015-07-05 22:00" value="20150405_22" />
                <el-option label="2015-07-05 23:00" value="20150405_23" />
                <el-option label="2015-07-06 00:00" value="20150406_00" />
                <el-option label="2015-07-06 01:00" value="20150406_01" />
                <el-option label="2015-07-06 02:00" value="20150406_02" />
                <el-option label="2015-07-06 03:00" value="20150406_03" />
                <el-option label="2015-07-06 04:00" value="20150406_04" />
                <el-option label="2015-07-06 05:00" value="20150406_05" />
                <el-option label="2015-07-06 06:00" value="20150406_06" />
                <el-option label="2015-07-06 07:00" value="20150406_07" />
                <el-option label="2015-07-06 08:00" value="20150406_08" />
                <el-option label="2015-07-06 09:00" value="20150406_09" />
                <el-option label="2015-07-06 10:00" value="20150406_10" />
                <el-option label="2015-07-06 11:00" value="20150406_11" />
                <el-option label="2015-07-06 12:00" value="20150406_12" />
                <el-option label="2015-07-06 13:00" value="20150406_13" />
                <el-option label="2015-07-06 14:00" value="20150406_14" />
                <el-option label="2015-07-06 15:00" value="20150406_15" />
                <el-option label="2015-07-06 16:00" value="20150406_16" />
                <el-option label="2015-07-06 17:00" value="20150406_17" />
                <el-option label="2015-07-06 18:00" value="20150406_18" />
                <el-option label="2015-07-06 19:00" value="20150406_19" />
                <el-option label="2015-07-06 20:00" value="20150406_20" />
                <el-option label="2015-07-06 21:00" value="20150406_21" />
                <el-option label="2015-07-06 22:00" value="20150406_22" />
                <el-option label="2015-07-06 23:00" value="20150406_23" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <!-- <el-button type="primary" icon="Search" @click="handleQuery">预测</el-button> -->
              <el-button icon="Refresh" @click="resetQuery">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </transition>
    
    <el-row :gutter="20" class="mt-2">
      <el-col :span="12">
        <el-card shadow="hover" class="bg-light-blue-50">
          <template #header>
            <div class="font-medium">各个区域未来时间的流入量热力图</div>
          </template>
          <div class="h-150 bg-white rounded flex items-center justify-center p-2">
            <!-- <img src="/src/assets/images/TDRIVE_inflow_2015-02-25T07-00-00Z.svg" alt="流入量热力图" class="max-w-full max-h-full object-contain"> -->
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover" class="bg-light-blue-50">
          <template #header>
            <div class="font-medium">各个区域未来时间的流出量热力图</div>
          </template>
          <div class="h-150 bg-white rounded flex items-center justify-center p-2">
            <!-- <img src="/src/assets/images/TDRIVE_outflow_2015-02-25T07-00-00Z.svg" alt="流出量热力图" class="max-w-full max-h-full object-contain"> -->
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog v-model="dialog.visible" :title="dialog.title" destroy-on-close append-to-body width="600px">
      <el-form ref="deptFormRef" :model="form" :rules="rules" label-width="80px">
        <el-row>
          <el-col v-if="form.parentId !== 0" :span="24">
            <el-form-item label="上级部门" prop="parentId">
              <el-tree-select
                v-model="form.parentId"
                :data="deptOptions"
                :props="{ value: 'deptId', label: 'deptName', children: 'children' } as any"
                value-key="deptId"
                placeholder="选择上级部门"
                check-strictly
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="部门名称" prop="deptName">
              <el-input v-model="form.deptName" placeholder="请输入部门名称" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="类别编码" prop="deptCategory">
              <el-input v-model="form.deptCategory" placeholder="请输入类别编码" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="显示排序" prop="orderNum">
              <el-input-number v-model="form.orderNum" controls-position="right" :min="0" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="负责人" prop="leader">
              <el-select v-model="form.leader" placeholder="请选择负责人">
                <el-option v-for="item in deptUserList" :key="item.userId" :label="item.userName" :value="item.userId" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系电话" prop="phone">
              <el-input v-model="form.phone" placeholder="请输入联系电话" maxlength="11" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="form.email" placeholder="请输入邮箱" maxlength="50" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="部门状态">
              <el-radio-group v-model="form.status">
                <el-radio v-for="dict in sys_normal_disable" :key="dict.value" :value="dict.value">{{ dict.label }}</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="Dept" lang="ts">
import { listDept, getDept, delDept, addDept, updateDept, listDeptExcludeChild } from '@/api/system/dept';
import { DeptForm, DeptQuery, DeptVO } from '@/api/system/dept/types';
import { UserVO } from '@/api/system/user/types';
import { listUserByDeptId } from '@/api/system/user';

interface DeptOptionsType {
  deptId: number | string;
  deptName: string;
  children: DeptOptionsType[];
}

const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const { sys_normal_disable } = toRefs<any>(proxy?.useDict('sys_normal_disable'));

const deptList = ref<DeptVO[]>([]);
const loading = ref(true);
const showSearch = ref(true);
const deptOptions = ref<DeptOptionsType[]>([]);
const isExpandAll = ref(true);
const deptUserList = ref<UserVO[]>([]);

const dialog = reactive<DialogOption>({
  visible: false,
  title: ''
});

const deptTableRef = ref<ElTableInstance>();
const queryFormRef = ref<ElFormInstance>();
const deptFormRef = ref<ElFormInstance>();

const initFormData: DeptForm = {
  deptId: undefined,
  parentId: undefined,
  deptName: undefined,
  deptCategory: undefined,
  orderNum: 0,
  leader: undefined,
  phone: undefined,
  email: undefined,
  status: '0'
};
const initData: PageData<DeptForm, DeptQuery> = {
  form: { ...initFormData },
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    deptName: undefined,
    deptCategory: undefined,
    status: undefined
  },
  rules: {
    parentId: [{ required: true, message: '上级部门不能为空', trigger: 'blur' }],
    deptName: [{ required: true, message: '部门名称不能为空', trigger: 'blur' }],
    orderNum: [{ required: true, message: '显示排序不能为空', trigger: 'blur' }],
    email: [{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }],
    phone: [{ pattern: /^1[3456789][0-9]\d{8}$/, message: '请输入正确的手机号码', trigger: 'blur' }]
  }
};
const data = reactive<PageData<DeptForm, DeptQuery>>(initData);

const { queryParams, form, rules } = toRefs<PageData<DeptForm, DeptQuery>>(data);

/** 查询菜单列表 */
const getList = async () => {
  loading.value = true;
  const res = await listDept(queryParams.value);
  const data = proxy?.handleTree<DeptVO>(res.data, 'deptId');
  if (data) {
    deptList.value = data;
  }
  loading.value = false;
};

/** 查询当前部门的所有用户 */
async function getDeptAllUser(deptId: any) {
  if (deptId !== null && deptId !== '' && deptId !== undefined) {
    const res = await listUserByDeptId(deptId);
    deptUserList.value = res.data;
  }
}

/** 取消按钮 */
const cancel = () => {
  reset();
  dialog.visible = false;
};
/** 表单重置 */
const reset = () => {
  form.value = { ...initFormData };
  deptFormRef.value?.resetFields();
};

/** 搜索按钮操作 */
const handleQuery = () => {
  getList();
};
/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value?.resetFields();
  handleQuery();
};

/** 展开/折叠操作 */
const handleToggleExpandAll = () => {
  isExpandAll.value = !isExpandAll.value;
  toggleExpandAll(deptList.value, isExpandAll.value);
};
/** 展开/折叠所有 */
const toggleExpandAll = (data: DeptVO[], status: boolean) => {
  data.forEach((item) => {
    deptTableRef.value?.toggleRowExpansion(item, status);
    if (item.children && item.children.length > 0) toggleExpandAll(item.children, status);
  });
};

/** 新增按钮操作 */
const handleAdd = async (row?: DeptVO) => {
  reset();
  const res = await listDept();
  const data = proxy?.handleTree<DeptOptionsType>(res.data, 'deptId');
  if (data) {
    deptOptions.value = data;
    if (row && row.deptId) {
      form.value.parentId = row?.deptId;
    }
    dialog.visible = true;
    dialog.title = '添加部门';
  }
};

/** 修改按钮操作 */
const handleUpdate = async (row: DeptVO) => {
  reset();
  //查询当前部门所有用户
  getDeptAllUser(row.deptId);
  const res = await getDept(row.deptId);
  form.value = res.data;
  const response = await listDeptExcludeChild(row.deptId);
  const data = proxy?.handleTree<DeptOptionsType>(response.data, 'deptId');
  if (data) {
    deptOptions.value = data;
    if (data.length === 0) {
      const noResultsOptions: DeptOptionsType = {
        deptId: res.data.parentId,
        deptName: res.data.parentName,
        children: []
      };
      deptOptions.value.push(noResultsOptions);
    }
  }
  dialog.visible = true;
  dialog.title = '修改部门';
};
/** 提交按钮 */
const submitForm = () => {
  deptFormRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      form.value.deptId ? await updateDept(form.value) : await addDept(form.value);
      proxy?.$modal.msgSuccess('操作成功');
      dialog.visible = false;
      await getList();
    }
  });
};
/** 删除按钮操作 */
const handleDelete = async (row: DeptVO) => {
  await proxy?.$modal.confirm('是否确认删除名称为"' + row.deptName + '"的数据项?');
  await delDept(row.deptId);
  await getList();
  proxy?.$modal.msgSuccess('删除成功');
};

onMounted(() => {
  getList();
});
</script>
