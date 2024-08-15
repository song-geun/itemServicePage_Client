import { data, Getsheet, inp, inupsheet, setD } from "../API/Product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../API/store";
import { useEffect, useMemo } from "react";
import "../Asset/excel.css";

const Sheet1: any = ((e: any) => {
    const dispath = useDispatch<AppDispatch>();
    const setting: any = useSelector((state: RootState) => state.Product);
    const input1 : inp = {
        p_id: 1,
        col: "quantity",
        data: "1",
    };

    useEffect(() => {

        dispath(Getsheet());
    }, []);
    let sum : number = 0;
    setting.data.map((data: any) => (
        sum += (Number(data.quantity)* Number(data.value))));
    if (setting.data == undefined)
        return <div>에러 페이지</div>;
    else {
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
                                    <td><input onBlur={()=>{dispath(inupsheet(setting));}} value={data.quantity} onChange={(e: any) => 
                                    {
                                        const input : inp = {
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
})

export default Sheet1;