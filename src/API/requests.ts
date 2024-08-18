const requests: {
    list: string
    insertAll: string
    insert : string
    delete : string

    Datalist : string
    DataDATElist : string
    DatainsertAll : string
    Datainsert : string
    DataMonth : string
    DataPeriod : string
} = {
    list: "Product/list",
    insertAll: "Product/insertAll",
    insert : "Product/insert",
    delete : "Product/Delete",

    Datalist : "ProductData/list",
    DataDATElist : "ProductData/datelist",
    DatainsertAll : "ProductData/insertAll",
    Datainsert : "ProductData/insert",
    DataMonth : "ProductData/monthlist",
    DataPeriod : "ProductData/periodlist"
}

export default requests;