import { InjectionToken } from "@angular/core";
import { Reloadable } from "./widget-interface";

export const  RELOADABLE_CONTENT=new InjectionToken<Reloadable>(
    'reloadable-content'
);