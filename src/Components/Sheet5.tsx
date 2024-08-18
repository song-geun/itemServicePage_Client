import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../API/store";
import { useState } from "react";
import { setSheet3input, setSheet5input } from "../API/PAGEController";
import { GetDATAPeriodsheet, Pdata } from "../API/Product";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Sheet5: any = ((e: any) => {
    const dispath = useDispatch<AppDispatch>();
    const setting: any = useSelector((state: RootState) => state.Product);
    const [value, onChange] = useState<Value>(new Date());
    const [value1, onChange1] = useState<Value>(new Date());
    const sheet: any = useSelector((state: RootState) => state.PAGEController);
    let sumPeriod: number = 0;
    setting.Pedata.map((data: any) => (
        sumPeriod += (Number(data.p_quantity) * Number(data.value))));

    const ChangePeriodto = async (data: any) => {
        const year = data.getFullYear();
        const month = ('0' + (data.getMonth() + 1)).slice(-2);
        const day = ('0' + data.getDate()).slice(-2);
        const date = year + month + day;
        const input: Pdata = {
            prod_data_id: 0,
            p_id: 0,
            p_name: date,
            value: 0,
            p_quantity: 0,
            date: date,
        }
        dispath(setSheet3input(date));
        await dispath(GetDATAPeriodsheet(input));
    }
    const ChangePeriodfrom = async (data: any) => {
        const year = data.getFullYear();
        const month = ('0' + (data.getMonth() + 1)).slice(-2);
        const day = ('0' + data.getDate()).slice(-2);
        const date = year + month + day;
        const input: Pdata = {
            prod_data_id: 0,
            p_id: 0,
            p_name: sheet.DATE,
            value: 0,
            p_quantity: 0,
            date: date,
        }
        dispath(setSheet5input(date));
        await dispath(GetDATAPeriodsheet(input));
    }

    return (
        <div>
            <div className="flex justify-center">
                <Calendar onChange={async (e: any) => { await onChange(e); await ChangePeriodto(e) }} value={value} />
                <Calendar onChange={async (e: any) => { await onChange1(e); await ChangePeriodfrom(e) }} value={value1} />
            </div>
            <br/>
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

                        setting.Pedata.map((data: any) => (
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
                        <td className="text-2xl font-bold text-left">{sumPeriod}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
})

export default Sheet5;