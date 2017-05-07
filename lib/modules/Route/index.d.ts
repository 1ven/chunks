export declare class Route {
    private template;
    private path;
    private restKey;
    constructor(template: string, path: string);
    params(): RouteParams;
    rest(): string;
    private parser();
    private match();
}
export declare type RouteParams = {
    [key: string]: string;
};
