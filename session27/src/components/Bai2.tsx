function Sum(a: number, b: number): number {
    return a + b;
}
function Subtraction(a: number, b: number): number {
    return a - b;
}
function Divide(a: number, b: number): number {
    return a / b;
}
function Core(a: number, b: number): number {
    return a * b;
}
export default function B2() {
    return (
        <>
            Danh sách kết quả
            <div>
                <ol>
                    <li>2 + 3 = {Sum(2, 3)}</li>
                    <li>2 - 3 = {Subtraction(2, 3)}</li>
                    <li>2 / 3 = {(Divide(2, 3))}</li>
                    <li>2 * 3 = {Core(2, 3)}</li>
                </ol>
            </div>
        </>
    );
}