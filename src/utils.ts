export function setHidden(cond: boolean) {
    return cond ? { visibility: "hidden" } : {};
}

export function showError(message: string) {
    alert(message);
}