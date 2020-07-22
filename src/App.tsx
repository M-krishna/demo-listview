import React from 'react'
import ListView from './ListView';

const App: React.FC = () => {
    const data = [
        {message: "Hello There"},
        {message: "Hello There"},
        {message: "Hello There"},
        {message: "Hello There"},
        {message: "Hello There"}
    ]
    return (
        <div>
            <ListView data={data} />
        </div>
    )
}

export default App;