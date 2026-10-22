import "dotenv/config";
import { defineConfig, env } from "prisma/config";

// configurações do prisma
export default defineConfig({
  // indica a pasta ondeseŕa criada a pasta do schema
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
