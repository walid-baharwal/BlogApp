import { Client, Account, ID } from "appwrite";
import config from "../config/config";

export class AuthService {

  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async CreateUserAccount({ name, email, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite Service Error :: UserAccount Creation :: ", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("Appwrite Service Error :: Login :: ", error);
    }
  }

  async getUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite Service Error :: getUser :: ", error);
    }
    return null;
  }
  
  async logout(){
    try {
        return await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite Service Error :: Logout :: ", error);
        
    }
  }

}

const authService = new AuthService();

export default authService;
