
/* 
an Awkward interface that can break interface Segregation
export interface WidgetInterface {
    id: string;
    reloading: boolean;
    reload(): void;
}
this may cause problems when some classes and components do not need a part of this interface and they have use them without really implement them like this
class implements WidgetInterface{
     id: string = ''
     reloading: boolean = false;
     reload(): void {}
}
to resolve this problem we break down the interface into two disparate interface.
*/


export interface WidgetInterface {
    id: string;
}
export interface Reloadable {
    reloading: boolean;
    reload(): void;
}