import { Client, Account, ID } from "appwrite";
import Configuration from "../Configs/Config";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(Configuration.appWriteURL)
      .setProject(Configuration.appWriteProjectID);
    this.account = new Account(this.client);
  }

  async creatAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //   return userAccount;
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("CreateAccount Error", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("Login Error", error);
    }
  }

  async isUserLogin() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("is User Login", error);
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Logout", error);
    }
  }
}

const authService = new AuthService();

export default authService;
