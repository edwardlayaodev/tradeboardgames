import { test, expect } from "@playwright/test";

test("has correct brand", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.locator("span")).toContainText("tradeboardgames");
});

test("redirects to sign-in page", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click("text=Sign-In");
  await expect(page).toHaveURL("http://localhost:3000/sign-in");
});
