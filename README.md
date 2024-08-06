# Spotify Album Search

First, you will need a Spotify account and an app.

[See here for info](https://developer.spotify.com/documentation/web-api/tutorials/getting-started#create-an-app)

1. Create a 'secrets.json' file inside the src folder.
2. Enter your Spotify App client_id and client_secret into the JSON file:

```json
{
  "client_id": "Your-Client-ID",
  "client_secret": "Your-Client-Secret"
}
```

3. Run the app in dev mode

```bash
npm run dev
```

- or build and run in production mode

```bash
npm run build
npm run preview
```

4. Click the button to request a new token (lasts for an hour).
5. The search bar should appear.