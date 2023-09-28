import { Client, DataBases, Storage, Query, ID } from "appwrite";
import config from "../config/config";

export class QueryService {
  client = new Client();
  database;
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.database = new DataBases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.database.creatDocument(
        config.appwritedDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite Service Error :: PostCreation :: ", error);
    }
  }

  async updatePost({ title, slug, content, featuredImage, status }) {
    try {
      return await this.database.updateDocument(
        config.appwritedDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite Service Error :: PostUpdation :: ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.createPost.deleteDocument(slug);
      return true;
    } catch (error) {
      console.log("Appwrite Service Error :: PostDeletion :: ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.database.getDocument(
        config.appwritedDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite Service Error :: GetPost :: ", error);
    }
  }

  // All active posts
  async getPosts() {
    try {
      return await this.database.getDocument(
        config.appwritedDatabaseId,
        config.appwriteCollectionId,
        [Query.equal("status", "active")]
      );
    } catch (error) {
      console.log("Appwrite Service Error :: GetPosts :: ", error);
    }
  }

  // File upload service

  async uploadFile(file) {
    try {
      await this.storage.createFile(config.appwriteBucketId, ID.unique(), file);
      return true;
    } catch (error) {
      console.log("Appwrite Service Error :: Upload File :: ", error);
      return false;
    }
  }

  //   async updateFile(file) {
  //     try {
  //         //
  //     } catch (error) {
  //       console.log("Appwrite Service Error :: UploadFile :: ", error);
  //       return false;
  //     }
  //   }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite Service Error :: File Deletion :: ", error);
      return false;
    }
  }

  downloadFile(fileId) {
    try {
      return this.storage.getFileDownload(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite Service Error :: Download File :: ", error);
    }
  }

  getFilePreview(fileId) {
    try {
      return this.storage.getFilePreview(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite Service Error :: Preview File :: ", error);
    }
  }
}

const queryService = new QueryService();

export default queryService;
