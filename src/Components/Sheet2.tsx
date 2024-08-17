import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../API/store";
import { data,deletedata, Getsheet, initinsertD, inp, insheet, inupsheet, setD, setinsertD } from "../API/Product";
import { setSheet2input } from "../API/PAGEController";

const Sheet2 : any = ((e : any) =>{
    const dispath = useDispatch<AppDispatch>();
    const setting: any = useSelector((state: RootState) => state.Product);
    const sheet: any = useSelector((state: RootState) => state.PAGEController);


    let suml: number = 0;
    setting.odata.map((data: any) => (
        suml += (Number(data.p_quantity) * Number(data.value))));

    const handleSheet2Click = async () => {
        await dispath(insheet(setting.insertdata));
        dispath(initinsertD(1));
        await dispath(Getsheet());
    }

    const handledelete = async (data: any) => {
        const input: data = {
            p_id: data,
            value: 0,
            quantity: 0,
            p_name: ""
        }
        await dispath(deletedata(input));
        await dispath(Getsheet());
    }

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
                                    <td>
                                        <button onClick={() => { handledelete(data.p_id); }}>X</button>
                                        <input onBlur={() => { dispath(inupsheet(setting)); }} value={data.p_name} onChange={(e: any) => {
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
                <button className="text-2xl font-bold text-green-700" onClick={(e) => { dispath(setSheet2input(sheet.sheet2input)); }}>추가</button>
                <div style={{ visibility: (sheet.sheet2input ? "visible" : "hidden") }}>
                    <table>
                        <thead>
                            <tr>
                                <th className="unused">추가할 항목 이름</th>
                                <th className="unused">추가할 항목 가격</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td><input value={setting.insertdata.p_name} onChange={(e: any) => {
                                const input: inp = {
                                    p_id: 0,
                                    col: "p_name",
                                    data: e.target.value,
                                };
                                dispath(setinsertD(input));
                            }} /></td>
                            <td><input value={setting.insertdata.value} onChange={(e: any) => {
                                const input: inp = {
                                    p_id: 0,
                                    col: "value",
                                    data: e.target.value,
                                };
                                dispath(setinsertD(input));
                            }} /></td>
                        </tbody>
                    </table>
                    <button onClick={handleSheet2Click}>push</button>
                </div>
            </div>
    );
})

export default Sheet2;