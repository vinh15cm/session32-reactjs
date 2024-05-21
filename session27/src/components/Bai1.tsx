import React from 'react'
export default function Bai1() {
    let subject: string[] = ["HTML", "CSS", "Javascript", "Reactjs"]
    return (
        <div>
            bài2 : nội dung:
            <ul>
                {subject.map((a, b, c) => {
                    return <li key={b}>{b + 1} .{a}</li>
                })}
            </ul>
        </div>
    )
}