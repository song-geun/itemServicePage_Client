import { data, GetDATAsheet, Getsheet, inp, inupDATAsheet, inupsheet, setD } from "../API/Product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../API/store";
import { useEffect } from "react";
import "../Asset/excel.css";

const Sheet1: any = ((e: any) => {
    const dispath = useDispatch<AppDispatch>();
    const setting: any = useSelector((state: RootState) => state.Product);
    const sheet: any = useSelector((state: RootState) => state.PAGEController);




    const input1: inp = {
        p_id: 1,
        col: "quantity",
        data: "1",
    };
    useEffect(() => {
        dispath(GetDATAsheet());
        dispath(Getsheet());
    }, [sheet.sheetnum]);

    let sum: number = 0;
    setting.data.map((data: any) => (
        sum += (Number(data.quantity) * Number(data.value))));
    if (setting.odata.length === 0 || setting.data.length === 0)
        return <div>에러 페이지</div>;
    if (sheet.sheetnum == 1) {
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
                    </tbody>
                </table>
                <div>{sum}</div>
            </div>
        );
    }
    else if (sheet.sheetnum == 2) {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th className="unused">이름</th>
                            <th className="unused">가격</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            setting.data.map((data: any) => (
                                <tr key={data.p_id}>
                                    <td><input onBlur={() => { dispath(inupsheet(setting)); }} value={data.p_name} onChange={(e: any) => {
                                        const input: inp = {
                                            p_id: data.p_id,
                                            col: "p_name",
                                            data: e.target.value,
                                        };
                                        dispath(setD(input));
                                    }} /></td>
                                    <td><input onBlur={() => { dispath(inupsheet(setting)); }} value={data.value} onChange={(e: any) => {
                                        const input: inp = {
                                            p_id: data.p_id,
                                            col: "value",
                                            data: e.target.value,
                                        };
                                        dispath(setD(input));
                                    }} /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
    else if (sheet.sheetnum == 3) {
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

                            setting.odata.map((data: any) => (
                                <tr key={data.p_id}>
                                    <td><input onBlur={() => { dispath(inupDATAsheet(setting)); }} value={data.p_name} onChange={(e: any) => {
                                        const input: inp = {
                                            p_id: data.p_id,
                                            col: "p_name",
                                            data: e.target.value,
                                        };
                                        dispath(setD(input));
                                    }} /></td>
                                    <td><input onBlur={() => { dispath(inupDATAsheet(setting)); }} value={data.value} onChange={(e: any) => {
                                        const input: inp = {
                                            p_id: data.p_id,
                                            col: "value",
                                            data: e.target.value,
                                        };
                                        dispath(setD(input));
                                    }} /></td>
                                    <td><input onBlur={() => { dispath(inupDATAsheet(setting)); }} value={data.p_quantity} onChange={(e: any) => {
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
                    </tbody>
                </table>
            </div>
        );
    }
})

export default Sheet1;