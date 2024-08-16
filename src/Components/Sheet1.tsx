import { data, GetDATAsheet, Getsheet, initinsertD, inp, insertsheet, insheet, inupDATAsheet, inupsheet, Pdata, setD, setinsertD } from "../API/Product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../API/store";
import { useEffect } from "react";
import "../Asset/excel.css";
import { setSheet, setSheet2input } from "../API/PAGEController";
import { Await } from "react-router-dom";

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
    }, [sheet]);
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
                date: date
            };
            arr.push(d1);
        }
        console.log(arr);
        dispath(insertsheet(arr));
    }

    const handleSheet2Click = async () => {
        await dispath(insheet(setting.insertdata));
        dispath(initinsertD(1));
        await dispath(Getsheet());
    }

    let sum: number = 0;
    setting.data.map((data: any) => (
        sum += (Number(data.quantity) * Number(data.value))));







    if (setting.odata === undefined || setting.data === undefined)
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
                        <tr>
                            <td className="text-2xl font-bold text-green-700" onClick={(e) => { handleSheet1Click()}}>입력</td>
                            <td className="text-2xl font-bold text-right">총 합산 :</td>
                            <td className="text-2xl font-bold text-left">{sum}</td>
                        </tr>
                    </tbody>
                </table>
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
                <button className="text-2xl font-bold text-green-700" onClick={(e) => {dispath( setSheet2input(sheet.sheet2input));}}>추가</button>
                <div style={{visibility : (sheet.sheet2input ? "visible" : "hidden")}}>
                    <table>
                        <thead>
                            <tr>
                                <th className="unused">이름</th>
                                <th className="unused">가격</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td><input value={setting.insertdata.p_name} onChange={(e: any) => {
                                const input: inp = {
                                    p_id : 0,
                                    col: "p_name",
                                    data: e.target.value,
                                };
                                dispath(setinsertD(input));
                            }}/ ></td>
                            <td><input value={setting.insertdata.value} onChange={(e : any) =>{
                                const input: inp = {
                                    p_id : 0,
                                    col: "value",
                                    data: e.target.value,
                                };
                                dispath(setinsertD(input));
                            }}/ ></td>
                        </tbody>
                    </table>
                    <button onClick={handleSheet2Click}>push</button>
                </div>
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
                    </tbody>
                </table>
            </div>
        );
    }
})

export default Sheet1;

function DATEoDATA(date: string): any {
    throw new Error("Function not implemented.");
}
