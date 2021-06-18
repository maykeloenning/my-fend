// Import the js file to test
import { checkForName  } from "../src/client/js/nameChecker"


describe("Testing the submit functionality", () => {
    // async function
    test("Testing the postData function", () => {
          const input = [{url: 'http://localhost:8080/language', newInfo: "Hello, it's very nice to meet you"}];
          const output = [{
          }];
          try {
            expect(checkForName(input)).toBe(output);
            done();
          } catch (error) {
            console.log(error);
          }
        }
    );
});