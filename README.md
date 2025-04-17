# Test Directus

This is a test project for Directus

1. Create .env file using .env.template

2. Up db local run this command
```
docker compose up -d
```
3. Run bootstrap
```
 npx directus bootstrap
 bun directus bootstrap
```
4. Run project
```
npm run start
bun run start
```
5. Update snapshot
```
 npx directus schema snapshot ./snapshot.yaml
 bun directus schema snapshot ./snapshot.yaml
```
6. Apply snapshot
```
npx directus schema apply ./snapshot.yaml
bun directus schema apply ./snapshot.yaml
```