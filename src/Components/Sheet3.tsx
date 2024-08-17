import { useDispatch, useSelector } from "react-redux";
import { setSheet3input } from "../API/PAGEController";
import { GetDATADATEsheet, Pdata } from "../API/Product";
import { AppDispatch, RootState } from "../API/store";
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Sheet3: any = ((e: any) => {
    const dispath = useDispatch<AppDispatch>();
    const setting: any = useSelector((state: RootState) => state.Product);
    const [value, onChange] = useState<Value>(new Date());


    let sumD: number = 0;
    setting.odata.map((data: any) => (
        sumD += (Number(data.p_quantity) * Number(data.value))));

    const ChangeDATE = async (data: any) => {
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
        dispath(setSheet3input(date));
        await dispath(GetDATADATEsheet(input));
    }

    return (
        <div>
            <div className="flex justify-center">
                <Calendar onChange={async (e: any) => { await onChange(e); await ChangeDATE(e) }} value={value} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th className="unused">이름</th>
                        <th className="unused">가격</th>
                        <th className="unused">수량</th>
                        <th className="unused">날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        setting.odata.map((data: any) => (
                            <tr key={data.p_id}>
                                <td>{data.p_name}</td>
                                <td>{data.value}</td>
                                <td>{data.p_quantity}</td>
                                <td>{data.date}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td></td>
                        <td className="text-2xl font-bold text-right">총 합산 :</td>
                        <td className="text-2xl font-bold text-left">{sumD}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

})

export default Sheet3;