import {NG_VALUE_ACCESSOR, NG_VALIDATORS, NG_ASYNC_VALIDATORS} from '@angular/forms';
import {forwardRef} from '@angular/core';

export function provideMakersFunction(component) {
  return {
    provide    : NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => component),
    multi      : true,
  };
}
export function provideValidatorFunction(component) {
  return {
    provide    : NG_VALIDATORS,
    useExisting: forwardRef(() => component),
    multi      : true,
  };
}
export function provideAsyncValidatorFunction(component) {
  return {
    provide    : NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => component),
    multi      : true,
  };
}
