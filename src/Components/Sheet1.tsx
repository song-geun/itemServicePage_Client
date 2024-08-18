import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../API/store";
import { initD, inp, insertsheet, inupsheet, Pdata, setD } from "../API/Product";
import { setSheet1key, setSheet3input } from "../API/PAGEController";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Sheet1: any = ((e: any) => {
    const dispath = useDispatch<AppDispatch>();
    const setting: any = useSelector((state: RootState) => state.Product);
    const sheet: any = useSelector((state: RootState) => state.PAGEController);

    const [value, onChange] = useState<Value>(new Date());

    useEffect(() => {
        //dispath(GetDATAsheet());
    }, [sheet]);

    const input1: inp = {
        p_id: 1,
        col: "quantity",
        data: "1",
    };
    const ChangeSheet1 = async (data:any) =>{
        const year = data.getFullYear();
        const month = ('0' + (data.getMonth() + 1)).slice(-2);
        const day = ('0' + data.getDate()).slice(-2);
        const date = year + month + day;
        const input: Pdata = {
            prod_data_id: 0,
            p_id: 0,
            p_name: "",
            value: 0,
            p_quantity: 0,
            date: date,
        }
        await dispath(setSheet3input(date));
    }
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
                date: sheet.DATE  //긴급변경
            };
            arr.push(d1);
        }
        dispath(insertsheet(arr));
    }

    const handleSheet1init = () => {
        dispath(initD());
    }

    let sum: number = 0;
    setting.data.map((data: any) => (
        sum += (Number(data.quantity) * Number(data.value))));
    console.log(sheet.sheet1key);
    return (
        <div>
             <div className="flex justify-center">
                <Calendar onChange={async (e: any) => { await onChange(e); await ChangeSheet1(e)}} value={value} />
            </div>
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
                            <tr className={((sheet.sheet1key == data.p_id) ? "bg-blue-400" : "bg-stone-50" )} key={data.p_id}>
                                <td>{data.p_name}</td>
                                <td>{data.value}</td>
                                <td><input onFocus={() => {dispath(setSheet1key(data.p_id));}} onBlur={() => {dispath(setSheet1key(-1)); dispath(inupsheet(setting));  }} value={data.quantity} onChange={(e: any) => {
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
                        <td><button className="text-2xl font-bold text-green-700" onClick={(e) => { handleSheet1Click() }}>제출</button></td>
                        <td className="text-2xl font-bold text-right"><button className="text-green-700" onClick={(e) => { handleSheet1init() }}>초기화  </button>  총 합산 :</td>
                        <td className="text-2xl font-bold text-left">{sum}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
})

export default Sheet1;