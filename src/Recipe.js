import { useState } from 'react';

export default function Recipe({
    name,
    text
}) {
    const [status, setStatus] = useState('empty')
    if (status === 'empty') {
        return (
            <></>
        )
    }
    if (status === 'loading') {
        return (
            <>
                <p>Loading...</p>
            </>
        );
    }
    if (status === 'error') {
        return (
            <>
                <p>Error occured. Please try to reload page.</p>
            </>
        );
    }
    return (
        <div>
            <p>{name}</p>
            <textarea>{text}</textarea>
        </div>
    );
}