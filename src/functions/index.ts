import { createElement } from "react";

export interface MyJSX {
    tag: string;
    children?: MyJSX[] | MyJSX | string;
    props?: any;
}
export function ConvertToJsx(ctx: MyJSX | string): JSX.Element | string {
    if (typeof ctx === "string") return ctx;
    return createElement(
        ctx.tag,
        ctx.props,
        ...(typeof ctx.children === "string"
            ? [ctx.children]
            : Array.isArray(ctx.children)
            ? ctx.children.map(ConvertToJsx)
            : ctx.children !== undefined
            ? [ConvertToJsx(ctx.children)]
            : [])
    );
}
export function ParseQuery(obj: any) {
    return obj
        ? Object.keys(obj)
              .map((key) => `${key}=${obj[key]}`)
              .join("&")
        : "";
}
