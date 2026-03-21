import { test, expect } from "@playwright/test";

test("viktoriini läbimine", async ({ page }) => {
	// rakenduse avamine
	await page.goto("/quiz");

	// küsitluse alustamine
	await page.getByRole("button", { name: "Alusta vastamist" }).click();

	// 1. küsimus
	await expect(page.locator("h3")).toContainText("Küsimus: 1");

	await page.getByRole("radio", { name: "Suitsupääsuke" }).check();
	await page.getByRole("button", { name: "Kontrolli" }).click();

	await expect(page.getByText("Õige!")).toBeVisible();
	await page.getByRole("button", { name: "Edasi" }).click();

	// 2. küsimus
	await page.getByRole("radio", { name: "Põder" }).check();
	await page.getByRole("button", { name: "Kontrolli" }).click();

	await expect(page.getByText("Vale. Õige vastus")).toBeVisible();
	await page.getByRole("button", { name: "Edasi" }).click();

	// 3. küsimus
	await page.getByRole("radio", { name: "Hunt" }).check();
	await page.getByRole("button", { name: "Kontrolli" }).click();
	await page.getByRole("button", { name: "Edasi" }).click();

	// tulemused
	await expect(page.getByText("Tulemused")).toBeVisible();

	// skoor
	await expect(page.getByText("Skoor: 2 / 3")).toBeVisible();
});
