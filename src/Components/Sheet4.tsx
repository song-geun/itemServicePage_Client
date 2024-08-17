import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../API/store";
import { useState } from "react";
import { setSheet3input } from "../API/PAGEController";
import { GetDATAMONTHsheet, Pdata } from "../API/Product";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Sheet4: any = ((e: any) => {
    const dispath = useDispatch<AppDispatch>();
    const setting: any = useSelector((state: RootState) => state.Product);
    const [value, onChange] = useState<Value>(new Date());

    let summonth: number = 0;
    setting.Mdata.map((data: any) => (
        summonth += (Number(data.p_quantity) * Number(data.value))));

    const ChangeMONTH = async (data: any) => {
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
            date: year + month,
        }
        dispath(setSheet3input(date));
        await dispath(GetDATAMONTHsheet(input));
    }

    return (
        <div>
            <div className="flex justify-center">
                <Calendar onChange={async (e: any) => { await onChange(e); await ChangeMONTH(e) }} value={value} />
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

                        setting.Mdata.map((data: any) => (
                            <tr key={data.p_id}>
                                <td>{data.p_name}</td>
                                <td>{data.value}</td>
                                <td>{data.p_quantity}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td></td>
                        <td className="text-2xl font-bold text-right">총 합산 :</td>
                        <td className="text-2xl font-bold text-left">{summonth}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
})

export default Sheet4;