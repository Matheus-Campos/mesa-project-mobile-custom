let navigation;

export function setRootNavigation(rootNavigationRef) {
  navigation = rootNavigationRef;
}

export function navigate(name, params) {
  navigation.current.navigate(name, params);
}

export function goBack() {
  navigation.current.goBack();
}
