<template>
  <div class="p-2">
    <transition :enter-active-class="proxy?.animate.searchAnimate.enter" :leave-active-class="proxy?.animate.searchAnimate.leave">
      <div class="search" v-show="showSearch">
        <el-form :model="queryParams" ref="queryFormRef" :inline="true" label-width="75px">
          <el-form-item label="模型名称" prop="name" label-width="100px">
            <el-input v-model="queryParams.name" placeholder="请输入模型名称" clearable style="width: 240px" @keyup.enter="handleQuery" />
          </el-form-item>
          <el-form-item label="创建时间">
            <el-date-picker
                v-model="dateRange"
                value-format="YYYY-MM-DD"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
            <el-button icon="Refresh" @click="resetQuery">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>

    <el-card shadow="never">
      <template #header>
        <el-row :gutter="10" class="mb8">
          <el-col :span="1.5">
            <el-button type="success" plain icon="Plus" @click="handleAdd">新增模型</el-button>
          </el-col>
          <!-- <el-col :span="1.5">
            <el-button type="success" plain icon="Edit" :disabled="single" @click="handleUpdate()" v-hasPermi="['aiplat:model:edit']">修改</el-button>
          </el-col> -->
          <!-- <el-col :span="1.5">
            <el-button type="danger" plain icon="Delete" :disabled="multiple" @click="handleDelete()" v-hasPermi="['aiplat:model:remove']">删除</el-button>
          </el-col> -->
          <!-- <el-col :span="1.5">
            <el-button type="warning" plain icon="Download" @click="handleExport" v-hasPermi="['aiplat:model:export']">导出</el-button>
          </el-col> -->
          <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
        </el-row>
      </template>

      <el-table v-loading="loading" :data="modelList" @selection-change="handleSelectionChange">
        <!-- <el-table-column type="selection" width="55" align="center" /> -->
        <!-- <el-table-column label="模型id" align="center" prop="id" v-if="true" /> -->
        <el-table-column label="模型名称" align="center" prop="name" />
        <!-- <el-table-column label="模型列表" align="center" prop="model" /> -->
        <!-- <el-table-column label="描述" align="center" prop="description" width="300" header-align="center" show-overflow-tooltip>
        </el-table-column> -->
        <el-table-column label="描述" align="center" prop="description" width="300" header-align="center" >
          <template #default="scope">
            <el-tooltip effect="dark" placement="top" class="item" >
              <div class="descripsion">                  
                  <slot name="content">{{ scope.row.description }}</slot>  
              </div>
              <template #content>  
                <div class="tooltip-content">{{ scope.row.description }}</div>
              </template>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" align="center" prop="createTime">
          <template #default="scope">
            <span>{{ parseTime(scope.row.createTime, '{y}-{m}-{d} {h}:{m}:{s}') }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
          <template #default="scope">
            <el-tooltip content="编辑" placement="top">
              <el-button link type="primary" icon="Edit" @click="handleEdit(scope.row)"></el-button>
            </el-tooltip>
            <el-tooltip content="训练" placement="top">
              <el-button link type="primary" icon="RefreshLeft" @click="handleTrain(scope.row)"></el-button>
            </el-tooltip>
            <el-tooltip content="删除" placement="top">
              <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)"></el-button>
            </el-tooltip>
            <el-tooltip content="可视化" placement="top">
              <el-button link type="primary" icon="Eye" @click="showModel(scope.row)"></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <pagination
          v-show="total"
          :total="total"
          v-model:page="queryParams.pageNum"
          v-model:limit="queryParams.pageSize"
          @pagination="getList"
      />
    </el-card>
    <!-- 添加或修改模型对话框 -->
    <el-dialog :close-on-click-modal="false" :title="dialog.title" v-model="dialog.visible" width="500px" append-to-body>
      <el-form ref="modelFormRef" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="模型名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入模型名称（25字以内）" />
        </el-form-item>
        <el-form-item label="模型文件" prop="model">
          
          <!-- <el-upload
            v-model:file-list="form.model"
            class="upload-demo"
            :before-upload="beforeUpload"
            :on-change="handleChange"
          >
          <el-button type="primary">Click to upload</el-button>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png files with a size less than 500kb
            </div>
          </template>
          </el-upload> -->

          <file-upload v-model="form.model" :fileType = "fileType" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
            <el-input v-model="form.description" type="textarea" placeholder="请输入内容（127个字以内）" :rows="6" resize="none"/>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button :loading="buttonLoading" type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </template>
    </el-dialog>

    <el-dialog :close-on-click-modal="false" :title="dialogModel.title" v-model="dialogModel.visible" width="800px" append-to-body>
      <el-divider></el-divider>
      <div class="demo-image__lazy">
        <div v-html="dialogModel.content"></div>        
      </div>
    </el-dialog>

    <!-- 编辑模型对话框 -->
    <el-dialog :close-on-click-modal="false" :title="dialogEdit.title" v-model="dialogEdit.visible" width="500px" append-to-body>
      <el-form ref="editFormRef" :model="form" :rules="editRules" label-width="100px">
        <el-form-item label="模型名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入模型名称（25字以内）" disabled />
        </el-form-item>
        <el-form-item label="描述" prop="description">
            <el-input v-model="form.description" type="textarea" placeholder="请输入内容（127个字以内）" :rows="3" resize="none"/>
        </el-form-item>
        <el-form-item label="参数配置" prop="parameters">
            <el-input v-model="form.parameters" type="textarea" placeholder="请输入参数配置（JSON格式）" :rows="4" resize="none"/>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button :loading="buttonLoading" type="primary" @click="submitEditForm">确 定</el-button>
          <el-button @click="cancelEdit">取 消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup name="Model" lang="ts">
import { listAlgorithm, getAlgorithm, delAlgorithm, addAlgorithm, updateAlgorithm, uploadAlgorithmFile } from '@/api/aiplat/algorithm';
import { AlgorithmVO, AlgorithmQuery, AlgorithmForm, DialogAlgorithmOption } from '@/api/aiplat/algorithm/types';
import type { UploadProps, UploadUserFile } from 'element-plus'
const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const modelList = ref<AlgorithmVO[]>([]);
const buttonLoading = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref<Array<string | number>>([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);

const queryFormRef = ref<ElFormInstance>();
const modelFormRef = ref<ElFormInstance>();

const dateRange = ref<[DateModelType, DateModelType]>(['', '']);
const fileType = ref<string[]>(['py'])
const dialog = reactive<DialogOption>({
  visible: false,
  title: ''
});

const dialogModel = reactive<DialogAlgorithmOption>({
  visible: false,
  title: '模型可视化',
  content: '',
});

const dialogEdit = reactive<DialogOption>({
  visible: false,
  title: '编辑模型'
});

const editFormRef = ref<ElFormInstance>();

const notnull = /\s*\S+?/;

const initFormData: AlgorithmForm = {
  id: undefined,
  name: undefined,
  algorithm: undefined,
  description: undefined,
  parameters: undefined,
}
const data = reactive<PageData<AlgorithmForm, AlgorithmQuery>>({
  form: {...initFormData},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    name: undefined,
    createTime: undefined,
    params: {
    }
  },
  rules: {
    id: [
      { required: true, message: "模型id不能为空", trigger: "blur" }
    ],
    name: [
      { required: true, message: "模型名称不能为空", trigger: "blur" },
      { pattern: notnull, message: '请输入非空字符', trigger: 'blur' },
      { max: 25, message: "字数不能超过25", trigger: "blur" },
    ],
    algorithm: [
      { required: true, message: "请上传文件", trigger: "blur" }
    ],
    description: [ 
      { max: 255, message: "字数不能超过255", trigger: "blur" },
    ]
  }
});

// 编辑表单规则
const editRules = {
  name: [
    { required: true, message: "模型名称不能为空", trigger: "blur" },
    { pattern: notnull, message: '请输入非空字符', trigger: 'blur' },
    { max: 25, message: "字数不能超过25", trigger: "blur" },
  ],
  description: [ 
    { max: 255, message: "字数不能超过255", trigger: "blur" },
  ],
  parameters: [ 
    { max: 1000, message: "字数不能超过1000", trigger: "blur" },
  ]
};

const { queryParams, form, rules } = toRefs(data);

/** 查询模型列表 */
const getList = async () => {
  loading.value = true;
  const res = await listAlgorithm(proxy?.addDateRange(queryParams.value, dateRange.value));
  modelList.value = res.rows;
  total.value = res.total;
  loading.value = false;
}

/** 取消按钮 */
const cancel = () => {
  reset();
  dialog.visible = false;
}

/** 取消编辑按钮 */
const cancelEdit = () => {
  reset();
  dialogEdit.visible = false;
}

/** 表单重置 */
const reset = () => {
  form.value = {...initFormData};
  modelFormRef.value?.resetFields();
  editFormRef.value?.resetFields();
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.value.pageNum = 1;
  console.log(queryParams.value)
  getList();
}

/** 重置按钮操作 */
const resetQuery = () => {
  dateRange.value = ['', ''];
  queryFormRef.value?.resetFields();
  handleQuery();
}

/** 多选框选中数据 */
const handleSelectionChange = (selection: AlgorithmVO[]) => {
  ids.value = selection.map(item => item.id);
  single.value = selection.length != 1;
  multiple.value = !selection.length;
}

/** 新增按钮操作 */
const handleAdd = () => {
  reset();
  dialog.visible = true;
  dialog.title = "添加模型";
}

/** 编辑按钮操作 */
const handleEdit = async (row?: AlgorithmVO) => {
  reset();
  const _id = row?.id || ids.value[0]
  const res = await getAlgorithm(_id);
  Object.assign(form.value, res.data);
  dialogEdit.visible = true;
  dialogEdit.title = "编辑模型";
}

/** 修改按钮操作 */
const handleUpdate = async (row?: AlgorithmVO) => {
  reset();
  const _id = row?.id || ids.value[0]
  const res = await getAlgorithm(_id);
  Object.assign(form.value, res.data);
  dialog.visible = true;
  dialog.title = "修改模型";
}

/** 提交按钮 */
const submitForm = () => {
  modelFormRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      buttonLoading.value = true;
      console.log(form);
      if (form.value.id) {
        await updateAlgorithm(form.value).finally(() =>  buttonLoading.value = false);
      } else {
        await addAlgorithm(form.value).finally(() =>  buttonLoading.value = false);
      }
      proxy?.$modal.msgSuccess("修改成功");
      dialog.visible = false;
      await getList();
    }
  });
}

/** 提交编辑表单 */
const submitEditForm = () => {
  editFormRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      buttonLoading.value = true;
      console.log(form);
      await updateAlgorithm(form.value).finally(() =>  buttonLoading.value = false);
      proxy?.$modal.msgSuccess("编辑成功");
      dialogEdit.visible = false;
      await getList();
    }
  });
}

/** 删除按钮操作 */
const handleDelete = async (row?: AlgorithmVO) => {
  const _ids = row?.id || ids.value;
  await proxy?.$modal.confirm('删除前请确保没有任务使用该模型，是否确认删除？').finally(() => loading.value = false);
  await delAlgorithm(_ids);
  proxy?.$modal.msgSuccess("删除成功");
  await getList();
}

/** 导出按钮操作 */
const handleExport = () => {
  proxy?.download('aiplat/model/export', {
    ...queryParams.value
  }, `model_${new Date().getTime()}.xlsx`)
}

/** 展示模型 */
const showModel = async (row? : AlgorithmVO) => {
  dialogModel.visible = true;
  console.log(dialogModel.content)
  dialogModel.content = row?.algorithmInfo;
}

/** 训练按钮操作 */
const handleTrain = async (row?: AlgorithmVO) => {
  // 这里可以添加训练逻辑，比如打开训练对话框或直接执行训练
  proxy?.$modal.msgSuccess(`开始训练模型：${row?.name}`);
  // 模拟训练过程
  setTimeout(() => {
    proxy?.$modal.msgSuccess(`模型 ${row?.name} 训练完成！`);
  }, 2000);
}

// /** 上传模型 */
// const beforeUpload = async (file: any) => {
//   if(file.type=='audio/mpeg'){
//     uploadAlgorithmFile(file)
//       .then(response=>{
//         if(response == "文件上传成功！"){
//           ElMessage({
//             message: response,
//             type: 'success'
//           })
//         }else{
//           ElMessage({
//             message: response+'文件名重复',
//             type: 'error'
//           })
//         }
//       })
//   }else{
//     alert("仅可上传mp3格式文件,文件类型错误提示!")
//   }
// }

onMounted(() => {
  getList();
});
</script>

<style scoped>
.demo-image__lazy {
  height: 600px;
  overflow-y: auto;
}

</style>