# FormSubmit Setup Guide

Your contact form is now configured to use **FormSubmit** - a completely free service that sends form submissions directly to your email.

## How It Works

- **No backend server needed** - works directly from your frontend
- **Completely free** - no API keys or credit cards required
- **Simple setup** - just configure your email address

## Configuration

### Option 1: Use Default Email (Easiest)

The form is already configured to send emails to:
- `info@columbuscapitalafrica.com`

Just make sure this email address is active and can receive emails.

### Option 2: Use Environment Variable (Recommended)

If you want to use a different email address, create a `.env` file in your project root:

```env
VITE_FORM_SUBMIT_EMAIL=your-email@example.com
```

**Important:** 
- The `.env` file is already in `.gitignore`, so it won't be committed to your repository
- After adding the `.env` file, restart your development server

## First-Time Setup

1. **Submit a test form** from your website
2. **Check your email inbox** (and spam folder) for a verification email from FormSubmit
3. **Click the verification link** in the email to activate the form
4. **That's it!** Future submissions will arrive directly in your inbox

## What You'll Receive

Each form submission will include:
- **Name** of the person submitting
- **Email** address
- **Company/Organization** (if provided)
- **Message** content
- **Subject line**: "New Contact Form Submission from [Name]"

## Features

✅ **Free forever** - no limits on submissions  
✅ **No spam** - FormSubmit includes spam protection  
✅ **Email notifications** - receive submissions instantly  
✅ **No backend required** - works with static hosting  
✅ **Professional formatting** - emails are nicely formatted

## Troubleshooting

### Emails not arriving?

1. **Check spam folder** - First-time emails may go to spam
2. **Verify email address** - Make sure the email is correct
3. **Check FormSubmit status** - Visit [formsubmit.co](https://formsubmit.co) to check service status
4. **Verify the form** - Make sure you clicked the verification link in the initial email

### Want to change the email address?

1. Update the `VITE_FORM_SUBMIT_EMAIL` in your `.env` file
2. Or change the default in `src/pages/Contact.jsx` (line 46)
3. Restart your development server
4. Submit a new test form to verify the new email

## Testing

To test the form:

1. Fill out the contact form on your website
2. Click "Send Message"
3. You should see a success message
4. Check your email inbox for the submission

## Need Help?

- **FormSubmit Documentation**: https://formsubmit.co/documentation
- **FormSubmit Support**: https://formsubmit.co/contact

---

**Note:** FormSubmit is a third-party service. For production use, you may want to consider:
- Setting up your own email service (SendGrid, Mailgun, etc.)
- Using a backend API to handle form submissions
- Adding additional spam protection

But for most use cases, FormSubmit works perfectly and is completely free!

