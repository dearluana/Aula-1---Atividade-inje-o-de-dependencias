"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: 'postgresql://postgres.cramggznuacbprhzmpnd:[VATDoT5LoZMAs5DN]@aws-0-sa-east-1.pooler.supabase.com:6543/postgres'
});
client.connect();
exports.default = client;
