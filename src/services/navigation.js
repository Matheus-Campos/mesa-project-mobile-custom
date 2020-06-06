import {createRef} from 'react';

export const navigationRef = createRef();

export function navigate(name, params) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}

export function goBack() {
  navigationRef.current && navigationRef.current.goBack();
}

export function reset(newState) {
  navigationRef.current && navigationRef.current.reset(newState);
}
