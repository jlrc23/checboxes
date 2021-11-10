import { ControlValueAccessor} from '@angular/forms';

export class ControlAbstract<T = any>  implements ControlValueAccessor{
    public disabled: boolean;
    public onChange: Function;
    public onTouched: Function;
    public value: T;

    public setValue(value): void {
        this.value = value;
        if (this.onChange) {
            this.onChange(this.value);
        }
        if (this.onTouched) {
            this.onTouched();
        }

    }
    /**
     * Set the function to be called when the control receives a change event.
     */
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    /**
     * Set the function to be called when the control receives a touch event.
     */
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    /**
     * This function is called when the control status changes to or from "DISABLED".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     */
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    /**
     * Write a new value to the element.
     */
    writeValue(obj: any): void {
        this.value = obj;
    }
}
