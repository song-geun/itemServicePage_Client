import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../API/store";
import { AsetD, data, deletedata, Getsheet, initinsertD, inp, insheet, inupsheet, setD, setinsertD } from "../API/Product";
import { setSheet2input } from "../API/PAGEController";

const Sheet2: any = ((e: any) => {
    const dispath = useDispatch<AppDispatch>();
    const setting: any = useSelector((state: RootState) => state.Product);
    const sheet: any = useSelector((state: RootState) => state.PAGEController);
    let dragStart = -1;
    let dragEnd = -1;
    let odata : data;
    let cdata : data;
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
                            <tr 
                            draggable
                            onDragStart = {async (e)=>{
                                odata = data;
                                cdata = data;
                            }} 
                            onDragOver = {async ()=>{
                                cdata = data;
                            }}
                            onDragEndCapture ={async (e)=>{
                                const input4: inp = {
                                    p_id: odata.p_id,
                                    col: "p_name",
                                    data: cdata.p_name,
                                };
                                const input5: inp = {
                                    p_id: odata.p_id,
                                    col: "value",
                                    data: cdata.value.toString(),
                                };
                                const input1: inp = {
                                    p_id: cdata.p_id,
                                    col: "p_name",
                                    data: odata.p_name,
                                };
                                const input2: inp = {
                                    p_id: cdata.p_id,
                                    col: "value",
                                    data: odata.value.toString(),
                                };
                                
                                await dispath(AsetD(input1));
                                await dispath(AsetD(input2));
                                await dispath(AsetD(input4));
                                await dispath(AsetD(input5));
                                await dispath(inupsheet(setting));
                            }}
                            
                            key={data.p_id}>
                                <td>
                                    <button onClick={async () => { await handledelete(data.p_id); }}>X</button>
                                    <input onBlur={async () => {dispath(inupsheet(setting)); }} value={data.p_name} onChange={async (e: any) => {
                                        const input: inp = {
                                            p_id: data.p_id,
                                            col: "p_name",
                                            data: e.target.value,
                                        };
                                        dispath(setD(input));
                                    }} /></td>
                                <td><input onBlur={async () => { dispath(inupsheet(setting)); }} value={data.value} onChange={async (e: any) => {
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
                        <td><input value={setting.insertdata.p_name} onChange={async (e: any) => {
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
                <button className="text-2xl font-bold text-green-700" onClick={async ()=>{await handleSheet2Click()}}>제출</button>
            </div>
        </div>
    );
})

export default Sheet2;