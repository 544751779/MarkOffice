<template>
    <el-card shadow="always" class="maincard">
        <el-row>
            <el-col :span="24" class="breadcrumbgroup">
                <el-col :span="12">
                    <!-- <h2 class="commontit">  测试管理 </h2> -->
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>联系人</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>

                <el-col :span="12" class="serachgroup">
                    <el-select placeholder="请选择" v-model="selectItem.status" size="mini" clearable>
                        <el-option :key="1" label="启用" value="1">启用</el-option>
                        <el-option :key="2" label="禁用" value="2">禁用</el-option>
                    </el-select>
                    <el-input size="mini" placeholder="请输入内容" v-model="selectItem.name" clearable></el-input>
                    <el-button size="mini" type="primary" @click="init">搜索</el-button>

                    <el-button type="text" icon="el-icon-plus" size="medium"  @click="createRow()" >新建联系人 </el-button>
                </el-col>

            </el-col>
            <el-col :span="24">
                <el-table :data="list.row" border  >
                                                 
                                                                                                     
                    <el-table-column label-class-name='22222222222' width="" min-width=""   v-if=" '1'=='1' "  prop="customer_id" label="客户ID"  >

                    <template slot-scope="scope">
                    {{   util.formatterDic( 'user', scope.row.customer_id )   }}
                    </template>


                    </el-table-column>
                                                     
                                                                                                     
                    <el-table-column label-class-name='22222222222' width="" min-width=""   v-if=" '1'=='1' "  prop="name" label="姓名"  >

                    <template slot-scope="scope">
                    {{  scope.row.name }}
                    </template>


                    </el-table-column>
                                                     
                                                                                                     
                    <el-table-column label-class-name='22222222222' width="" min-width=""   v-if=" '1'=='1' "  prop="mobile" label="手机"  >

                    <template slot-scope="scope">
                    {{  scope.row.mobile }}
                    </template>


                    </el-table-column>
                                                     
                                                                                                     
                    <el-table-column label-class-name='22222222222' width="" min-width=""   v-if=" '1'=='1' "  prop="telephone" label="电话"  >

                    <template slot-scope="scope">
                    {{  scope.row.telephone }}
                    </template>


                    </el-table-column>
                                                     
                                                                                                     
                    <el-table-column label-class-name='22222222222' width="" min-width=""   v-if=" '1'=='1' "  prop="qq" label="qq"  >

                    <template slot-scope="scope">
                    {{  scope.row.qq }}
                    </template>


                    </el-table-column>
                                                     
                                                                                                     
                    <el-table-column label-class-name='22222222222' width="" min-width=""   v-if=" '1'=='1' "  prop="wx" label="微信"  >

                    <template slot-scope="scope">
                    {{  scope.row.wx }}
                    </template>


                    </el-table-column>
                                                     
                                                                                                     
                    <el-table-column label-class-name='22222222222' width="" min-width=""   v-if=" '1'=='1' "  prop="fax" label="传真"  >

                    <template slot-scope="scope">
                    {{  scope.row.fax }}
                    </template>


                    </el-table-column>
                                                     
                                                                                                     
                    <el-table-column label-class-name='22222222222' width="" min-width=""   v-if=" '1'=='1' "  prop="email" label="电子邮箱"  >

                    <template slot-scope="scope">
                    {{  scope.row.email }}
                    </template>


                    </el-table-column>
                                                     
                                                                                                     
                    <el-table-column label-class-name='22222222222' width="" min-width=""   v-if=" '1'=='1' "  prop="decision" label="是否关键决策人"  >

                    <template slot-scope="scope">
                    {{  scope.row.decision }}
                    </template>


                    </el-table-column>
                                                     
                                                                                                     
                    <el-table-column label-class-name='22222222222' width="" min-width=""   v-if=" '1'=='1' "  prop="depment" label="部门"  >

                    <template slot-scope="scope">
                    {{  scope.row.depment }}
                    </template>


                    </el-table-column>
                                                     
                                                                                                     
                    <el-table-column label-class-name='22222222222' width="" min-width=""   v-if=" '1'=='1' "  prop="post" label="职务"  >

                    <template slot-scope="scope">
                    {{  scope.row.post }}
                    </template>


                    </el-table-column>
                                                     
                                                                                                     
                    <el-table-column label-class-name='22222222222' width="" min-width=""   v-if=" '1'=='1' "  prop="sex" label="性别"  >

                    <template slot-scope="scope">
                    {{  scope.row.sex }}
                    </template>


                    </el-table-column>
                                                     
                                                                                                     
                    <el-table-column label-class-name='22222222222' width="" min-width=""   v-if=" '1'=='1' "  prop="address" label="地址"  >

                    <template slot-scope="scope">
                    {{  scope.row.address }}
                    </template>


                    </el-table-column>
                                                     
                                                                                                     
                    <el-table-column label-class-name='22222222222' width="" min-width=""   v-if=" '1'=='1' "  prop="desc" label="备注"  >

                    <template slot-scope="scope">
                    {{  scope.row.desc }}
                    </template>


                    </el-table-column>
                                                     
                                                 
                                                 
                                                                                                     
                    <el-table-column label-class-name='22222222222' width="" min-width=""   v-if=" '1'=='1' "  prop="next_time" label="下次联系时间"  >

                    <template slot-scope="scope">
                    {{  scope.row.next_time }}
                    </template>


                    </el-table-column>
                                                     
                                                 
                                                 
                             

                    <el-table-column fixed="right" width="120" label="操作" v-if="models.is_update==1 || models.is_detail ==1 || models.is_delete == 1  ">
                        <template slot-scope="scope">
                      
                            <el-button v-if="models.is_update>0" @click.native.prevent="updateRow(scope.row)" type="text" size="small"> 编辑 </el-button>
                            
                            <el-button v-if="models.is_detail>0" @click.native.prevent="detailRow(scope.row)" type="text" size="small"> 详情 </el-button>
                            
                            <el-button v-if="models.is_delete>0" @click.native.prevent="deleteRow(scope.row)" type="text" size="small"> 删除 </el-button>
                            
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
            <el-col :span="24" class="pagegroup">
                <el-col :span="12">
                    <el-button v-if="models.is_create>0" size="mini" type="primary" icon="el-icon-plus" @click="createRow()">添加</el-button>
                    <span> </span>
                </el-col>
                <el-col :span="12" class="paginationgroup">
                    <el-pagination size="mini" @current-change="init" :current-page.sync="pagination.page" @size-change="pageSizeChange" :page-size.sync="pagination.limit" layout="total,prev, pager, next, jumper, sizes" :total="list.total"></el-pagination>
                </el-col>
            </el-col>
        </el-row>
                <indexForm :oper="indexForm.oper" :visible="indexForm.visible" :map="indexForm.map" @emitComponents="emitComponents"></indexForm>
                <indexDetail :oper="indexDetail.oper" :visible="indexDetail.visible" :map="indexDetail.map" @emitComponents="emitComponents"></indexDetail>
            </el-card>
</template>


<script>

let component

import indexForm from "./contactsForm.vue"; 
import indexDetail from "./contactsDetail.vue";



const models={
    code:"contacts",
    name:"联系人",   
    is_create:Number("1"),   
    is_update:Number("1"),
    is_detail:Number("1"),
    is_delete:Number("1"),
}



console.log(models)

let selectItem = {
    
    limit: 0,
    page: 0,
}



export default {
        components: {
                        indexForm: indexForm,
                        indexDetail: indexDetail,
                    },
        // components:component,
    data() {
        return {
            models:models,
            indexForm: {
                visible: false,
                map: {}
            },
            indexDetail: {
                visible: false,
                map: {}
            },
            pagination: {
                limit: this.$store.state.pagination.pagerow,
                page: this.$store.state.pagination.pageno
            },
            selectItem: this.util.copy(selectItem),
            list: {
                row: [],
                total: 0
            }
        }
    },
    methods: {
        async deleteRow(row) {
            this.$confirm("此操作将永久删除该条数据, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(async () => {
                let res = await this.ajax.baseApi(models.code,"delete", {
                    id: row.id
                });
            if (res.meta.result) {
                this.$message.success("操作成功");
                this.init();
            } else {
                this.$message.error(res.errors.info);
            }
            });
        },
        async updateRow(row) {
            this.indexForm.visible = true;
            this.indexForm.map = row;
            this.indexForm.oper = 'update';
        },
        async detailRow(row) {
            this.indexDetail.visible = true;
            this.indexDetail.map = row;
            this.indexDetail.oper = 'detail';
        },
        async createRow() {
            this.indexForm.visible = true;
            this.indexForm.map = {};
            this.indexForm.oper = 'create';
        },
        indexForm_visible(oper, row) {
            this.indexForm.visible = true;
            this.indexForm.map = {};
        },
        emitComponents(n) {
            this[n.name].visible = false;
            this[n.name].map= {};
            this.init();
        },
        pageSizeChange(n) {
            this.pagination.pagerow = n;
            this.init();
        },
        async init() {
            let selectItem = this.getSelectItem();
            if (!selectItem) {
                return false;
            }
            let res = await this.ajax.baseApi(models.code,"select", selectItem);
            if (res.meta.result) {
                this.list.row = res.data;
                this.list.total = res.meta.total;
            } else {
                this.$message.error(res.errors.info);
            }
        },
        getSelectItem() {
            let selectItem = this.selectItem
            selectItem.limit = this.pagination.limit
            selectItem.page = this.pagination.page
            return selectItem;
        }
    },
    async created() {
        await this.ajax.getDicByName('user')
        this.init();
    },

};
</script>
