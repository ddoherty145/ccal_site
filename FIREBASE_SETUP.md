# Columbus Capital Advisors - CMS Setup Guide

This guide will help you set up Firebase for the Content Management System (CMS).

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Name it "Columbus Capital CMS" (or any name)
4. Follow the setup wizard (you can disable Google Analytics if not needed)

## Step 2: Get Firebase Configuration

1. In your Firebase project, click the gear icon ⚙️ → Project Settings
2. Scroll down to "Your apps" section
3. Click the Web icon (`</>`) to add a web app
4. Register your app (name it "Columbus Capital Website")
5. Copy the `firebaseConfig` object

## Step 3: Update Firebase Configuration

1. Open `src/firebase/config.js`
2. Replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}
```

## Step 4: Enable Firebase Services

### Enable Firestore Database (NOT Realtime Database):

**IMPORTANT:** Make sure you're creating **Firestore Database**, NOT "Realtime Database". They are different products!

1. In Firebase Console left sidebar, look for **"Firestore Database"** (it should have a document icon)
2. Click **"Firestore Database"**
3. Click **"Create database"** button
4. Choose **"Start in production mode"**
5. Select a location closest to your users (e.g., `us-central`, `europe-west`, `asia-east`)
6. Click **"Enable"**

Wait for the database to be created (takes a few seconds).

### Update Firestore Rules:

1. Once created, you'll see the Firestore Database screen
2. Click the **"Rules"** tab at the top (next to "Data")
3. You should see a code editor
4. Replace ALL the content with this:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /articles/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

5. Click **"Publish"** button in the top right

**Troubleshooting:** If you see a parse error:
- Make sure you're in "Firestore Database" → "Rules", NOT "Realtime Database" → "Rules"
- Make sure you replaced ALL the existing content
- The first line should be exactly: `rules_version = '2';`

### Enable Storage:

**IMPORTANT:** Use Cloud Storage for Firebase, not Realtime Database Storage.

1. In the left sidebar, go to **"Storage"**
2. Click **"Get Started"**
3. Choose **"Start in production mode"**
4. Select the same location you chose for Firestore
5. Click **"Done"**

### Update Storage Rules:

1. Once created, click the **"Rules"** tab at the top
2. Replace ALL the content with:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /articles/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

3. Click **"Publish"**

### Enable Authentication:
1. Go to "Authentication" in Firebase Console
2. Click "Get Started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password"

## Step 5: Create Admin User

1. In Firebase Console, go to "Authentication"
2. Click "Add user"
3. Enter email and password (this will be your login)
4. Click "Add user"

**IMPORTANT:** Save these credentials securely!

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Go to http://localhost:5173/login (or your dev URL)
3. Login with the credentials you created
4. You should be redirected to the admin dashboard at `/admin`

## Admin URLs

- **Login:** `/login`
- **Dashboard:** `/admin` (protected)
- **Create Article:** `/admin/new` (protected)
- **Edit Article:** `/admin/edit/:id` (protected)

## How to Use the CMS

### Creating an Article:
1. Go to `/admin` (you must be logged in)
2. Click "New Article"
3. Fill in the form:
   - **Title:** Article headline
   - **Date:** For sorting (YYYY-MM-DD format)
   - **Display Date:** How it appears to users (e.g., "March 2026")
   - **Category:** Choose from News, Announcement, Event, Publication, Partnership
   - **Excerpt:** Short description for the card view
   - **Content:** Full article text (optional)
   - **Main Image:** Primary image shown on the card
   - **Additional Images:** Extra images for the carousel view
4. Click "Create Article"

### Editing an Article:
1. Go to `/admin`
2. Find the article in the table
3. Click "Edit"
4. Make changes
5. Click "Update Article"

### Deleting an Article:
1. Go to `/admin`
2. Find the article in the table
3. Click "Delete"
4. Confirm deletion

## Security Notes

- Never commit your Firebase config with real credentials to a public repository
- Consider using environment variables for production
- The admin panel is protected - only authenticated users can access it
- Firestore rules allow anyone to read articles but only authenticated users can write
- Storage rules allow anyone to view images but only authenticated users can upload

## Troubleshooting

### "Firebase: Error (auth/user-not-found)"
- Make sure you created a user in Firebase Authentication
- Check that you're using the correct email/password

### "Missing or insufficient permissions"
- Check your Firestore rules
- Make sure you're logged in when trying to create/edit/delete

### Images not uploading
- Check your Storage rules
- Make sure Storage is enabled in Firebase Console
- Check browser console for specific errors

### Articles not appearing on Updates page
- Check browser console for errors
- Verify Firebase config is correct
- Make sure Firestore Database is created and has the correct rules

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify all Firebase services are enabled
3. Double-check your Firebase configuration in `src/firebase/config.js`
4. Ensure you're logged in when accessing admin pages
