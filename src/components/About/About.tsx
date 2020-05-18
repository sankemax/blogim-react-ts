import React from "react";

interface AboutProps {
    hidden: boolean
}

export default function About({ hidden }: AboutProps) {
    return (
        <div hidden={hidden}>
            about page
        </div>
    );
}
