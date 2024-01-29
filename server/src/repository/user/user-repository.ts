import { boundClass } from "autobind-decorator";
import { IUserRepository } from "./user-repository.interface";
import { BaseRepository } from "../base-repository";
import { FullCard } from "domain/model/card";
import { User } from "domain/model/user";
import { userModel } from "domain/schema/user-schema";

@boundClass
class UserRepository extends BaseRepository<User> implements IUserRepository {
  public async createUser(user: User): Promise<User> {
    // Add audits
    const userToCreate = this.buildAuditedValue(user);

    try {
      const createdUser = await userModel.create(userToCreate);
      return this.buildAuditLessValue(createdUser);
    } catch (err) {
      console.log("Error while creating the user: ", err);
      throw new Error("An error occurred while creating the user in the database.");
    }
  }

  public async getUserByUsername(username: string): Promise<User | null> {
    try {
      const user = await userModel.findOne({ username }).exec();
      return user && this.buildAuditLessValue(user);
    } catch (err) {
      console.log("Error while retrieving user: ", err);
      throw new Error("An error occurred while retrieving a user in the database.");
    }
  }
}

// Singleton
export const userRepository = new UserRepository();
