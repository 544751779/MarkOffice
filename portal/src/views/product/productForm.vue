<template>
<el-dialog :title="title" width="630px" :visible.sync="dialogVisible" :before-close="handleClose" class="b-dialog">

    <el-form :model="form" :rules="rules" ref="form" label-position="top"   class="dialog-form"  label-suffix="" size="mini">

        <el-row>

                                <el-col :span="12" v-if="chechFormDisplay('1','1')">
                    <el-form-item label="产品名称" prop="name">
                        <el-input type="text" v-model="form.name" class="fw" clearable ></el-input>
                    </el-form-item>
                </el-col>
            

                                <el-col :span="12" v-if="chechFormDisplay('1','1')">
                    <el-form-item label="产品单位" prop="unit">
                        <el-input type="text" v-model="form.unit" class="fw" clearable ></el-input>
                    </el-form-item>
                </el-col>
            

                                <el-col :span="12" v-if="chechFormDisplay('1','1')">
                    <el-form-item label="产品编码" prop="code">
                        <el-input type="text" v-model="form.code" class="fw" clearable ></el-input>
                    </el-form-item>
                </el-col>
            

                                <el-col :span="12" v-if="chechFormDisplay('1','1')">
                    <el-form-item label="价格" prop="price">
                        <el-input type="text" v-model="form.price" class="fw" clearable ></el-input>
                    </el-form-item>
                </el-col>
            

                                <el-col :span="12"  v-if="chechFormDisplay('1','1')" >
                    <el-form-item label="产品类型" prop="type"   >
                        <el-select v-model="form.type" placeholder="请选择">
                            <el-option v-for=" (vo,i) in $store.state.dic.user " :label="vo.name" :value="vo.code" :key="i"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                

                                <el-col :span="12" v-if="chechFormDisplay('1','1')">
                    <el-form-item label="产品类型名称" prop="typename">
                        <el-input type="text" v-model="form.typename" class="fw" clearable ></el-input>
                    </el-form-item>
                </el-col>
            

                                <el-col :span="12" v-if="chechFormDisplay('1','1')">
                    <el-form-item label="启用" prop="enable">
                        <el-input type="text" v-model="form.enable" class="fw" clearable ></el-input>
                    </el-form-item>
                </el-col>
            

                                <el-col :span="12" v-if="chechFormDisplay('1','1')">
                    <el-form-item label="描述" prop="desc">
                        <el-input type="text" v-model="form.desc" class="fw" clearable ></el-input>
                    </el-form-item>
                </el-col>
            

                                                <el-col :span="12" v-if="chechFormDisplay('1','1')">
                    <el-form-item label="创建人" prop="create_user_id">
                        <el-input type="text" v-model="form.create_user_id" class="fw" clearable ></el-input>
                    </el-form-item>
                </el-col>
            

                        

        </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose" >关 闭</el-button>
        <el-button @click="resetForm('form')">清 空</el-button>
        <el-button type="primary"  @click="submitForm('form')">保 存</el-button>
    </span>

</el-dialog>
</template>


<script>


// import {info} from './productModel'


const field =  {
    "id": null,
    "name": null,
    "unit": null,
    "code": null,
    "price": null,
    "type": null,
    "typename": null,
    "enable": null,
    "desc": null,
    "create_time": null,
    "update_time": null,
    "create_user_id": null
} 

const models={
    code:"product",
    name:"产品",   
    is_create:Number("1"),   
    is_update:Number("1"),
    is_detail:Number("1"),
    detailTitle: "产品详情",
    createTitle: "新增产品",
    updateTitle: "修改产品",
}

// console.log(util)

// const rules = 



export default {
    props: {
        map: {
            //为表格的一行数据。用于对该行进行处理
            type: Object
        },
        oper: {
            type: String,
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个，根据该字段判断进行何种操作
                return ['create', 'update'].indexOf(value) !== -1
            }
        },
        visible: {
            //该字段控制弹出层是否显示
            type: Boolean
        }
    },
    data() {
        return {
            dialogVisible: this.visible,
            form: this.util.copy(field),
            title: '',
            rules:  {} 
            // {
            //     name: [
            //         // type:'number',
            //         { required: true, message: '请输入提现金额', trigger: 'blur' },
            //         { type:this.util, message: '请输入正确的提现金额', trigger: 'blur' }
            //     ]
            // },
        };
    },
    methods: {
        handleClose(done) {
            this.dialogVisible = false
            this.$emit('emitComponents', {
                show: false,
                name: 'indexForm'
            })
        },
        async submitForm(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    let res = await this.ajax.baseApi(models.code,this.oper, this.form)
                    switch (res.meta.result.toString()) {
                        case '1':
                            this.$message.success("操作成功");
                            this.handleClose()
                            break;
                        case '0':
                            this.$message.error("数据没有被修改");
                            break;
                        default:
                            this.$message.error("操作失败");
                            break;
                    }
                } else {
                    this.$message.error('请完善表单信息');
                }
            }); 
        },
        chechFormDisplay(is_reveal_create,is_reveal_update){
            if(this.oper=='create' && is_reveal_create=='1' ){
                return true
            }else if(this.oper=='update' && is_reveal_update=='1' ){
                return true
            }else{
                return false
            }

        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        async init() {
            if (!this.visible) {
                return false;
            }
            let res 
            switch (this.oper) {
                case 'create':
                    this.title = models.createTitle 
                    this.form = this.util.copy(field)
                    break; 
                case 'update':
                    this.title = models.updateTitle 
                    res = await this.ajax.baseApi(models.code,'select', {
                        id: this.map.id
                    })
                    this.form = res.data[0]
                    break;
                default:
                    break;
            }
        }
    },

    async created() {
        this.init()
    },
     watch: {
        visible() {
            this.dialogVisible = this.visible
        },
        map: {
            async handler(newValue, oldValue) {
                if(this.visible){
                   await this.ajax.getDicByName('user')
                }
                this.init()
            },
            deep: true
        }
    }
};
</script>
