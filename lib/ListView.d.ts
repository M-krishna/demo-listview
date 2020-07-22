import React from 'react';
interface Message {
    message: string;
}
interface Props {
    data: Array<Message>;
}
declare const ListView: React.FC<Props>;
export default ListView;
