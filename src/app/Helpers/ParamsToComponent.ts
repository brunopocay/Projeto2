import { Params } from "@angular/router";

export function ParamsToComponent<T>(name: string, param: T): Params{
    const queryParams: Params = {};
    queryParams[name] = JSON.stringify(param);
    
    return queryParams;
}