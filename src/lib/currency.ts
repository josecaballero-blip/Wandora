export type CurrencyCode = "COP" | "USD" | "EUR";

export const EXCHANGE_RATES: Record<CurrencyCode, number> = {
  COP: 1,
  USD: 0.000242,
  EUR: 0.000216,
};

export const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
  COP: "$",
  USD: "US$",
  EUR: "\u20AC",
};

export const CURRENCY_NAMES: Record<CurrencyCode, string> = {
  COP: "Peso Colombiano",
  USD: "Dolar Estadounidense",
  EUR: "Euro",
};

export function convertCurrency(
  amount: number,
  from: CurrencyCode,
  to: CurrencyCode
): number {
  if (from === to) return amount;
  const amountInCOP = from === "COP" ? amount : amount / EXCHANGE_RATES[from];
  return amountInCOP * EXCHANGE_RATES[to];
}

export function formatPrice(amount: number, currency: CurrencyCode): string {
  if (currency === "COP") {
    return `$${Math.round(amount).toLocaleString("es-CO")}`;
  }
  if (currency === "EUR") {
    return `\u20AC${amount.toFixed(0)}`;
  }
  return `US$${amount.toFixed(0)}`;
}
