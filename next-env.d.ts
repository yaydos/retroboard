/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.scss' {

    interface ClassNames {
        readonly [className: string]: string;
    }

    declare const styles: ClassNames;

    export default styles;
}