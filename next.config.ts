import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  env: {
    MONGO_URL : 'mongodb+srv://athulkrishnapr10107:athul5758@cluster0.6zvd0.mongodb.net/nextjs?retryWrites=true&w=majority&appName=Cluster0'
  }
};

export default nextConfig;
