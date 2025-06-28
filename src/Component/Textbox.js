import { useState } from "react";

const Textbox = (prop) => {
    let variant = !prop?.variant ? 'default' : prop.variant;

    let variantClass;

    switch (variant) {
        case 'ok':
            variantClass = "green-200";
            break;
        case 'danger':
            variantClass = "red-400";
            break;
        default:
            variantClass = "slate-200";
    }

    return <>
        <div className="w-full max-w-sm min-w-[200px]">
            <label className={`block mb-2 text-sm text-slate-600`}>
                {prop.label}
            </label>
            <input className={`w-full bg-transparent placeholder:text-slate-400 text-${variantClass} text-sm border
            rounded-md px-3 py-2 transition duration-300 ease focus:outline-none
             shadow-sm focus:shadow border-${variantClass} focus:border-${variantClass} hover:border${variant}`} placeholder={!prop.placeholder ? '' : prop?.placeholder} />
        </div>
    </>
}

export default Textbox;