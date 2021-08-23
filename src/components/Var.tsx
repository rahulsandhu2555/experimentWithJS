import {ReactChild, ReactChildren} from "react";

export const V=(props:any) =>{
    return <span className={'text-blue-500'}>{props.children}</span>
}
export const Comment=(props:any) =>{
    return <div className={'text-green-500'}>{props.children}</div>
}
export const Log=(props:any) =>{
    return <div className={'text-red-500'}>{props.children}</div>
}
export const Gray=(props:any) =>{
    return <span className={'text-gray-500'}>{props.children}</span>
}
export const Heading=(props:any) =>{
    return <h2 className={'text-2xl text-gray-800'}>{props.children}</h2>
}
export const SubHeading=(props:any) =>{
    return <h2 className={'text-2 text-gray-600'}>{props.children}</h2>
}
export const CodeBlock=(props:any) =>{
    return <div className={'rounded bg-pink-500 p-4 m-2'}>{props.children}</div>
}
