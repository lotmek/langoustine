import { User } from "domain/model/user";

export interface IUserRepository {
  /**
   * Create a user in the database.
   */
  createUser(user: User): Promise<User>;

  /**
   * Retrieve a user by username.
   *
   * @param username Maximum number of elements
   */
  getUserByUsername(username: string): Promise<User | null>;
}
