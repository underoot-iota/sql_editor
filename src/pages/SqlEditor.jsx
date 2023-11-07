import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Body from "../components/Body";

function SqlEditor() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <Body/>
        </div>
    );
}

export default SqlEditor;
