import { sayHello } from "../src/sayHello.js"

test("sayHello", () => {
	expect(sayHello()).toBe("Hello, Haz!")
	expect(sayHello("foo")).toBe("Hello, foo!")
})
