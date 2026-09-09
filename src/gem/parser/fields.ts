export function findValue(
    text: string,
    label: string
) {
    const regex = new RegExp(
        `${label}\\s*:?\\s*([^\\n]+)`,
        "i"
    );

    const match = regex.exec(text);

    return match?.[1]?.trim() ?? null;
}

export function findEmail(text: string) {

    const match = text.match(
        /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
    );

    return match ?? [];
}