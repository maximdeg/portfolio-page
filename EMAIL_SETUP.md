# Email Setup Guide

This guide will help you set up the email functionality for your portfolio contact form.

## Prerequisites

1. A Gmail account
2. Two-factor authentication enabled on your Gmail account

## Setup Steps

### 1. Enable App Passwords

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security"
3. Under "Signing in to Google", select "App passwords"
4. Generate a new app password for "Mail"
5. Copy the generated 16-character password

### 2. Configure Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual Gmail credentials:

```env
EMAIL_USER=your-actual-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
```

**Important Notes:**
- Use your full Gmail address for `EMAIL_USER`
- Use the 16-character app password (not your regular Gmail password) for `EMAIL_PASS`
- Never commit the `.env.local` file to version control

### 3. Test the Email Functionality

1. Start your development server: `npm run dev`
2. Navigate to your portfolio's contact form
3. Fill out the form and submit
4. Check your email (maxim.degtiarev.dev@gmail.com) for the received message

## Troubleshooting

### Common Issues

1. **"Invalid login" error**: Make sure you're using the app password, not your regular Gmail password
2. **"Less secure app access" error**: Enable two-factor authentication and use app passwords
3. **"Network error"**: Check your internet connection and try again

### Security Best Practices

- Keep your `.env.local` file secure and never share it
- Regularly rotate your app passwords
- Monitor your Gmail account for any suspicious activity
- Consider using environment variables in production (Vercel, Netlify, etc.)

## Production Deployment

When deploying to production platforms like Vercel:

1. Add the environment variables in your hosting platform's dashboard
2. Set `EMAIL_USER` and `EMAIL_PASS` with the same values
3. Redeploy your application

The email functionality will work the same way in production as it does in development. 