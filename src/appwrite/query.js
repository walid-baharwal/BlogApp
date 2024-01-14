import { Client, Databases, Storage, Query, ID } from "appwrite";
import config from "../envConfig/envConfig";

export class QueryService {
  client = new Client();
  database;
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createBlog({
    author,
    title,
    slug,
    content,
    featuredImage,
    category,
    status,
    userId,
  }) {
    try {
      //console.log(":: ",{ title, slug, content, featuredImage, category,status, userId, author })
      return await this.database.createDocument(
        config.appwritedDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          author,
          title,
          content,
          category,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite Service Error :: BlogCreation :: ", error.message);
    }
  }

  async updateBlog(slug, { title, content, featuredImage, category, status }) {
    try {
      return await this.database.updateDocument(
        config.appwritedDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          category,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite Service Error :: PostUpdation :: ", error);
    }
  }

  async deleteBlog(slug) {
    try {
      await this.createPost.deleteDocument(slug);
      return true;
    } catch (error) {
      console.log("Appwrite Service Error :: PostDeletion :: ", error);
      return false;
    }
  }

  async getBlog(slug) {
    try {
      return await this.database.getDocument(
        config.appwritedDatabaseId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite Service Error :: GetBlog :: ", error);
    }
  }

  // All active posts
    async getBlogs(queries = []) {
      try {
        //console.log(queries)
        const appwriteQueries = queries.map((query) => Query.equal(query.key, query.value));
        console.log(appwriteQueries)
        return await this.database.listDocuments(
          config.appwritedDatabaseId,
          config.appwriteCollectionId,
          appwriteQueries

        );
      } catch (error) {
        console.log("Appwrite Service Error :: GetBlogs :: ", error);
      }
    }

  // File upload service

  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
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

  getFileView(fileId) {
    try {
      return this.storage.getFileView(config.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite Service Error :: Preview File :: ", error);
    }
  }
}

const queryService = new QueryService();

export default queryService;
