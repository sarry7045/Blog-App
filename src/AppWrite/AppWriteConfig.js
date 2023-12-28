import { Client, Databases, ID, Storage, Query } from "appwrite";
import Configuration from "../Configs/Config";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(Configuration.appWriteURL)
      .setProject(Configuration.appWriteProjectID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImages, status, userId }) {
    try {
      return await this.databases.createDocument(
        Configuration.appWriteDatabaseID,
        Configuration.appWriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImages,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Create Error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImages, status, userId }) {
    try {
      return await this.databases.updateDocument(
        Configuration.appWriteDatabaseID,
        Configuration.appWriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImages,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Update Error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        Configuration.appWriteDatabaseID,
        Configuration.appWriteCollectionID,
        slug
      );
      return true;
    } catch (error) {
      console.log("Delete Error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        Configuration.appWriteDatabaseID,
        Configuration.appWriteCollectionID,
        slug
      );
    } catch (error) {
      console.log("Get Post Error", error);
    }
  }

  async getMultiplePost(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        Configuration.appWriteDatabaseID,
        Configuration.appWriteCollectionID,
        queries
      );
    } catch (error) {
      console.log("Get Error", error);
      return false;
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        Configuration.appWriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Uplaod Error", error);
      return false;
    }
  }

  async deleteFile(file) {
    try {
      await this.bucket.deleteFile(
        Configuration.appWriteBucketID,
        ID.unique(),
        file
      );
      return true;
    } catch (error) {
      console.log("Delete Error", error);
      return false;
    }
  }

  async filePreview(file) {
    try {
      return await this.bucket.getFilePreview(
        Configuration.appWriteBucketID,
        file
      );
    } catch (error) {
      console.log("File Preview Error", error);
      return false;
    }
  }
}

const service = new Service();

export default service;
