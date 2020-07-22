import React from 'react'


interface Message {
    message: string;
}

interface Props {
    data: Array<Message>;
}

const ListView: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <ul>
                {
                    data.map((e: Message, i: any) => {
                        return (
                            <li key={i}>{e.message}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ListView;