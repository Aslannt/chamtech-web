import { describe, expect, it } from "vitest";
import { localeFromPath, localePath, translate } from "./i18n";

describe("i18n routing", () => {
  it("detects Spanish routes", () => {
    expect(localeFromPath("/es/playground")).toBe("es");
    expect(localeFromPath("/playground")).toBe("en");
  });

  it("preserves the equivalent page when switching languages", () => {
    expect(localePath("es", "/projects/cham-orders-api")).toBe("/es/projects/cham-orders-api");
    expect(localePath("en", "/es/projects/cham-orders-api")).toBe("/projects/cham-orders-api");
  });

  it("does not prefix an already localized Spanish path", () => {
    expect(localePath("es", "/es/playground")).toBe("/es/playground");
  });
});

describe("Spanish translations", () => {
  it("translates interface copy but leaves contracts unchanged", () => {
    expect(translate("es", "Run synchronization")).toBe("Ejecutar sincronización");
    expect(translate("es", "CONFIRMED")).toBe("CONFIRMED");
  });
});
