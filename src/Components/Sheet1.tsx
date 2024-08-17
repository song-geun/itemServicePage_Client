import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../API/store";
import { initD, inp, insertsheet, inupsheet, Pdata, setD } from "../API/Product";

const Sheet1 : any =((e:any) =>{
    const dispath = useDispatch<AppDispatch>();
    const setting: any = useSelector((state: RootState) => state.Product);
    const sheet: any = useSelector((state: RootState) => state.PAGEController);
    
    const input1: inp = {
        p_id: 1,
        col: "quantity",
        data: "1",
    };

    const handleSheet1Click = () => {
        const today = new Date();

        const year = today.getFullYear();
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const day = ('0' + today.getDate()).slice(-2);
        const date = year + month + day;
        const n = setting.data.length;
        const arr = [];
        for (let i = 0; i < n; i++) {
            const d1: Pdata = {
                prod_data_id: 0,
                p_id: setting.data[i].p_id,
                p_name: setting.data[i].p_name,
                value: setting.data[i].value,
                p_quantity: setting.data[i].quantity,
                date: date  //긴급변경
            };
            arr.push(d1);
        }
        console.log(arr);
        dispath(insertsheet(arr));
    }

    const handleSheet1init = () => {
        dispath(initD());
    }

    let sum: number = 0;
    setting.data.map((data: any) => (
        sum += (Number(data.quantity) * Number(data.value))));

    return (
        <div>
                <table>
                    <thead>
                        <tr>
                            <th className="unused">이름</th>
                            <th className="unused">가격</th>
                            <th className="unused">수량</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            setting.data.map((data: any) => (
                                <tr key={data.p_id}>
                                    <td>{data.p_name}</td>
                                    <td>{data.value}</td>
                                    <td><input onBlur={() => { dispath(inupsheet(setting)); }} value={data.quantity} onChange={(e: any) => {
                                        const input: inp = {
                                            p_id: data.p_id,
                                            col: "quantity",
                                            data: e.target.value,
                                        };
                                        dispath(setD(input));
                                    }} /></td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td><button className="text-2xl font-bold text-green-700" onClick={(e) => { handleSheet1Click() }}>입력</button></td>
                            <td className="text-2xl font-bold text-right"><button onClick={(e) => { handleSheet1init() }}>초기화</button>총 합산 :</td>
                            <td className="text-2xl font-bold text-left">{sum}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    );
})

export default Sheet1;