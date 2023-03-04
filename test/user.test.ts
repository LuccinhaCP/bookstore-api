import { CreateUserDto } from "src/users/dto/create.user.dto"
import { it, describe } from "@jest/globals";
import { UsersService } from "src/users/users.service";

// describe("User tests", () => {
//   it("Should create a new user", async () => {
//     const userDto = new CreateUserDto({
//         name: "robin",
//         email: "robin@outlook.com",
//         password: "batmansucks123",
//         role: "client"
//     })

//     const user = await createUser(userDto);
//     expect(user.name).toBe(userDto.name);
// }
// )})