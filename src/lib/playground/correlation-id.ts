const SAFE_CORRELATION_ID = /^[A-Za-z0-9._:-]{1,128}$/;

export function resolveCorrelationId(
  candidate: string | undefined,
  now = new Date(),
  randomValue = Math.random(),
) {
  const trimmed = candidate?.trim();

  if (trimmed && SAFE_CORRELATION_ID.test(trimmed)) {
    return trimmed;
  }

  const timestamp = now.getTime();
  const random = Math.floor(randomValue * 1_000_000)
    .toString(36)
    .padStart(4, "0");

  return `cham-sync-${timestamp}-${random}`;
}

export function isSafeCorrelationId(value: string) {
  return SAFE_CORRELATION_ID.test(value.trim());
}
