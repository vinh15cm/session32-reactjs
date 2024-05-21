function formatName(a: any): string {
    return a.firstName + "  " + a.lastName;
}

export default function B6() {
    const user = {
        firstName: "Nguyễn Xuân",
        lastName: "Nhất",
    }
    return (
        <div>
            <h4>Họ và tên là: {formatName(user)}</h4>
        </div>
    )
}