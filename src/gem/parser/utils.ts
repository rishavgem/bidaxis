export function extractEmail(text: string): string[] {
    return text.match(
        /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
    ) || [];
}


export function extractMoney(text: string): string | null {

    const m = text.match(
        /(?:₹|Rs\.?|INR)?\s*([\d,]+(?:\.\d+)?)/i
    );

    return m?.[1] ?? null;
}


export function extractDate(text: string): string | null {

    const m = text.match(
        /\d{2}-\d{2}-\d{4}\s+\d{2}:\d{2}:\d{2}/
    );

    return m?.[0] ?? null;
}


/**
 * Extract text appearing after a label.
 *
 * Example:
 *
 * Item Category
 * OIL FILTER , KNUCKLE BRG
 *
 * will return:
 *
 * OIL FILTER , KNUCKLE BRG
 */
export function valueAfter(
    label: string,
    text: string
): string | null {

    const regex = new RegExp(
        `${label}\\s*[:\\-]?\\s*([^\\n]+)`,
        "i"
    );

    const m = regex.exec(text);

    return m?.[1]?.trim() || null;
}


/**
 * Extract a block between two PDF labels.
 *
 * Useful for fields such as Item Category
 * where the value can span multiple lines.
 */
export function valueBetween(
    startLabel: string,
    endLabel: string,
    text: string
): string | null {

    const regex = new RegExp(
        `${startLabel}[\\s\\S]*?${endLabel}`,
        "i"
    );

    const match = regex.exec(text);

    if (!match) {
        return null;
    }

    let value = match[0];

    value = value.replace(
        new RegExp(`^${startLabel}`, "i"),
        ""
    );

    value = value.replace(
        new RegExp(`${endLabel}[\\s\\S]*$`, "i"),
        ""
    );

    return value
        .replace(/\s+/g, " ")
        .trim() || null;
}