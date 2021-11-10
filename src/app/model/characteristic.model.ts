import {CharsTypeEnum} from "../enum/chars-type.enum";

export interface CharacteristicModel {
    id: number ;
    name: string;
    alias?: string;
    type?: CharsTypeEnum;
    reportableId?: number;
    checked?: boolean;
    isElementByDefault?: boolean;
    isElementByConfiguration?: boolean;
    isDisabled?: boolean;
    isSelected?: boolean;
    isReportable?: boolean;
    isInHer?: boolean;
    isMandatory?: boolean;
}
