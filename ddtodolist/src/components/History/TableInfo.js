const createData_done_project = (
  name,
  cost,
  status,
  audit_cost,
  startDate,
  endDate,
  manager
) => {
  return { name, cost, status, audit_cost, startDate, endDate, manager };
};
const TableInfo = {
  done_project: {
    titile: "已完成工程项目",
    columns: [
      {
        id: "startDate",
        label: "创建时间",
        minWidth: 170,
        format: value => value.toLocaleString()
      },
      { id: "name", label: "名称", minWidth: 170 },
      { id: "status", label: "状态", minWidth: 170 },
      {
        id: "cost",
        label: "造价",
        minWidth: 170,
        format: value => value.toLocaleString()
      },

      {
        id: "audit_cost",
        label: "审计决算",
        minwidth: 400,
        format: value => value.toLocaleString()
      },
      {
        id: "endDate",
        label: "竣工时间",
        minWidth: 170,
        format: value => value.toLocaleString()
      },
      { id: "manager", label: "项目经理", minWidth: 170 }
    ],
    rows: [
      createData_done_project(
        "工程A",
        "20000",
        "已竣工",
        "19800",
        "2019/10/20",
        "2020/1/10",
        "王晓军"
      ),
      createData_done_project(
        "工程B",
        "40000",
        "已竣工",
        "38990",
        "2018/12/2",
        "2019/4/20",
        "王晓军"
      )
    ]
  },
  done_task: {
    titile: "已完成个人任务"
  },
  done_record: {
    titile: "已完成个人备忘录"
  }
};
export default TableInfo;
