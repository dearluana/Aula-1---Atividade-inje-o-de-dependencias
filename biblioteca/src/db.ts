import { Client } from 'pg';

const client = new Client({
    connectionString: 'postgresql://postgres.cramggznuacbprhzmpnd:[VATDoT5LoZ]@aws-0-sa-east-1.pooler.supabase.com:6543/postgres'
});

client.connect();

export default client;
